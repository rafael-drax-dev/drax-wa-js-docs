---
title: Eventos de conexão
description: Acompanhe autenticação, disponibilidade e falhas.
---
Organize os handlers em um único mapa por serviço, usando `client.events.subscribe()`.

```js
const subscription = client.events.subscribe({
  'connection:update': ({ phase }) => {
    console.log('Fase:', phase);
  },
  'reconnecting': ({ attempt, delayMs }) => {
    console.log('Nova tentativa:', attempt, 'em', delayMs, 'ms');
  },
  'ready': status => {
    console.log('Disponível:', status.ready);
  },
  'client:error': error => {
    console.error(error.code ?? error.name, error.message);
  }
}, {
  onError: (error, { event }) => console.error('Falha no handler:', event, error.cause ?? error),
});

```

| Evento | Quando usar |
| --- | --- |
| `auth:required` | Iniciar a experiência de autenticação escolhida |
| `qr` | Renderizar `{ data, expiresAt }` |
| `pairing-code` | Apresentar `{ code }` |
| `paired` | Receber o JID da conta vinculada; ainda aguarde `ready` |
| `authenticated` | Autenticação aceita; preparo da conexão pode continuar |
| `ready` | Cliente disponível para operações |
| `connection:update` | Mudança de fase da conexão |
| `reconnecting` | Tentativa e atraso da próxima conexão |
| `reconnect:exhausted` | Limite de tentativas atingido |
| `session:reset` | Sessão ativa substituída após rejeição ou logout |
| `warning` | Situação recuperável, como falha na consulta de versão |
| `failure` | Rejeição de autenticação ou falha informada pelo servidor |
| `transport:error` | Falha de rede/transporte |
| `transport:close` | Encerramento, com código e motivo |
| `client:error` | Falha no processamento do cliente |

As notificações de fase atualmente cobrem `server-hello` (conexão segura em andamento), `ready` e `closed`. Não suponha que cada etapa interna gere `connection:update`. Utilize os eventos específicos de autenticação e reconexão.

`status()` fornece uma fotografia: `phase`, `authenticated`, `ready`, `jid`, `lid` e `version`. Em uma aplicação, acompanhe eventos e consulte `status()` quando precisar apresentar o estado atual.



## Inscrições gerenciadas

`client.events.subscribe(handlers, options)` registra um mapa de handlers. Separe os mapas por serviço ou módulo; não registre tudo novamente a cada reconexão.

`onError(error, { event })` é obrigatório. Recebe falhas lançadas ou rejeitadas pelos seus handlers, com `error.code`, `error.event` e a falha original em `error.cause`. Erros da conexão continuam chegando aos eventos próprios, como `client:error`; são responsabilidades distintas.

Retorne a Promise ou utilize `async` para que a inscrição acompanhe a operação. Trabalho iniciado sem retorno não pode ser acompanhado pelo gerenciador.

Os callbacks iniciam na ordem de emissão, mas Promises podem terminar em outra ordem. A biblioteca não bloqueia ACKs, autenticação ou transporte esperando a lógica da aplicação. Para comandos ordenados por conversa, utilize uma fila na aplicação.

| Opção | Uso |
| --- | --- |
| `onError` | Callback obrigatório; pode retornar Promise e não deve lançar |
| `signal` | AbortSignal para retirar todo o grupo de handlers |
| `maxPending` | Limite de admissão de trabalho assíncrono por inscrição; padrão 256 |

`pending` acompanha os callbacks e seus tratamentos de erro. Chamadas a `onError` já necessárias podem elevar temporariamente esse total acima do limite de admissão.

Quando o limite é atingido, novas chamadas dessa inscrição não são executadas; `onError` recebe `ERR_EVENT_OVERFLOW`, uma vez por período de saturação. Não existe fila ilimitada ou replay automático. Outras inscrições continuam funcionando. Defina uma política de recuperação e limites apropriados para sua aplicação.

## Ciclo de vida

```js
const lifecycle = new AbortController();
const subscription = client.events.subscribe({
  message: message => messageService.handle(message),
  receipt: receipt => receiptService.handle(receipt),
}, {
  signal: lifecycle.signal,
  maxPending: 128,
  onError: (error, { event }) => console.error(event, error.cause ?? error),
});

// Ao encerrar esse serviço:
lifecycle.abort(); // ou subscription.unsubscribe()
await subscription.drain({ timeoutMs: 30_000 });
```

`unsubscribe()` é idempotente e remove somente os handlers desse grupo. `active`, `pending` e `lastError` permitem consultar a inscrição. `client.events.names` contém o catálogo disponível.

O cancelamento da inscrição não cancela o trabalho assíncrono já iniciado. `drain()` espera esse trabalho terminar; retire a inscrição primeiro para impedir novas entradas. O timeout produz `ERR_EVENTS_DRAIN_TIMEOUT` e não interrompe seu callback.

Se o próprio `onError` falhar, `lastError` registra `ERR_EVENT_ERROR_HANDLER` e `drain()` rejeita com essa falha. Não há impressão obrigatória de logs no núcleo.

`client.close()` não espera callbacks da aplicação automaticamente. Isso permite fechar o cliente dentro de um handler sem esperar por si mesmo. Não chame `subscription.drain()` de dentro de um callback da mesma inscrição; faça a drenagem no ciclo de encerramento externo.

Os métodos `client.on()`, `once()` e `off()` continuam disponíveis para compatibilidade com EventEmitter. Seus listeners não recebem as garantias das inscrições gerenciadas. Não registre a mesma lógica nas duas interfaces.

## Diagnóstico opcional

Notificações adicionais: `version`, `transport:open`, `handshake`, `prekeys:upload`, `prekeys:ready`, `routing` e `sender-key`. Elas não substituem `ready` e normalmente não precisam ser consumidas pela aplicação. Evite registrar seus dados brutos.

Para mensagens, veja [recebimento](/mensagens/recebimento/) e [confirmações](/mensagens/confirmacoes/).

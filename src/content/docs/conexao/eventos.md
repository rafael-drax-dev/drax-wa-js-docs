---
title: Eventos de conexão
description: Acompanhe autenticação, disponibilidade e falhas.
---
`DraxClient` utiliza a interface `EventEmitter` do Node.js.

```js
client.on('connection:update', ({ phase }) => {
  console.log('Fase:', phase);
});

client.on('reconnecting', ({ attempt, delayMs }) => {
  console.log('Nova tentativa:', attempt, 'em', delayMs, 'ms');
});

client.on('ready', status => {
  console.log('Disponível:', status.ready);
});

client.on('client:error', error => {
  console.error(error.code ?? error.name, error.message);
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


## Diagnóstico opcional

Também existem notificações de diagnóstico: `version` (versão selecionada), `transport:open` (transporte aberto), `handshake` (conexão segura), `prekeys:upload` e `prekeys:ready` (preparo de chaves), `routing` (informação de rota) e `sender-key` (preparo de grupo). Elas não substituem `ready` e normalmente não precisam ser consumidas pela aplicação. Evite registrar seus dados brutos.

Para mensagens, veja [recebimento](/mensagens/recebimento/) e [confirmações](/mensagens/confirmacoes/).

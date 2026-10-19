---
title: client.on(), once() e off()
description: Referência completa da interface EventEmitter herdada pelo cliente.
---
`DraxClient` estende o EventEmitter do Node.js. Você pode usar listeners individuais, inscrições gerenciadas ou serviços separados. Ambas as interfaces recebem os mesmos eventos do cliente; escolha a organização que atende à aplicação.

## on(eventName, listener)

Registra um listener persistente e retorna o próprio cliente. Registre antes de conectar se precisar acompanhar a autenticação e o primeiro `ready`.

```js
import { DraxClient } from 'drax-wa-js';

const client = new DraxClient({
  storage: { path: './sessions/session.drax' },
  auth: { method: 'code' },
});

function handleMessage(message) {
  console.log(message.id, message.type);
}

client.on('message', handleMessage);
client.on('client:error', error => console.error(error));
client.on('transport:error', error => console.error(error));

// Configure também os handlers do método de autenticação escolhido.
// Consulte o exemplo completo de conexão.
await client.connect();
```

Esse trecho demonstra o registro; o [exemplo completo de autenticação](/inicio/conexao/) mostra como solicitar o código. Os exemplos de listeners desta página pressupõem um cliente criado e, quando necessário, conectado.

## Listeners assíncronos

EventEmitter chama os listeners de forma síncrona na ordem de registro, mas não espera as Promises retornadas. Trate rejeições explicitamente:

```js
async function processMessage(message) {
  if (!message.media) return;
  const result = await client.downloadMedia(message.media);
  console.log('Bytes:', result.plaintext.length);
}

function handleMessage(message) {
  processMessage(message).catch(error => {
    console.error('Falha no processamento:', error);
  });
}

client.on('message', handleMessage);
```

Uma exceção síncrona lançada pelo listener também pode interromper a emissão e atingir o chamador. O `onError` de uma inscrição gerenciada não captura erros dos listeners registrados por `client.on()`.

## once(eventName, listener)

Executa no máximo uma vez e retira o listener automaticamente. Não reproduz eventos ocorridos antes do registro.

```js
client.once('ready', status => {
  console.log('Primeira disponibilidade observada:', status.ready);
});
```

Para esperar disponibilidade mesmo quando o cliente já está pronto, prefira `await client.waitUntilReady(timeoutMs)`.

## off(eventName, listener)

Retira uma ocorrência do listener indicado e retorna o cliente. Use a mesma referência de função:

```js
function handleReceipt(receipt) {
  console.log(receipt.messageIds, receipt.status);
}

client.on('receipt', handleReceipt);

// Quando o serviço deixar de acompanhar confirmações:
client.off('receipt', handleReceipt);
```

Listeners anônimos dificultam a remoção individual. Registrar a mesma função duas vezes resulta em duas chamadas; remover uma ocorrência não remove necessariamente todas. A remoção não cancela operações assíncronas já iniciadas.

## Todos os métodos herdados

| Método | Retorno e finalidade |
| --- | --- |
| `on(name, listener)` | Cliente; adiciona listener persistente |
| `addListener(name, listener)` | Alias de on |
| `once(name, listener)` | Cliente; adiciona listener de uma execução |
| `off(name, listener)` | Cliente; remove uma ocorrência |
| `removeListener(name, listener)` | Alias de off |
| `prependListener(name, listener)` | Cliente; registra antes dos listeners existentes |
| `prependOnceListener(name, listener)` | Cliente; registra antes dos demais, uma vez |
| `eventNames()` | Nomes que têm listeners atualmente |
| `listenerCount(name, listener?)` | Quantidade de listeners registrados |
| `listeners(name)` | Cópia da lista de funções; once retorna a função original |
| `rawListeners(name)` | Cópia da lista, incluindo wrappers de once |
| `getMaxListeners()` | Limite configurado para aviso de quantidade de listeners |
| `setMaxListeners(n)` | Cliente; ajusta o aviso, não limita concorrência |
| `removeAllListeners(name?)` | Cliente; remove listeners, inclusive os de outros serviços |
| `emit(name, ...args)` | Booleano indicando se havia listener; emissão local |

`emit()` não envia mensagens ao WhatsApp. Emitir artificialmente `ready`, `message` ou outros eventos do protocolo não altera o estado real da conexão e pode acionar handlers da aplicação com dados fabricados.

`removeAllListeners()` pode remover o encaminhador usado pelas inscrições gerenciadas. Para desmontar um serviço, prefira `off()` com suas funções ou `subscription.unsubscribe()`.

Os metaeventos herdados `newListener` e `removeListener` permitem observar mudanças de listeners. Eles não representam atividades do WhatsApp.

## Escolher a interface

| Necessidade | Interface |
| --- | --- |
| Listeners individuais ou integração existente com EventEmitter | client.on / once / off |
| Mapa de handlers, captura de rejeições e descarte de um grupo | client.events.subscribe |
| Esperar uma conexão disponível | client.waitUntilReady |
| Consultar eventos suportados pela biblioteca | client.events.names |
| Consultar somente eventos com listeners registrados | client.eventNames |

Usar as duas interfaces em serviços diferentes é possível. Registrar a mesma regra nas duas causa processamento duplicado. Não recrie listeners a cada `ready`.

O comportamento herdado segue a [documentação oficial do Node.js 22](https://nodejs.org/download/release/v22.23.0/docs/api/events.html). Para formatos dos dados e opções gerenciadas, consulte [eventos e estados](/conexao/eventos/).

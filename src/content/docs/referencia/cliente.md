---
title: Referência do cliente
description: Métodos, propriedades e entradas públicas suportadas.
---
## Entradas do pacote

```js
import {
  DraxClient,
  DRAX_WA_JS_VERSION,
  SqliteSessionStore,
  SessionStoreError,
  MediaError,
} from 'drax-wa-js';

import { SqliteSessionStore as Store } from 'drax-wa-js/store';
```

A entrada principal e `/store` são os caminhos públicos. Arquivos internos do pacote não são entradas de integração.

## Métodos

| Método | Retorno | Guia |
| --- | --- | --- |
| `connect()` | `Promise<DraxClient>` | [Iniciar](/inicio/conexao/) |
| `waitUntilReady(timeoutMs?)` | `Promise<DraxClient>` | [Iniciar](/inicio/conexao/) |
| `requestPairingCode(phoneNumber, options?)` | `Promise<string>` | [Pareamento](/conexao/pareamento/) |
| `status()` | Estado atual | [Eventos](/conexao/eventos/) |
| `sendMessage(jid, content, options?)` | Resultado com `id`, `to` e `ack` | [Enviar](/mensagens/sendmessage/) |
| `sendText(jid, text, options?)` | Mesmo resultado do envio de texto | [Texto](/mensagens/texto/) |
| `resolveRecipient(recipient, timeoutMs?)` | Dados do destinatário | [Destinatários](/mensagens/texto/) |
| `downloadMedia(media, options?)` | Conteúdo descriptografado | [Download](/midia/recebimento/) |
| `close(code?, reason?)` | `Promise<void>` | [Encerramento](/conexao/encerramento/) |
| `logout(options?)` | `Promise<DraxClient>` | [Desvincular](/conexao/encerramento/) |

`ready` e `isPaired` são propriedades booleanas de leitura. Estar pareado não significa que a conexão já está pronta.

`events` é o gerenciador de inscrições. Use `events.subscribe(handlers, options)` e consulte os nomes em `events.names`. Veja [eventos](/conexao/eventos/). Os métodos herdados de EventEmitter (`on()`, `once()`, `off()`) permanecem disponíveis para compatibilidade; não oferecem a captura gerenciada de falhas.

## Armazenamento e erros

`SqliteSessionStore(path, options?)` aceita `sessionId` e `busyTimeoutMs`. Seus métodos são `load()`, `save(state)`, `reset()` e `close()`. Prefira configurar `storage.path` diretamente no cliente quando não precisar gerenciar o adaptador.

`SessionStoreError` e `MediaError` estendem Error e possuem `code`. Utilize `DRAX_WA_JS_VERSION` ao informar a versão em um relato de problema.

Veja também a [referência completa de client.on(), once() e off()](/referencia/eventemitter/) e o [mapa de imports e módulos](/referencia/caminhos/).

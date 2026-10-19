---
title: Encerrar e desvincular
description: Diferencie fechar a conexão de remover o vínculo da conta.
---
## Fechar preservando a sessão

```js
await client.close();
```

O arquivo salvo permanece disponível para a próxima inicialização. `close(code, reason)` aceita um código WebSocket e um motivo opcional. O padrão é 1000 e motivo vazio.

## Desvincular este cliente

```js
await client.logout();
```

A operação remove **o companion atual**, preserva o estado anterior no armazenamento e retorna à autenticação. O aplicativo receberá os eventos do método configurado.

Para desvincular e permanecer desconectado:

```js
await client.logout({
  reauthenticate: false,
  timeoutMs: 20_000,
});
```

Uma sessão vinculada precisa estar pronta para essa operação. Rejeições retornam erro; não apague credenciais para tentar forçar sucesso.

## Encerramento recomendado

```js
let closing;
const shutdown = () => closing ??= client.close();

process.once('SIGINT', () => { void shutdown(); });
process.once('SIGTERM', () => { void shutdown(); });
```

Pare de aceitar tarefas novas antes de encerrar e aguarde as operações que sua aplicação ainda controla. Não chame `logout()` em todo desligamento normal: isso exigiria novo pareamento.

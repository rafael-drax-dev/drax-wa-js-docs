---
title: Configurar o cliente
description: Opções de armazenamento e limites de mídia.
---
```js
const client = new DraxClient({
  storage: {
    path: './sessions/session.drax',
    sessionId: 'default',
    busyTimeoutMs: 5_000,
  },
  media: {
    maxBytes: 20 * 1024 * 1024,
    timeoutMs: 30_000,
    readTimeoutMs: 15_000,
    maxRedirects: 4,
  },
});
```

O caminho de armazenamento pertence à configuração do cliente. Os limites de mídia podem ser ajustados por operação com a opção media de sendMessage(). Esses valores são exemplos de configuração, não uma declaração de todos os limites do protocolo.

A configuração será ampliada conforme novas responsabilidades forem integradas. Não dependa de opções que não estejam documentadas.

---
title: Imagens
description: Envie imagens com legenda opcional.
---
```js
await client.sendMessage(jid, {
  image: { path: './foto.jpg' },
  caption: 'Minha foto',
});
```

A origem também pode ser URL, Buffer ou stream. Não há geração automática de miniaturas, dimensões ou conversão de formatos nesta versão.

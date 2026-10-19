---
title: Documentos
description: Envie arquivos como documentos.
---
```js
await client.sendMessage(jid, {
  document: { path: './relatorio.pdf' },
  fileName: 'relatorio.pdf',
  mimetype: 'application/pdf',
});
```

O MIME declarado precisa ser compatível com o conteúdo. Documentos não aceitam viewOnce na implementação atual.

---
title: Documentos
description: Envie arquivos com nome e MIME.
---
```js
await client.sendMessage(jid, {
  document: { path: './relatorio.pdf' },
  fileName: 'relatorio.pdf',
  mimetype: 'application/pdf',
});
```

`fileName` define o nome enviado ao destinatário. O MIME informado é confrontado com o conteúdo quando ele puder ser identificado.

Documentos não aceitam `viewOnce` nesta versão. Para origens remotas ou streams, use o mesmo campo `document` com uma [fonte suportada](/midia/fontes/).

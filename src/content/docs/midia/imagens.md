---
title: Imagens
description: Envie imagens com legenda a partir de uma fonte suportada.
---
```js
await client.sendMessage(jid, {
  image: { path: './foto.jpg' },
  caption: 'Minha foto',
});
```

Para URL:

```js
await client.sendMessage(jid, {
  image: { url: 'https://seu-site.com/foto.jpg' },
  caption: 'Uma imagem remota',
});
```

A biblioteca identifica o formato e prepara o envio. Não há geração automática de thumbnail ou dimensões, nem conversão entre formatos.

Veja [fontes e formatos](/midia/fontes/) ou [visualização única](/midia/visualizacao-unica/).

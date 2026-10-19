---
title: Fontes e limites
description: Resolva a origem sem alterar o pipeline de mídia.
---
A origem dos bytes é independente do tipo da mensagem:

```js
await client.sendMessage(jid, {
  image: { url: 'https://exemplo.com/foto.jpg' },
});

await client.sendMessage(jid, {
  image: { path: './foto.jpg' },
});

await client.sendMessage(jid, {
  image: buffer,
});
```

Também são aceitos Uint8Array e streams Node/Web. Uma string solta não substitui os objetos url ou path.

A resolução remota valida URL, destinos públicos e redirects, aplica limites e timeouts, e converge para a mesma preparação e criptografia. A implementação utiliza arquivo temporário criptografado no envio e faz limpeza dos recursos.

A identificação considera assinaturas do conteúdo com file-type. Isso não equivale a validar integralmente o arquivo com um decodificador. Não há transcodificação automática.

Em conflito de MIME ou conteúdo incompatível, trate o erro em vez de renomear o arquivo para forçar o envio. Ajuste maxBytes conforme a capacidade da aplicação; não remova limites para aceitar entradas desconhecidas.

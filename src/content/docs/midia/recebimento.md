---
title: Receber e baixar mídia
description: Escute mensagens e faça download com integridade validada.
---
```js
client.on('message', async (message) => {
  console.log(message.id, message.chat, message.type, message.text);

  if (!message.media) return;

  try {
    const { plaintext } = await client.downloadMedia(message.media);
    console.log('Bytes recebidos:', plaintext.length);
  } catch (error) {
    console.error('Falha ao baixar mídia:', error);
  }
});
```

A mensagem normalizada inclui id, chat, author, type, text, media, timestamp, rawNode e decoded. Preserve esses dados se precisar responder depois.

O download verifica a integridade e retorna o conteúdo descriptografado como Buffer. Considere seu tamanho antes de manter vários resultados simultaneamente na memória.

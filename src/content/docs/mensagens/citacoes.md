---
title: Responder com citação
description: Vincule uma resposta a uma mensagem recebida.
---
Passe a mensagem normalizada recebida no evento message como quoted:

```js
client.on('message', async (message) => {
  if (message.text !== 'DRAX-PERGUNTA') return;

  try {
    await client.sendMessage(message.chat, {
      text: 'Esta é a resposta.',
    }, {
      quoted: message,
    });
  } catch (error) {
    console.error('Falha ao responder:', error);
  }
});
```

A referência precisa preservar os dados da mensagem, incluindo id, chat, author e decoded. Não substitua a mensagem completa por um texto ou apenas pelo ID.

Responder com citação e mencionar um usuário são operações diferentes. A opção quoted cria a resposta vinculada; ela não é uma API de menções.

Na alpha.27, a normalização considera aliases PN/LID da mesma conversa privada, evitando emitir remoteJid desnecessariamente. A correção foi confirmada visualmente no privado; o comportamento em grupo foi preservado.

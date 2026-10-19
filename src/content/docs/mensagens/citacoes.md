---
title: Responder com citação
description: Passe a mensagem recebida para vincular uma resposta à conversa.
---
```js
client.on('message', async message => {
  if (message.text !== '/ajuda') return;

  try {
    await client.sendMessage(message.chat, {
      text: 'Como posso ajudar?',
    }, {
      quoted: message,
    });
  } catch (error) {
    console.error('Falha ao responder:', error.message);
  }
});
```

Passe o objeto recebido no evento `message`, sem substituí-lo apenas pelo ID ou texto. Ele contém a referência necessária para construir a citação.

O mesmo padrão é usado no privado e em grupo. Para citar posteriormente, preserve os dados da mensagem recebida na aplicação.

**Responder com citação não é mencionar alguém.** A opção `quoted` está disponível; uma API de `mentions` ainda não está implementada.

Evite criar respostas automáticas sem regras de acesso ou limitação de frequência. O código acima responde apenas ao texto exato `/ajuda`.

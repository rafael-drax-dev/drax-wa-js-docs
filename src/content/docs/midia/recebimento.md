---
title: Receber e baixar mídia
description: Baixe o conteúdo de uma mensagem recebida.
---
```js
const subscription = client.events.subscribe({
  'message': async message => {
    if (!message.media) return;

    try {
      const result = await client.downloadMedia(message.media, {
        maxEncryptedBytes: 30 * 1024 * 1024,
        timeoutMs: 30_000,
      });

      console.log('Bytes disponíveis:', result.plaintext.length);
    } catch (error) {
      console.error('Download:', error.code, error.message);
    }
  }
}, {
  onError: (error, { event }) => console.error('Falha no handler:', event, error.cause ?? error),
});
```

`plaintext` é um Buffer com o conteúdo descriptografado. A biblioteca confere a integridade do arquivo antes de retorná-lo.

As opções de uso comum são `maxEncryptedBytes`, `timeoutMs` e `signal`. Os padrões podem ser definidos em `downloadOptions` na construção do cliente.

O resultado também contém a URL utilizada e a quantidade de bytes criptografados. Evite manter muitos buffers grandes simultaneamente na memória.

Mensagens encapsuladas de mídia suportadas, incluindo visualização única, passam pelo mesmo tratamento de recebimento. Isso não implica suporte a todos os envelopes ou formatos futuros.

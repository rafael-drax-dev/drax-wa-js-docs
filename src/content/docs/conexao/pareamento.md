---
title: Código de pareamento
description: Autentique uma conta sem precisar de uma segunda tela.
---
Configure `auth.method: 'code'` e solicite o código após `auth:required`.

```js
const client = new DraxClient({
  storage: { path: './sessions/session.drax' },
  auth: { method: 'code' },
});

const subscription = client.events.subscribe({
  'auth:required': () => {
    return client.requestPairingCode(phoneNumber);
  },
  'pairing-code': ({ code }) => {
    console.log('Código:', code);
  }
}, {
  onError: (error, { event }) => console.error('Falha no handler:', event, error.cause ?? error),
});

await client.connect();
```

Para o exemplo completo com encerramento e proteção contra solicitações simultâneas, veja [seu primeiro cliente](/inicio/conexao/).

## requestPairingCode(phoneNumber, options)

- `phoneNumber`: string com 7 a 15 dígitos, incluindo código do país.
- `options.timeoutMs`: prazo da solicitação; padrão de 20.000 ms.
- Retorno: `Promise<string>`, com um código de oito caracteres.

Uma sessão já pareada não deve solicitar outro código. Nesse caso, a operação rejeita com `ERR_ALREADY_PAIRED`.

O evento `paired` indica que o pareamento foi configurado. Aguarde **`ready`** para enviar mensagens. A conexão pode reiniciar automaticamente entre essas etapas.

O pareamento por código e a restauração posterior foram validados ao vivo.

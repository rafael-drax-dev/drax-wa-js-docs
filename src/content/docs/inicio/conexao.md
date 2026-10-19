---
title: Seu primeiro cliente
description: Inicie uma aplicação com autenticação por código e sessão persistente.
---
Este exemplo inicia sem sessão prévia. Quando já houver uma sessão válida, a biblioteca a restaura e não pede outro código.

## Exemplo recomendado

Crie `index.js`:

```js title="index.js"
import { DraxClient } from 'drax-wa-js';

const phoneNumber = process.env.WA_PHONE;
if (!/^\d{7,15}$/.test(phoneNumber ?? '')) {
  throw new Error('Defina WA_PHONE com país, DDD e número, somente dígitos.');
}

const client = new DraxClient({
  storage: { path: './sessions/session.drax' },
  auth: { method: 'code' },
});

let pairingRequest;
let closing;

const subscription = client.events.subscribe({
  'auth:required': () => {
      if (pairingRequest) return;
      return pairingRequest = client.requestPairingCode(phoneNumber)
        .finally(() => { pairingRequest = undefined; });
    },
    'pairing-code': ({ code }) => console.log('Código:', code),
    ready: () => console.log('Cliente pronto.'),
    message: message => console.log('Mensagem recebida:', message.type),
    'client:error': error => console.error(error.code, error.message),
    'transport:error': error => console.error(error.message),
  }, {
    onError: (error, { event }) => {
      if (closing && error.cause?.code === 'ERR_PAIRING_CANCELLED') return;
      console.error('Handler:', event, error.cause ?? error);
    },
  });

  const close = () => closing ??= (async () => {
    try {
      await client.close();
    } finally {
      subscription.unsubscribe();
      await subscription.drain({ timeoutMs: 30_000 });
    }
  })();

  const shutdown = () => {
    close().catch(error => {
      console.error('Encerramento:', error);
      process.exitCode = 1;
    });
  };
  process.once('SIGINT', shutdown);
  process.once('SIGTERM', shutdown);

  try {
    await client.connect();
  } catch (error) {
    await close();
    if (error.code !== 'ERR_CONNECTION_CANCELLED') throw error;
  }
```

Execute usando o número da conta que deseja conectar:

```sh
WA_PHONE=5511999999999 node index.js
```

O número acima é fictício. Digite o código exibido no WhatsApp, em **Dispositivos conectados → Conectar dispositivo → Conectar com número de telefone**.

## Quando posso enviar?

`connect()` inicia o ciclo de conexão e retorna o próprio cliente. Isso não significa que a autenticação já terminou.

Para uma operação que depende de conexão pronta:

```js
await client.waitUntilReady(60_000);
const result = await client.sendMessage(jid, { text: 'Olá!' });
console.log(result.id);
```

Ou execute sua operação após o evento `ready`. Em uma aplicação permanente, mantenha o cliente aberto e feche-o ao encerrar o processo.

Veja também: [QR no terminal](/conexao/qr/) e [referência do cliente](/referencia/cliente/).

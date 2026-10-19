---
title: QR Code no terminal
description: Renderize os dados de autenticação no terminal da sua aplicação.
---
A biblioteca emite os dados do QR. Sua aplicação decide como apresentá-los; não há impressão ou arquivo de imagem obrigatório no núcleo.

Instale um renderizador na aplicação:

```sh
npm install qrcode@1.5.4
```

```js title="qr.js"
import { DraxClient } from 'drax-wa-js';
import QRCode from 'qrcode';

const client = new DraxClient({
  storage: { path: './sessions/session.drax' },
  auth: { method: 'qr' },
});

let closing;
const subscription = client.events.subscribe({
  qr: async ({ data, expiresAt }) => {
    const text = await QRCode.toString(data, { type: 'terminal', small: true });
    if (!closing) {
      console.log(text);
      console.log('Exibição válida até:', new Date(expiresAt).toLocaleTimeString());
    }
  },
  ready: () => console.log('Cliente pronto.'),
  'client:error': error => console.error(error.code, error.message),
  'transport:error': error => console.error(error.message),
}, {
  onError: (error, { event }) => console.error(event, error.cause ?? error),
});

const close = () => closing ??= (async () => {
  try {
    await client.close();
  } finally {
    subscription.unsubscribe();
    await subscription.drain();
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

A biblioteca emite novas referências enquanto elas estiverem disponíveis. Renderize cada novo evento; não continue mostrando um QR anterior.

:::caution[Validação atual]
A geração com referências reais e a exibição no terminal foram verificadas. O pareamento completo por leitura desse QR no aplicativo WhatsApp ainda não foi confirmado nos testes desta versão.
:::

Para uma interface web, utilize os mesmos dados de `qr.data` no renderizador da aplicação. Não publique o QR em uma página de acesso público.

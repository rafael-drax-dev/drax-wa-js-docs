---
title: Configurar o cliente
description: Opções públicas de conexão, autenticação, sessão e mídia.
---
```js
const client = new DraxClient({
  storage: {
    path: './sessions/session.drax',
    sessionId: 'default',
    busyTimeoutMs: 5_000,
  },
  auth: {
    method: 'code', // ou 'qr'
  },
  reconnect: {
    enabled: true,
    maxAttempts: 5,
    delayMs: 1_000,
    maxDelayMs: 30_000,
  },
  versionTimeoutMs: 15_000,
  handshakeTimeoutMs: 30_000,
  authenticationTimeoutMs: 30_000,
  pairingTimeoutMs: 180_000,
  keepAliveMs: 25_000,
  media: {
    maxBytes: 20 * 1024 * 1024,
    timeoutMs: 30_000,
    readTimeoutMs: 15_000,
    maxRedirects: 4,
  },
  downloadOptions: {
    maxEncryptedBytes: 100 * 1024 * 1024,
    timeoutMs: 30_000,
  },
});
```

Os valores mostrados correspondem aos padrões atuais, exceto `storage.path`, que deve ser informado, e `auth.method`, que foi definido como `code` neste exemplo (o padrão é `qr`).

| Opção | Uso |
| --- | --- |
| `storage` | Arquivo SQL e identificação da sessão |
| `sessionStore` | Adaptador próprio, em lugar de `storage` |
| `auth.method` | `qr` por padrão; `code` para solicitar código |
| `reconnect` | Tentativas e atraso exponencial de reconexão |
| `versionTimeoutMs` | Prazo da consulta de versão; utiliza versão válida salva em caso de falha |
| `handshakeTimeoutMs` | Prazo para estabelecer a conexão segura |
| `authenticationTimeoutMs` | Prazo de autenticação com sessão salva |
| `pairingTimeoutMs` | Prazo do fluxo de novo pareamento |
| `keepAliveMs` | Intervalo da verificação de conexão; zero desativa |
| `media` | Limites padrão das origens de mídia |
| `downloadOptions` | Opções padrão de download |

Não configure `storage` e `sessionStore` ao mesmo tempo. Para mudar limites apenas em um envio, utilize `options.media` em [sendMessage()](/mensagens/sendmessage/).

Para QR, `auth.firstQrMs` e `auth.nextQrMs` ajustam o período de exibição de cada referência. Os padrões são 60.000 ms e 20.000 ms. Alterar o período local não garante que o servidor mantenha o QR válido por mais tempo.

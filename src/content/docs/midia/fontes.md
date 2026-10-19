---
title: Fontes de mídia
description: URLs, arquivos, buffers e streams no mesmo envio.
---
O tipo da mensagem define **o que** será enviado; a fonte define **de onde** vêm os bytes.

```js
// URL remota:
await client.sendMessage(jid, {
  image: { url: 'https://seu-site.com/foto.jpg' },
});

// Arquivo local:
await client.sendMessage(jid, {
  image: { path: './foto.jpg' },
});

// Buffer ou Uint8Array:
await client.sendMessage(jid, { image: bytes });

// Stream Node:
await client.sendMessage(jid, { document: readableStream });
```

Também são aceitos streams Web. Utilize `{ url }` ou `{ path }` para essas fontes; uma string solta não as substitui.

## Limites por operação

```js
await client.sendMessage(jid, {
  image: { url },
}, {
  media: {
    maxBytes: 10 * 1024 * 1024,
    timeoutMs: 30_000,
    readTimeoutMs: 15_000,
    maxRedirects: 4,
  },
});
```

| Opção | Padrão |
| --- | --- |
| `maxBytes` | 20 MiB |
| `timeoutMs` | 30 segundos |
| `readTimeoutMs` | 15 segundos |
| `maxRedirects` | 4 |
| `signal` | Opcional, um `AbortSignal` |

URLs devem usar HTTP(S), sem credenciais embutidas. Destinos locais, privados e redirects proibidos são bloqueados. O download remoto é feito pela biblioteca; não é preciso criar um arquivo temporário na aplicação.

O MIME e a assinatura do conteúdo são conferidos. Conteúdo incompatível com o tipo solicitado ou MIME conflitante retorna erro. A biblioteca não converte arquivos nem valida integralmente cada formato com um decodificador.

## Formatos identificados para envio

| Tipo | MIME aceito |
| --- | --- |
| Imagem | JPEG, PNG e WebP |
| Áudio | MPEG, Ogg, Opus, MP4, AAC, WAV e FLAC |
| Vídeo | MP4, QuickTime e WebM |
| Documento | Conteúdo enviado como arquivo, com MIME identificado ou informado |

A aceitação desses tipos pela preparação não garante reprodução em todos os clientes WhatsApp. Para nota de voz, use conteúdo Ogg/Opus.

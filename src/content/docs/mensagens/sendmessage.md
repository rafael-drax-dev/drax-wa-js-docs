---
title: sendMessage()
description: Conteúdo, opções e retorno da interface principal de envio.
---
```js
const result = await client.sendMessage(jid, content, options);
```

Aguarde `ready` antes de enviar. Escolha exatamente um campo principal em `content`.

| Campo principal | Valor |
| --- | --- |
| `text` | String não vazia |
| `image` | Fonte de imagem |
| `video` | Fonte de vídeo |
| `audio` | Fonte de áudio |
| `document` | Fonte de documento |

| Campo complementar | Aplicação |
| --- | --- |
| `caption` | Legenda de mídia; não aceita em áudio |
| `mimetype` | MIME declarado, validado contra o conteúdo |
| `fileName` | Nome do documento |
| `ptt` | Nota de voz; somente áudio compatível |
| `viewOnce` | Imagem, vídeo ou nota de voz compatível |

## Exemplo

```js
const result = await client.sendMessage(jid, {
  image: { url: 'https://seu-site.com/foto.jpg' },
  caption: 'Uma imagem',
}, {
  timeoutMs: 30_000,
  readyTimeoutMs: 30_000,
  media: { maxBytes: 10 * 1024 * 1024 },
});

console.log(result.id, result.to, result.ack);
```

Utilize uma URL real do seu conteúdo. [Veja as fontes aceitas](/midia/fontes/).

## Opções

| Opção | Padrão | Descrição |
| --- | --- | --- |
| `id` | Gerado automaticamente | ID explícito, como string |
| `timeoutMs` | 20.000 ms | Prazo das consultas e confirmação do envio |
| `readyTimeoutMs` | 30.000 ms | Espera pelo cliente pronto |
| `quoted` | Ausente | Mensagem recebida para responder |
| `media` | Configuração do cliente | Limites e opções da origem |

Os timeouts pertencem às etapas indicadas; não representam uma garantia de prazo total único para download, upload e envio.

## Retorno

O resultado contém `id`, `to` e `ack`. Metadados adicionais podem variar entre conversa privada e grupo.

`ack` positivo indica aceitação pelo servidor. Para entrega ou leitura, acompanhe [confirmações](/mensagens/confirmacoes/).

`sendText(jid, text, options)` é um atalho que utiliza essa mesma infraestrutura.

Campos de tipos ainda não suportados são rejeitados. Não há suporte atual a menções, stickers, contatos, localização, botões, listas ou interativos. Consulte [compatibilidade](/referencia/versoes/).

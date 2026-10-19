---
title: Tratar erros
description: Combine try/catch e eventos para tratar falhas previsíveis.
---
```js
try {
  await client.sendMessage(jid, { image: { url } });
} catch (error) {
  console.error(error.code ?? error.name, error.message);
}
```

Além das Promises, acompanhe `client:error`, `transport:error`, `message:error`, `warning` e `failure`. Registre somente o contexto necessário; não registre sessões ou dados de autenticação completos.

| Código | O que verificar |
| --- | --- |
| `ERR_STORE_CONFIG`, `ERR_STORE_PATH` | Configuração e extensão .drax |
| `ERR_STORE_OPEN`, `ERR_STORE_READ`, `ERR_STORE_WRITE` | Acesso e disponibilidade do armazenamento |
| `ERR_STORE_CREDENTIALS`, `ERR_STORE_INTEGRITY`, `ERR_STORE_SCHEMA` | Validade dos dados ou formato |
| `ERR_STORE_CONFLICT` | Outra instância gravou na mesma sessão |
| `ERR_PAIRING_MODE`, `ERR_ALREADY_PAIRED` | Método e situação da autenticação |
| `ERR_PAIRING_TIMEOUT`, `ERR_PAIRING_REJECTED` | Solicitação de código |
| `ERR_QR_EXPIRED`, `ERR_AUTH_TIMEOUT` | Autenticação não concluída no prazo |
| `ERR_EVENTS_CONFIG` | Mapa de eventos, handler ou opção inválidos |
| `ERR_EVENT_HANDLER`, `ERR_EVENT_ERROR_HANDLER` | Falha no callback da aplicação ou no seu onError |
| `ERR_EVENT_OVERFLOW`, `ERR_EVENTS_DRAIN_TIMEOUT` | Concorrência ou encerramento dos handlers |
| `ERR_CONNECTION_CANCELLED` | Inicialização cancelada |
| `ERR_MESSAGE_CONTENT`, `ERR_MESSAGE_UNSUPPORTED` | Conteúdo ou tipo não aceito |
| `ERR_MESSAGE_REJECTED` | Servidor rejeitou a mensagem; observe `serverCode` |
| `ERR_MEDIA_URL`, `ERR_MEDIA_SSRF` | Origem ou destino bloqueado |
| `ERR_MEDIA_SIZE`, `ERR_MEDIA_TIMEOUT` | Limites de tamanho ou tempo |
| `ERR_MEDIA_TYPE`, `ERR_MEDIA_MIME` | Conteúdo incompatível ou MIME conflitante |
| `ERR_NOT_READY`, `ERR_LOGOUT_REJECTED` | Estado do cliente ou rejeição ao desvincular |

Nem todo erro atual possui `code`; trate também `TypeError`, `RangeError`, `name` e `message`. Não dependa de comparar o texto exato de mensagens de erro.

Reenvios devem ser controlados pela aplicação: repetir um envio após timeout pode duplicá-lo se o servidor já o tiver aceitado.

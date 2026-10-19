---
title: Erros e diagnóstico
description: Trate falhas sem perder a sessão.
---
Separe falhas de conexão, sessão, resolução da origem, preparação, upload e envio. Use try/catch e preserve a causa original ao registrar um erro.

Não apague credenciais para resolver automaticamente uma falha de rede. Não reinicialize sessões Signal existentes: isso pode destruir ratchets válidas.

## ACK e receipts

ACK positivo significa aceitação pelo servidor. O evento receipt fornece estados como delivered, read e played, quando recebidos. Nenhum desses sinais substitui todos os demais.

Retry completo continua sendo uma área de evolução; não suponha reenvio automático ilimitado.

## Logs seguros

Não registre chaves, tokens, sessões completas ou conteúdo privado. Ao reportar um problema, informe versão, operação, erro e contexto mínimo, removendo dados pessoais.

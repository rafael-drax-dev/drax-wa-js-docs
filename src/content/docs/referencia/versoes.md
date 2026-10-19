---
title: Compatibilidade e versões
description: Recursos confirmados e limites atuais.
---
Esta documentação acompanha **0.0.1-alpha.27**.

| Recurso | Estado |
| --- | --- |
| Reconexão com sessão salva | CONFIRMADO |
| Persistência SQL .drax e migração | CONFIRMADO |
| Texto privado e grupo | CONFIRMADO |
| Imagem, áudio, vídeo e documento | CONFIRMADO em testes live |
| Resposta citada privada | CONFIRMADO, incluindo validação visual da correção |
| Visualização única | Envio, wrappers e integridade testados; confirmação visual completa pendente |
| Primeiro pareamento na API DraxClient | Ainda não integrado |
| Stickers, contatos, localização e interativos | Ainda não documentados como suportados |

A suíte de referência da alpha.27 teve **131 testes: 130 aprovados, 0 falhas e 1 live pulado**.

## Histórico recente

- alpha.23: persistência SQL.
- alpha.24: evolução de contexto e citações.
- alpha.25: expansão de mídia.
- alpha.26: endurecimento e validações de persistência.
- alpha.27: correção de citação privada com aliases PN/LID.

Uma comparação SQL durante a evolução falhou transitoriamente. A verificação posterior, com filas drenadas e estado canônico estável, passou; a causa exata daquele resultado transitório não foi reproduzida.

Novos recursos devem entrar aqui somente depois da sequência evidência, teste, integração e validação aplicável. Os estados usados no projeto são CONFIRMADO, OBSERVADO, PROVÁVEL e DESCONHECIDO.

---
title: Compatibilidade
description: Versão atual, disponibilidade de recursos e mudanças de API.
---
Esta documentação corresponde à **0.0.1-alpha.34**, em pré-lançamento. Organização para produção não significa estabilidade de uma versão 1.0 ou garantia de compatibilidade com mudanças futuras do WhatsApp.

## Disponível

- Inicialização com ou sem sessão salva.
- Pareamento por código, restauração e reconexão.
- Dados de QR com renovação e renderização pela aplicação.
- Sessão SQL .drax.
- Texto privado e de grupo.
- Imagens, áudio, vídeo e documentos.
- Respostas com citação.
- Recebimento e download de mídia.
- Confirmações recebidas de entrega, leitura e reprodução.
- Logout do companion atual e retorno à autenticação.

## Limites de validação

O fluxo completo por código, restauração e recuperação após revogação foram comprovados ao vivo. Para QR, a geração com referências reais e a exibição no terminal foram testadas; a leitura no WhatsApp ainda está pendente.

Os envios de visualização única passaram em aceitação e integridade; a apresentação foi confirmada pelo proprietário nos testes realizados. Isso não implica suporte a tipos adicionais ou validação de todos os clientes WhatsApp.

## Ainda indisponível

Menções, stickers, contatos, localização, mensagens interativas, botões, listas, administração de grupos, chamadas, reações, transcodificação e retry completo não possuem API utilizável documentada nesta versão. Eles não devem ser simulados com campos inventados em sendMessage().

## Mudanças da alpha.34

- Inscrições gerenciadas com `client.events.subscribe()`, captura de falhas assíncronas, cancelamento e ciclo de vida.
- Exemplos e aplicação de referência usam mapas de handlers.
- EventEmitter permanece compatível.

## Mudanças anteriores da alpha.33

- Integração principal por `import { DraxClient } from 'drax-wa-js'`.
- Armazenamento também disponível em `drax-wa-js/store`.
- Entradas de baixo nível e a antiga classe de descrição de arquitetura foram retiradas da API pública.
- A documentação passou a acompanhar os exemplos e contratos do consumidor.

Projetos que utilizavam caminhos antigos de pesquisa precisam trocar os imports pelos caminhos acima e remover acesso direto aos arquivos internos.

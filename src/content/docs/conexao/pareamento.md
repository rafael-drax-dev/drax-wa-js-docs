---
title: "Pareamento: estado atual"
description: O que já foi comprovado e o que falta na API pública.
---
**CONFIRMADO:** o pareamento por código, pair-success, persistência e reconexão autenticada foram comprovados no desenvolvimento do protocolo.

**Limite da API atual:** o DraxClient de alto nível reconecta credenciais existentes. Não está documentado um método público para iniciar o primeiro pareamento.

Não use exemplos de outras bibliotecas como se fossem métodos da drax-wa-js. A futura integração de pareamento deverá reutilizar o gerenciamento de conexão e o armazenamento .drax.

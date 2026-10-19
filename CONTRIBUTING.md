# Contribuir com a documentação

A documentação acompanha a API real da versão indicada em public/api-contract.json. Não apresente recursos planejados ou validações pendentes como concluídos.

Toda alteração pública da biblioteca deve incluir, na mesma etapa:

1. Implementação e validação técnica.
2. Revisão do contrato público e testes relevantes.
3. Atualização dos guias, exemplos, opções, eventos e retornos afetados.
4. Revisão de links, imports e mudanças incompatíveis.
5. Validação e publicação da documentação.

## Verificar

```sh
npm ci
npm run build
```

O build executa automaticamente a verificação de sintaxe dos exemplos e da cobertura documental, compila o site e confere os links locais gerados. O empacotamento da biblioteca compara também a versão, os métodos, as propriedades e os exports implementados com o contrato.

Essas verificações não substituem revisar assinaturas, opções, comportamento, acessibilidade e apresentação em diferentes telas. Alterações incompatíveis devem corrigir ou remover exemplos antigos na mesma mudança.

Publique somente esta documentação. Não inclua sessões, credenciais, logs, números reais de testes, pacotes privados ou arquivos operacionais. A integração Git do Cloudflare Pages publica commits enviados à branch configurada; confirme o resultado do deploy.

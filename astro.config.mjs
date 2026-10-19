import {defineConfig} from 'astro/config'
import starlight from '@astrojs/starlight'
export default defineConfig({
 output:'static',
 integrations:[starlight({
  title:'drax-wa-js',
  description:'Documentação da biblioteca independente drax-wa-js: conexão, SQL, mensagens e mídia.',
  locales:{root:{label:'Português',lang:'pt-BR'}},
  customCss:['./src/styles/custom.css'],
  favicon:'/favicon.svg',
  sidebar:[
   {label:'Comece por aqui',items:[
    {label:'Visão geral',slug:'index'},
    {label:'Instalação',slug:'inicio/instalacao'},
    {label:'Primeira conexão',slug:'inicio/conexao'}
   ]},
   {label:'Conexão e sessão',items:[
    {label:'Configurar o cliente',slug:'conexao/configuracao'},
    {label:'Armazenamento .drax',slug:'conexao/armazenamento'},
    {label:'Pareamento: estado atual',slug:'conexao/pareamento'}
   ]},
   {label:'Mensagens',items:[
    {label:'sendMessage()',slug:'mensagens/sendmessage'},
    {label:'Texto',slug:'mensagens/texto'},
    {label:'Responder com citação',slug:'mensagens/citacoes'}
   ]},
   {label:'Mídia',items:[
    {label:'Fontes e limites',slug:'midia/fontes'},
    {label:'Imagens',slug:'midia/imagens'},
    {label:'Áudio e notas de voz',slug:'midia/audio'},
    {label:'Vídeos',slug:'midia/videos'},
    {label:'Documentos',slug:'midia/documentos'},
    {label:'Visualização única',slug:'midia/visualizacao-unica'},
    {label:'Receber e baixar mídia',slug:'midia/recebimento'}
   ]},
   {label:'Referência',items:[
    {label:'Erros e diagnóstico',slug:'referencia/erros'},
    {label:'Compatibilidade e versões',slug:'referencia/versoes'}
   ]}
  ]
 })]
})

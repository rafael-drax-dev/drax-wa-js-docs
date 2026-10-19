import {readdir,writeFile,readFile} from 'node:fs/promises';
import {resolve,relative,join,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {EventEmitter} from 'node:events';
const docs=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const library=resolve(docs,'../drax-wa-js');
const quote=String.fromCharCode(96);
async function list(dir){const files=[];for(const entry of await readdir(dir,{withFileTypes:true})){const p=join(dir,entry.name);if(entry.isDirectory())files.push(...await list(p));else if(p.endsWith('.js'))files.push(p)}return files.sort()}
export async function inspectModules(){
 const pkg=JSON.parse(await readFile(join(library,'package.json'),'utf8'));
 const modules=[];
 for(const file of await list(join(library,'src'))){
  const namespace=await import(pathToFileURL(file));
  const exports=Object.entries(namespace).map(([name,value])=>{
   const descriptor={name,kind:typeof value};
   if(typeof value==='function'&&value.prototype){
    descriptor.members=Object.entries(Object.getOwnPropertyDescriptors(value.prototype)).filter(([n])=>n!=='constructor').map(([name,d])=>({name,kind:d.get?'getter':typeof d.value}));
   }
   if(typeof value==='function')descriptor.staticMembers=Object.entries(Object.getOwnPropertyDescriptors(value)).filter(([n,d])=>!['length','name','prototype','arguments','caller'].includes(n)&&typeof d.value==='function').map(([name])=>name);
   return descriptor;
  });
  modules.push({path:relative(library,file).replaceAll('\\','/'),exports});
 }
 const {DraxClient}=await import(pathToFileURL(join(library,'src/index.js')));
 const sample=new DraxClient({connection:new EventEmitter()});
 const inherited=Object.getOwnPropertyNames(EventEmitter.prototype).filter(n=>n!=='constructor'&&typeof EventEmitter.prototype[n]==='function').sort();
 return {version:pkg.version,entryPoints:pkg.exports,emitterMethods:inherited,instanceFields:Object.keys(sample).filter(n=>!n.startsWith('_')).sort(),modules};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const catalog=await inspectModules();
 await writeFile(join(docs,'public/module-catalog.json'),JSON.stringify(catalog,null,2)+'\n');
 let page='---\ntitle: Catálogo dos módulos internos\ndescription: Inventário navegável de arquivos, exports e membros da implementação.\n---\n';
 page+='Este inventário corresponde à **'+catalog.version+'** e foi obtido dos módulos reais. Os caminhos são relativos à raiz do pacote. Eles identificam implementação; não são subpaths públicos de importação. Veja [imports e caminhos](/referencia/caminhos/).\n\n';
 page+='Os parênteses identificam métodos, não suas assinaturas completas ou exemplos de chamada. Este é um inventário técnico; os guias de uso estão na referência pública.\n\n';
 page+='Exports locais de um arquivo não são necessariamente exports públicos do pacote. Os nomes abaixo não constituem instrução para manipular sessões e chaves diretamente. A API suportada está disponível pela raiz e por /store.\n\n[Baixar inventário estruturado](/module-catalog.json).\n\n';
 const descriptions={auth:'Autenticação, registro e pareamento.',binary:'Codificação e leitura de nós binários.',core:'Cliente e ciclo de conexão.',crypto:'Primitivas criptográficas e canal seguro.',events:'Catálogo e inscrições de eventos.',media:'Fontes, validação, preparo, criptografia, upload e download.',messages:'Conteúdo, contexto e estratégias de envio.',proto:'Schemas e codecs protobuf.',protocol:'Stanzas, confirmação e receipts.',signal:'Sessões diretas, grupos, diretório e prekeys.',store:'Persistência, codec e validação da sessão.',transport:'WebSocket e framing.'};
 const groups=new Map();
 for(const module of catalog.modules){const group=module.path.split('/')[1];const key=group==='index.js'?'Entrada principal':group;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(module)}
 for(const [group,modules] of groups){
  page+='## '+group+'\n\n'+(descriptions[group]??'Entrada oficial do pacote.')+'\n\n';
  for(const module of modules){
   page+='<details>\n<summary><code>'+module.path+'</code></summary>\n\n';
   if(!module.exports.length)page+='Sem exports próprios.\n\n';
   else{
    page+='| Export local | Tipo | Membros próprios do protótipo / estáticos |\n| --- | --- | --- |\n';
    for(const e of module.exports){
     const members=[...(e.members??[]).map(m=>quote+m.name+(m.kind==='function'?'()':'')+quote),...(e.staticMembers??[]).map(n=>quote+n+'()'+quote+' (estático)')].join(', ')||'—';
     page+='| '+quote+e.name+quote+' | '+e.kind+' | '+members+' |\n';
    }
    page+='\n';
   }
   page+='</details>\n\n';
  }
 }
 page+='## Campos visíveis da instância\n\nAlém dos getters públicos events, ready e isPaired, a implementação mantém os campos abaixo. A presença de uma propriedade JavaScript não equivale a um contrato de integração suportado. Estes campos são internos e podem mudar.\n\n';
 page+=catalog.instanceFields.map(n=>'- '+quote+n+quote).join('\n')+'\n\n';
 page+='Os membros privados com # não são acessíveis externamente. Este catálogo enumera nomes; não publica credenciais, valores de chaves ou dados de sessão. Para estender armazenamento e organizar a aplicação, utilize os pontos públicos [documentados](/referencia/cliente/).\n';
 await writeFile(join(docs,'src/content/docs/referencia/modulos.md'),page);
 console.log(catalog.modules.length+' módulos inventariados; '+catalog.emitterMethods.length+' métodos herdados identificados.');
}

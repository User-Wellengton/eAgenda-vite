var c=Object.defineProperty;var n=(a,e,r)=>e in a?c(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var i=(a,e,r)=>(n(a,typeof e!="symbol"?e+"":e,r),r);import"./style.c0ed6924.js";import{G as l,T as h}from"./tarefa.repository.local-Storage.a18f0682.js";var o=(a=>(a.Baixa="Baixa",a.Media="M\xE9dia",a.Alta="Alta",a))(o||{});class u{constructor(){i(this,"id");this.id=new l().gerarNovoId()}}class d extends u{constructor(r,t,s){super();i(this,"descricao");i(this,"prioridade");i(this,"dataCriacao");s&&(this.id=s),this.descricao=r,this.dataCriacao=new Date,this.prioridade=t}}class m{constructor(e,r){i(this,"txtDescricao");i(this,"rdbPrioridade");i(this,"btnSalvar");i(this,"idSelecionado");if(this.repositorioTarefas=e,this.configurarElementos(),r){this.idSelecionado=r;const t=this.repositorioTarefas.selecionarPorId(r);t&&this.preencherFormulario(t)}}preencherFormulario(e){switch(this.txtDescricao.value=e.descricao,e.prioridade){case o.Baixa:this.rdbPrioridade=document.querySelector("input[value='Baixa']");break;case o.Media:this.rdbPrioridade=document.querySelector("input[value='M\xE9dia']");break;case o.Alta:this.rdbPrioridade=document.querySelector("input[value='Alta']");break}this.rdbPrioridade.checked=!0}configurarElementos(){this.txtDescricao=document.getElementById("txtDescricao"),this.btnSalvar=document.getElementById("btnSalvar"),this.btnSalvar.addEventListener("click",e=>this.gravarRegistros())}gravarRegistros(){const e=this.obterDadosFormulario();this.idSelecionado?this.repositorioTarefas.editar(e.id,e):this.repositorioTarefas.inserir(e),window.location.href="tarefa.list.html"}obterDadosFormulario(){const e=this.txtDescricao.value,r=this.obterPrioridadeSelecionada();let t=null;return this.idSelecionado?t=new d(e,r,this.idSelecionado):t=new d(e,r),t}obterPrioridadeSelecionada(){return document.querySelector("input[type='radio']:checked").value}}const p=new URLSearchParams(window.location.search),f=p.get("id");new m(new h,f);
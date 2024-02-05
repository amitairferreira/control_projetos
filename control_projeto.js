// Interface para Projeto
class IProjeto {
    cadastrarProjeto(projeto) {}
    removerProjeto(nomeProjeto) {}
    consultarProjeto(nomeProjeto) {}
    alterarProjeto(nomeProjeto, novoProjeto) {}
}

// Implementação da interface para Projeto
class Projeto extends IProjeto {
    projetos = [];

    constructor(nome, localizacao, cliente, escopoInicial, dataInicioPrevista) {
        super();
        this.nome = nome;
        this.localizacao = localizacao;
        this.cliente = cliente;
        this.escopoInicial = escopoInicial;
        this.dataInicioPrevista = dataInicioPrevista;
    }

    // Implementação dos métodos da interface
    cadastrarProjeto(projeto) {
        this.projetos.push(projeto);
    }

    removerProjeto(nomeProjeto) {
        const indiceProjeto = this.projetos.findIndex(projeto => projeto.nome === nomeProjeto);
        if (indiceProjeto !== -1) {
            this.projetos.splice(indiceProjeto, 1);
        }
    }

    consultarProjeto(nomeProjeto) {
        return this.projetos.find(projeto => projeto.nome === nomeProjeto);
    }

    alterarProjeto(nomeProjeto, novoProjeto) {
        const projetoExistente = this.consultarProjeto(nomeProjeto);
        if (projetoExistente) {
            projetoExistente.nome = novoProjeto.nome;
            projetoExistente.localizacao = novoProjeto.localizacao;
            projetoExistente.cliente = novoProjeto.cliente;
            projetoExistente.escopoInicial = novoProjeto.escopoInicial;
            projetoExistente.dataInicioPrevista = novoProjeto.dataInicioPrevista;
        }
    }
}

// Exemplo de uso prático da classe - main
const controleProjetos = new Projeto();

// Cadastrando um novo projeto
const novoProjeto = new Projeto(
    "Construção Residencial",
    "Cidade X",
    "Cliente A",
    "Construção de uma casa",
    new Date()
);

controleProjetos.cadastrarProjeto(novoProjeto);

// Consultando o projeto cadastrado
const projetoConsultado = controleProjetos.consultarProjeto("Construção Residencial");
console.log(` Projeto Consultado: ${projetoConsultado.nome}, Cliente: ${projetoConsultado.cliente}`);

// Alterando o projeto
const novoProjetoDados = new Projeto(
    "Construção Comercial",
    "Cidade Y",
    "Cliente B",
    "Construção de um prédio comercial",
    new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // Adicionando 30 dias em milissegundos
);

controleProjetos.alterarProjeto("Construção Residencial", novoProjetoDados);

// Consultando o projeto alterado
const projetoAlterado = controleProjetos.consultarProjeto("Construção Comercial");
console.log(` Projeto Alterado: ${projetoAlterado.nome}, Cliente: ${projetoAlterado.cliente}`);

// Removendo o projeto
controleProjetos.removerProjeto("Construção Comercial");
console.log( `Projeto excluído! ${this.projetos} `)
export default class ServicosDePagamento {

    #pagamentos

    constructor() {
        this.#pagamentos = [];
    };

    efetuarPagamento(codigoBarras, empresa, valor) {
        let categoria;

        if (valor > 100.00) {
            categoria = 'cara';
        } else {
            categoria = 'padrão';
        };

        // Usando o atalho do JavaScript que, ao usar o mesmo nome de parâmetro e variável, não precisa repetir. Exemplo: codigoBarras: codigoBarras
        this.#pagamentos.push({
            codigoBarras,
            empresa,
            valor,
            categoria
        });
    };

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1);
    };
};

// Bloco de testes da função
// const servico = new ServicosDePagamento();
// servico.efetuarPagamento('1234-5678-1', 'Empresa Teste 1', 100.01);
// servico.efetuarPagamento('1234-5678-2', 'Empresa Teste 2', 100.00);
// servico.efetuarPagamento('1234-5678-3', 'Empresa Teste 3', 99);
// servico.efetuarPagamento('1234-5678-4', 'Empresa Teste 4', 101);
// console.log(servico.consultarUltimoPagamento());
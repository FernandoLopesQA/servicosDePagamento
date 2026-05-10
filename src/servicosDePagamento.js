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

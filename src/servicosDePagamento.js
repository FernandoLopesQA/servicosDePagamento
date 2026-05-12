export default class ServicosDePagamento {

    #pagamentos

    constructor() {
        this.#pagamentos = [];
    };

    efetuarPagamento(codigoBarras, empresa, valor) {

        if (!codigoBarras || !empresa || !valor || valor <= 0) {
            throw new Error('Informe todos os campos para prosseguir com o pagamento e o valor deve ser maior que 0.');
        }

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

        if (this.#pagamentos.length === 0) {
            throw new Error('Nenhum pagamento registrado na base de dados.');
        };

        return this.#pagamentos.at(-1);
    };
};
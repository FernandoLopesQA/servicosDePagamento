import ServicosDePagamento from "../src/servicosDePagamento.js";
import assert from 'node:assert'

describe('Testes na classe de Serviços de Pagamento', () => {

    describe('Testes no método efetuarPagamento', () => {

        // Implementar na função
        // it('Deve retornar mensagem de erro quando algum dos dados não for passado nos parâmetros da função', () => {
        //     // Arrange
        //     // Act
        //     // Assert
        // });

        it('Deve salvar todos os dados passados por parâmetro nas propriedades do pagamento', () => {
            // Arrange
            const servicosDePagamento = new ServicosDePagamento();

            // Act
            servicosDePagamento.efetuarPagamento('7-891221-927787', 'Sul Gás', 147.29);
            const pagamentos = servicosDePagamento.consultarUltimoPagamento();

            // Assert
            assert.equal(pagamentos.codigoBarras, '7-891221-927787');
            assert.equal(pagamentos.empresa, 'Sul Gás');
            assert.equal(pagamentos.valor, 147.29);
            assert.equal(pagamentos.categoria, 'cara');
        });

        it('Deve efetuar inclusão da categoria "cara" quando valor de pagamento for maior que 100.00', () => {
            const servicosDePagamento = new ServicosDePagamento();

            // Act
            servicosDePagamento.efetuarPagamento('7-894404-377140', 'Claro Móvel', 100.01);
            const pagamentos = servicosDePagamento.consultarUltimoPagamento();

            // Assert
            assert.equal(pagamentos.categoria, 'cara');
        });

        it('Deve efetuar inclusão da categoria "padrão" quando valor de pagamento for menor que 100.00', () => {
            const servicosDePagamento = new ServicosDePagamento();

            // Act
            servicosDePagamento.efetuarPagamento('7-890765-501033', 'NetFlix', 99.99);
            const pagamentos = servicosDePagamento.consultarUltimoPagamento();

            // Assert
            assert.equal(pagamentos.categoria, 'padrão');
        });

        it('Deve efetuar inclusão da categoria "padrão" quando valor de pagamento for igual a 100.00', () => {
            const servicosDePagamento = new ServicosDePagamento();

            // Act
            servicosDePagamento.efetuarPagamento('7-890274-041686', 'Consórcio', 100.00);
            const pagamentos = servicosDePagamento.consultarUltimoPagamento();

            // Assert
            assert.equal(pagamentos.categoria, 'padrão');
        });

    });

    describe('Testes no método consultarUltimoPagamento', () => {

        it('Deve retornar os dados do último pagamento registrado na lista', () => {
            const servicosDePagamento = new ServicosDePagamento();

            // Act
            servicosDePagamento.efetuarPagamento('7-891221-927787', 'Sul Gás', 147.29);
            servicosDePagamento.efetuarPagamento('7-894404-377140', 'Claro Móvel', 100.01);
            servicosDePagamento.efetuarPagamento('7-890765-501033', 'NetFlix', 99.99);
            servicosDePagamento.efetuarPagamento('7-890274-041686', 'Consórcio', 100.00);
            servicosDePagamento.efetuarPagamento('7-894415-027614', 'Pós Júlio de Lima', 447.47);
            const pagamentos = servicosDePagamento.consultarUltimoPagamento();

            // Assert
            assert.equal(pagamentos.codigoBarras, '7-894415-027614');
            assert.equal(pagamentos.empresa, 'Pós Júlio de Lima');
            assert.equal(pagamentos.valor, 447.47);
            assert.equal(pagamentos.categoria, 'cara');
        });

        // Implementar na função
        // it('Deve retornar mensagem de erro quando não houver dados de pagamento na lista', () => {
        //     // Arrange
        //     // Act
        //     // Assert
        // });

    });
});
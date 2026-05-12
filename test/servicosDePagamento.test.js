import ServicosDePagamento from "../src/servicosDePagamento.js";
import assert from 'node:assert'

describe('Testes na classe de Serviços de Pagamento', () => {

    describe('Testes no método efetuarPagamento', () => {

        it('Deve retornar mensagem de erro quando o código de barras não for passado nos parâmetros do método', () => {
            // Arrange
            const servicosDePagamento = new ServicosDePagamento();

            // Act & Assert
            assert.throws(
                function () {
                    servicosDePagamento.efetuarPagamento('', 'Sul Gás', 147.29);
                },
                {
                    message: 'Informe todos os campos para prosseguir com o pagamento e o valor deve ser maior que 0.'
                }
            );
        });

        it('Deve retornar mensagem de erro quando a empresa não for informada nos parâmetros do método', () => {
            // Arrange
            const servicosDePagamento = new ServicosDePagamento();

            // Act & Assert
            assert.throws(
                function () {
                    servicosDePagamento.efetuarPagamento('7-891221-927787', '', 147.29);
                },
                {
                    message: 'Informe todos os campos para prosseguir com o pagamento e o valor deve ser maior que 0.'
                }
            );
        });

        it('Deve retornar mensagem de erro quando o valor for passado como zero no método', () => {
            // Arrange
            const servicosDePagamento = new ServicosDePagamento();

            // Act & Assert
            assert.throws(
                function () {
                    servicosDePagamento.efetuarPagamento('7-891221-927787', 'Sul Gás', 0);
                },
                {
                    message: 'Informe todos os campos para prosseguir com o pagamento e o valor deve ser maior que 0.'
                }
            );
        });

        it('Deve retornar mensagem de erro quando o valor não for passado no método', () => {
            // Arrange
            const servicosDePagamento = new ServicosDePagamento();

            // Act & Assert
            assert.throws(
                function () {
                    servicosDePagamento.efetuarPagamento('7-891221-927787', 'Sul Gás');
                },
                {
                    message: 'Informe todos os campos para prosseguir com o pagamento e o valor deve ser maior que 0.'
                }
            );
        });

        it('Deve retornar mensagem de erro quando o valor for passado como negativo no método', () => {
            // Arrange
            const servicosDePagamento = new ServicosDePagamento();

            // Act & Assert
            assert.throws(
                function () {
                    servicosDePagamento.efetuarPagamento('7-891221-927787', 'Sul Gás', -100.00);
                },
                {
                    message: 'Informe todos os campos para prosseguir com o pagamento e o valor deve ser maior que 0.'
                }
            );
        });

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

        it('Deve retornar mensagem de erro quando não houver dados de pagamento na lista', () => {

            // Arrange
            const servicosDePagamento = new ServicosDePagamento();

            // Act & Assert
            assert.throws(
                function () {
                    servicosDePagamento.consultarUltimoPagamento();
                },
                {
                    message: 'Nenhum pagamento registrado na base de dados.'
                }
            );
        });

    });
});
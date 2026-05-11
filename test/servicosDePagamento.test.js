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
            // Act
            // Assert
        });

        it('Deve efetuar inclusão da categoria "cara" quando valor de pagamento for maior que 100.00', () => {
            // Arrange
            // Act
            // Assert
        });

        it('Deve efetuar inclusão da categoria "padrão" quando valor de pagamento for menor que 100.00', () => {
            // Arrange
            // Act
            // Assert
        });

        it('Deve efetuar inclusão da categoria "padrão" quando valor de pagamento for igual a 100.00', () => {
            // Arrange
            // Act
            // Assert
        });

    });

    describe('Testes no método consultarUltimoPagamento', () => {

        it('Deve retornar os dados do último pagamento registrado na lista', () => {
            // Arrange
            // Act
            // Assert
        });

        // Implementar na função
        // it('Deve retornar mensagem de erro quando não houver dados de pagamento na lista', () => {
        //     // Arrange
        //     // Act
        //     // Assert
        // });

    });
});
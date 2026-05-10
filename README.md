Função
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento. - OK
Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. - OK
Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. -
Quando um pagamento for realizado e o valor for maior que 100.00, - 
o pagamento também terá a propriedade 'categoria' preenchida pela função como 'cara', - 
caso contrário, a propriedade 'categoria' será preenchida pela função como 'padrão'. - 
O método de consultar trará apenas o último pagamento. - 
  
  ex. 
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }
  
  A entrega deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe dentro da pasta test usando Mocha e Node Assert.


Pensamento Lógico:

1. Entradas:
   - Código de Barras
   - Empresa
   - Valor
2. Regras:
   - Pagamentos devem receber as 3 propriedades 
   - Pagamentos maior que 100.00, receberá uma propriedade 'categoria' com valor 'cara'
   - Pagamentos menor que 100.00, receberá uma propriedade 'categoria' com valor 'padrão'
   - Método de consultar deve retornar apenas o último registro da lista
3. Processamento:
   - Verifica se as propriedades foram informadas
   - Verifica valor do pagamento
   - Se valor maior que 100.00, insere propriedade categoria = cara
   - Se valor menor que 100.00, insere propriedade categoria = padrão
4. Saídas:
   - Gravar valores na lista com inclusão da categoria
   - Retornar último registro da lista de pagamentos
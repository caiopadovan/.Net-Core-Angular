using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Projeto.Models
{
    public class Pedidos
    {
        // Chave primária da tabela Pedidos
        [Key]
        public Guid PedidoID { get; set; }

        // Chaves estrangeiras da tabela Pedidos   ClienteID da tabela Cliente e ProdutosID da tabela Produtos

        public Guid ClientesID { get; set; }

        public Guid ProdutosID { get; set; }

        // Outras propriedades da tabela Pedidos

        public DateTime DataCompra {  get; set; }

        public DateTime DataChegada { get; set; }

        [Precision(16,2)]
        public decimal ValorTotal { get; set; }
    }
}

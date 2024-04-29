using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Projeto.Models
{
    public class Produtos
    {
        // Chave primária da tabela Produtos
        [Key]
        public Guid ProdutoID { get; set; }

        // Outras propriedades da tablea Produtos

        public string Nome { get; set; }

        public string Descricao { get; set; }

        [Precision(16,2)]
        public decimal Preco {  get; set; }

        public int Quantidade { get; set; }

    }
}

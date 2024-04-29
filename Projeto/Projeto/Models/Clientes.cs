using System.ComponentModel.DataAnnotations;

namespace Projeto.Models
{
    public class Clientes
    {
        // Chave primária da tabela Cliente

        [Key]
        public Guid ClienteID { get; set; }

        // Outras propriedades da tabela Cliente
        public string Nome { get; set; }

        public string Sobrenome { get; set; }

        public string CPF { get; set; }

        public string Cidade { get; set; }

        public string Estado { get; set; }

        public string Telefone { get; set; }

        public string Senha { get; set; }
    }
}

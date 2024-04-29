using Microsoft.EntityFrameworkCore;
using Projeto.Models;

namespace Projeto.Services
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Produtos> Produtos { get; set; }

        public DbSet<Clientes> Clientes { get; set; }

        public DbSet<Pedidos> Pedidos { get; set; }
    }
}

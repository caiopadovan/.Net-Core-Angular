using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Projeto.Services;
using Projeto.Models;

namespace Projeto.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutoController : Controller
    {
        private readonly ApplicationDbContext applicationDbContext;

        public ProdutoController(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        // Mostrar todos os Produtos

        [HttpGet]
        public async Task<IActionResult> GetAllProdutos()
        {
            var produtos = await applicationDbContext.Produtos.ToListAsync();
            return Ok(produtos);
        }

        // Mostrar apenas um Produto

        [HttpGet]
        [Route("{id:Guid}")]
        [ActionName("GetProduto")]
        public async Task<IActionResult> GetProduto([FromRoute] Guid id)
        {
            var produto = await applicationDbContext.Produtos.FirstOrDefaultAsync(x => x.ProdutoID == id);
            if (produto != null)
            {
                return Ok(produto);
            }

            return NotFound("Produto não encontrado!");
        }

        // Adicionar Produto

        [HttpPost]
        public async Task<IActionResult> AddProduto([FromBody] Produtos produto)
        {
            produto.ProdutoID = Guid.NewGuid();
            await applicationDbContext.Produtos.AddAsync(produto);
            await applicationDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduto), new { id = produto.ProdutoID }, produto);
        }

        // Modificar Produto

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateProduto([FromRoute] Guid id, [FromBody] Produtos produto)
        {
            var alterarproduto = await applicationDbContext.Produtos.FirstOrDefaultAsync(x => x.ProdutoID == id);
            if (alterarproduto != null)
            {
                alterarproduto.Nome = produto.Nome;
                alterarproduto.Descricao = produto.Descricao;
                alterarproduto.Preco = produto.Preco;
                alterarproduto.Quantidade = produto.Quantidade;
                await applicationDbContext.SaveChangesAsync();

                return Ok(alterarproduto);
            }

            return NotFound("Produto não encontrado!");

        }

        //Deletar Produto

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteProduto([FromRoute] Guid id)
        {
            var deletarproduto = await applicationDbContext.Produtos.FirstOrDefaultAsync(x => x.ProdutoID == id);
            if (deletarproduto != null)
            {
                applicationDbContext.Remove(deletarproduto);
                await applicationDbContext.SaveChangesAsync();

                return Ok(deletarproduto);
            }

            return NotFound("Produto não encontrado");
        }
    }
}
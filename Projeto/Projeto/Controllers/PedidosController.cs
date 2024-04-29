using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Projeto.Models;
using Projeto.Services;

namespace Projeto.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PedidosController : Controller
    {
        private readonly ApplicationDbContext applicationDbContext;

        public PedidosController(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        // Mostrar todos os Pedidos

        [HttpGet]
        public async Task<IActionResult> GetAllPedidos()
        {
            var pedidos = await applicationDbContext.Pedidos.ToListAsync();
            return Ok(pedidos);
        }

        // Mostrar apenas um Pedido

        [HttpGet]
        [Route("{id:Guid}")]
        [ActionName("GetPedido")]
        public async Task<IActionResult> GetPedido([FromRoute] Guid id)
        {
            var pedido = await applicationDbContext.Pedidos.FirstOrDefaultAsync(x => x.PedidoID == id);
            if (pedido != null)
            {
                return Ok(pedido);
            }

            return NotFound("Pedido não encontrado!");
        }

        // Adicionar Pedido

        [HttpPost]
        public async Task<IActionResult> AddPedidos([FromBody] Pedidos pedido)
        {
            pedido.PedidoID = Guid.NewGuid();
            await applicationDbContext.Pedidos.AddAsync(pedido);
            await applicationDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPedido), new { id = pedido.PedidoID }, pedido);
        }

        // Modificar Pedido

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdatePedido([FromRoute] Guid id, [FromBody] Pedidos pedido)
        {
            var modificarpedido = await applicationDbContext.Pedidos.FirstOrDefaultAsync(x => x.PedidoID == id);
            if (modificarpedido != null)
            {
                modificarpedido.DataCompra = pedido.DataCompra;
                modificarpedido.DataChegada = pedido.DataChegada;
                modificarpedido.ValorTotal = pedido.ValorTotal;
                await applicationDbContext.SaveChangesAsync();

                return Ok(modificarpedido);
            }

            return NotFound("Pedido não encontrado!");

        }

        //Deletar Pedido

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeletarPedido([FromRoute] Guid id)
        {
            var deletarpedido = await applicationDbContext.Pedidos.FirstOrDefaultAsync(x => x.PedidoID == id);
            if (deletarpedido != null)
            {
                applicationDbContext.Remove(deletarpedido);
                await applicationDbContext.SaveChangesAsync();

                return Ok(deletarpedido);
            }

            return NotFound("Pedido não encontrado");
        }
    }
}
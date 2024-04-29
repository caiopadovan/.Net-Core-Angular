using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Projeto.Models;
using Projeto.Services;

namespace Projeto.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClienteController : Controller
    {
        private readonly ApplicationDbContext applicationDbContext;

        public ClienteController(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        // Mostrar todos os Clientes

        [HttpGet]
        public async Task<IActionResult> GetAllClientes()
        {
            var clientes = await applicationDbContext.Clientes.ToListAsync();
            return Ok(clientes);
        }

        // Mostrar apenas um Cliente

        [HttpGet]
        [Route("{id:Guid}")]
        [ActionName("GetCliente")]
        public async Task<IActionResult> GetCliente([FromRoute] Guid id)
        {
            var cliente = await applicationDbContext.Clientes.FirstOrDefaultAsync(x => x.ClienteID == id);
            if (cliente != null)
            {
                return Ok(cliente);
            }

            return NotFound("Cliente não encontrado!");
        }

        // Adicionar Cliente

        [HttpPost]
        public async Task<IActionResult> AddCliente([FromBody] Clientes cliente)
        {
            cliente.ClienteID = Guid.NewGuid();
            await applicationDbContext.Clientes.AddAsync(cliente);
            await applicationDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCliente), new { id = cliente.ClienteID}, cliente);
        }

        // Modificar cliente

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateCliente([FromRoute] Guid id, [FromBody] Clientes cliente)
        {
            var modificarcliente = await applicationDbContext.Clientes.FirstOrDefaultAsync(x => x.ClienteID == id);
            if(modificarcliente != null)
            {
                modificarcliente.Nome = cliente.Nome;
                modificarcliente.Sobrenome = cliente.Sobrenome;
                modificarcliente.Cidade = cliente.Cidade;
                modificarcliente.Estado = cliente.Estado;
                modificarcliente.Telefone = cliente.Telefone;
                await applicationDbContext.SaveChangesAsync();

                return Ok(modificarcliente);
            }
            
            return NotFound("Cliente não encontrado!");

        }

        //Deletar Cliente

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteCliente([FromRoute] Guid id)
        {
            var deletarcliente = await applicationDbContext.Clientes.FirstOrDefaultAsync(x => x.ClienteID == id);
            if(deletarcliente != null)
            {
                applicationDbContext.Remove(deletarcliente);
                await applicationDbContext.SaveChangesAsync();

                return Ok(deletarcliente);
            }

            return NotFound("Cliente não encontrado");

        }

    }
}

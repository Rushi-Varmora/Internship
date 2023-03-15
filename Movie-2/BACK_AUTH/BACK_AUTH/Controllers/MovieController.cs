using BACK_AUTH.Context;
using BACK_AUTH.Models;

using Intuit.Ipp.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BACK_AUTH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        
        private readonly AppDbContext _authContext;
        

        public MovieController(AppDbContext appDbContext)
        {
            _authContext = appDbContext;
        }
        


        [Authorize(Roles ="Admin")]
        [HttpPost("addmovie")]

        public async Task<IActionResult> AddMovie([FromBody] Movie MovieObj)
        {
            if (MovieObj == null)
                return BadRequest();

            await _authContext.Movies.AddAsync(MovieObj);
            await _authContext.SaveChangesAsync();
            return Ok(new
            {
                Message = "Movie Added"
            });
        }

        [HttpGet]
        public async Task<ActionResult<Movie>> GetMovies()
        {
            return Ok(await _authContext.Movies.ToListAsync());
        }

        [HttpGet]
        [Route("get-movie/{id}")]
        public async Task<IActionResult> getMovieById(int id)
        {
            var product = await _authContext.Movies.FindAsync(id);
            return Ok(product);
        }



    }
}

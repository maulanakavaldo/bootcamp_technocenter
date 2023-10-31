using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolWebAdmin.Models;

namespace SchoolWebAdmin.Controllers.Department
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentApiController : ControllerBase
    {
        private readonly SchoolDatabaseContext _dbContext;

        public DepartmentApiController(SchoolDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/<DepartmentApiController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DepartmentTable>>> GetDepartments()
        {
            List<DepartmentTable> departments = await _dbContext.DepartmentTables.ToListAsync();
            return Ok(departments);
        }


        // GET api/<DepartmentApiController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DepartmentTable>> GetDepartment(int id)
        {
            DepartmentTable department = await _dbContext.DepartmentTables.FindAsync(id);

            if (department == null)
            {
                return NotFound();
            }

            return Ok(department);
        }

        // POST api/<DepartmentApiController>
        [HttpPost]
        public async Task<ActionResult<DepartmentTable>> PostDepartment([FromBody] DepartmentTable department)
        {
            if (department == null)
            {
                return BadRequest("Department data is null");
            }

            // Menambahkan departemen baru ke dalam DbContext
            _dbContext.DepartmentTables.Add(department);

            // Menyimpan perubahan ke database
            await _dbContext.SaveChangesAsync();

            // Mengembalikan respons dengan departemen yang telah ditambahkan
            return CreatedAtAction(nameof(GetDepartment), new { id = department.DepartmentId }, department);
        }

        // PUT api/<DepartmentApiController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepartment(int id, [FromBody] DepartmentTable updatedDepartment)
        {
            if (id != updatedDepartment.DepartmentId)
            {
                return BadRequest("ID mismatch");
            }

            // Memperbarui departemen di dalam DbContext
            _dbContext.Entry(updatedDepartment).State = EntityState.Modified;

            try
            {
                // Menyimpan perubahan ke database
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_dbContext.DepartmentTables.Any(d => d.DepartmentId == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE api/<DepartmentApiController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartment(int id)
        {
            DepartmentTable department = await _dbContext.DepartmentTables.FindAsync(id);

            if (department == null)
            {
                return NotFound();
            }

            // Menghapus departemen dari DbContext
            _dbContext.DepartmentTables.Remove(department);

            // Menyimpan perubahan ke database
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolWebAdmin.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SchoolWebAdmin.Controllers.Student
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentApiController : ControllerBase
    {
        private readonly SchoolDatabaseContext _dbContext;

        public StudentApiController(SchoolDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/<StudentApiController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentTable>>> GetStudents()
        {
            List<StudentTable> students = await _dbContext.StudentTables.ToListAsync();
            return Ok(students);
        }

        // GET api/<StudentApiController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentTable>> GetStudent(int id)
        {
            StudentTable student = await _dbContext.StudentTables.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            return Ok(student);
        }

        // POST api/<StudentApiController>
        [HttpPost]
        public async Task<ActionResult<StudentTable>> PostStudent([FromBody] StudentTable student)
        {
            if (student == null)
            {
                return BadRequest("Student data is null");
            }

            // Validasi atau manipulasi data sebelum menyimpan ke database
            // ...

            // Menambahkan mahasiswa baru ke dalam DbContext
            _dbContext.StudentTables.Add(student);

            // Menyimpan perubahan ke database
            await _dbContext.SaveChangesAsync();

            // Mengembalikan respons dengan mahasiswa yang telah ditambahkan
            return CreatedAtAction(nameof(GetStudent), new { id = student.StudentId }, student);
        }

        // PUT api/<StudentApiController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudent(int id, [FromBody] StudentTable updatedStudent)
        {
            if (id != updatedStudent.StudentId)
            {
                return BadRequest("ID mismatch");
            }

            // Validasi atau manipulasi data sebelum menyimpan ke database
            // ...

            // Memperbarui mahasiswa di dalam DbContext
            _dbContext.Entry(updatedStudent).State = EntityState.Modified;

            try
            {
                // Menyimpan perubahan ke database
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_dbContext.StudentTables.Any(s => s.StudentId == id))
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

        // DELETE api/<StudentApiController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            StudentTable student = await _dbContext.StudentTables.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            // Menghapus mahasiswa dari DbContext
            _dbContext.StudentTables.Remove(student);

            // Menyimpan perubahan ke database
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}

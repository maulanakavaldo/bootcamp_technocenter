using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentWebAdmin_API.Models;

namespace SchoolWebAdmin.Controllers.Student
{
    //[Authorize]
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
            //List<StudentTable> students = await _dbContext.StudentTables.ToListAsync();
            //return Ok(students);

            if (_dbContext.StudentTables == null)
            {
                return NotFound();
            }
            var allStudent = await _dbContext.StudentTables
                  .Join(_dbContext.DepartmentTables, student => student.DepartmentId, departement => departement.DepartmentId,
                  (student, departement) => new StudentTable
                  {
                      StudentId = student.StudentId,
                      Department = departement,
                      Name = student.Name,
                      Semester = student.Semester,
                      Age = student.Age,
                      DepartmentId = student.DepartmentId
                  }).ToListAsync();
            return allStudent;
        }

        // GET api/<StudentApiController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentTable>> GetStudent(int id)
        {
            //StudentTable student = await _dbContext.StudentTables.FindAsync(id);

            //if (student == null)
            //{
            //    return NotFound();
            //}

            //return Ok(student);

            if (_dbContext.StudentTables == null)
            {
                return NotFound();
            }
            var studentTable = await _dbContext.StudentTables
                .Join(_dbContext.DepartmentTables, studentTable => studentTable.DepartmentId, departement => departement.DepartmentId,
                (studentTable, departement) => new StudentTable
                {
                    StudentId = studentTable.StudentId,
                    Department = departement,
                    Name = studentTable.Name,
                    Semester = studentTable.Semester,
                    Age = studentTable.Age,
                    DepartmentId = studentTable.DepartmentId
                })
                .Where(x => x.StudentId == id).FirstAsync();
            studentTable.Department = _dbContext.DepartmentTables.Where(x => x.DepartmentId == studentTable.DepartmentId).First();

            if (studentTable == null)
            {
                return NotFound();
            }

            return studentTable;

        }

        // POST api/<StudentApiController>
        [HttpPost]
        public async Task<ActionResult<StudentTable>> PostStudent([FromBody] StudentTable student)
        {
            if (student == null)
            {
                return BadRequest("Student data is null");
            }

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

            _dbContext.StudentTables.Remove(student);

            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}

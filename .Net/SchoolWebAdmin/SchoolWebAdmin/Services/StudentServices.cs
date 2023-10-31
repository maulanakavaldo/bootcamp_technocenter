using SchoolWebAdmin.Helpers;
using SchoolWebAdmin.Models;
using SchoolWebAdmin.Services.Interfaces;

namespace SchoolWebAdmin.Services
{
    public class StudentServices : IStudentService
    {
        readonly SchoolDatabaseContext _dbContext;
        private readonly HttpClient _client;
        public const string BasePath = "/api/StudentApi";

        public StudentServices(SchoolDatabaseContext _dbContext, HttpClient client)
        {
            this._dbContext = _dbContext;
            _client = client ?? throw new ArgumentNullException(nameof(client));

        }
        async Task<List<StudentTable>> IStudentService.GetStudentAsync()
        {
            //List<StudentTable> students = await _dbContext.StudentTables
            //    .Include(s => s.Department)  // join dengan DepartmentTable
            //    .ToListAsync();
            //return students;

            var response = await _client.GetAsync(BasePath);
            return await response.ReadContentAsync<List<StudentTable>>();

        }

        public async Task AddStudentAsync(StudentTable student)
        {
            var response = await _client.PostAsJsonAsync(BasePath, student);

            //if (student != null)
            //{
            //    _dbContext.StudentTables.Add(student);
            //    _dbContext.SaveChanges();
            //}
            //else
            //{
            //    throw new Exception("Isi data dengan lengkap");
            //}
        }

        public void AddStudent(DepartmentTable student)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteStudentAsync(int id)
        {
            //StudentTable student = _dbContext.StudentTables.Where(x => x.StudentId == id).First();

            //_dbContext.Remove(student);
            //_dbContext.SaveChanges();
            var response = await _client.DeleteAsync(BasePath + "/" + id);
        }


        public async Task UpdateStudentAsync(int id, string Name, int DepartmentID, int Age, int Semester)
        {
            //StudentTable student = _dbContext.StudentTables.Where(x => x.StudentId == id).First();
            //if (student != null)
            //{
            //    student.Name = Name;
            //    student.DepartmentId = DepartmentID;
            //    student.Age = Age;
            //    student.Semester = Semester;

            //    _dbContext.SaveChanges();
            //}

            StudentTable student = new StudentTable();
            student.StudentId = id;
            student.Name = Name;
            student.DepartmentId = DepartmentID;
            student.Age = Age;
            student.Semester = Semester;
            var response = await _client.PutAsJsonAsync(BasePath + "/" + id, student);
        }

        public async Task<StudentTable> GetStudentByIdAsync(int id)
        {
            return await _dbContext.StudentTables.FindAsync(id);
        }

    }
}

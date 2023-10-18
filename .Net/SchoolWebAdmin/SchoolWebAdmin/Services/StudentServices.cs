using SchoolWebAdmin.Models;
using SchoolWebAdmin.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace SchoolWebAdmin.Services
{
    public class StudentServices : IStudentService
    {
        readonly SchoolDatabaseContext _dbContext;

        public StudentServices(SchoolDatabaseContext _dbContext)
        {
            this._dbContext = _dbContext;

        }
        async Task<List<StudentTable>> IStudentService.GetStudentAsync()
        {
            List<StudentTable> students = await _dbContext.StudentTables
                .Include(s => s.Department)  // join dengan DepartmentTable
                .ToListAsync();
            return students;
        }

        public void AddStudent(StudentTable student)
        {
            if (student != null)
            {
                _dbContext.StudentTables.Add(student);
                _dbContext.SaveChanges();
            }
            else
            {
                throw new Exception("Isi data dengan lengkap");
            }
        }

        public void AddStudent(DepartmentTable student)
        {
            throw new NotImplementedException();
        }

        public void DeleteStudent(int id)
        {
            StudentTable student = _dbContext.StudentTables.Where(x => x.StudentId == id).First();

            _dbContext.Remove(student);
            _dbContext.SaveChanges();
        }


        public void UpdateStudent(int id, string Name, int DepartmentID, int Age, int Semester)
        {
            StudentTable student = _dbContext.StudentTables.Where(x => x.StudentId == id).First();
            if (student != null)
            {
                student.Name = Name;
                student.DepartmentId = DepartmentID;
                student.Age = Age;
                student.Semester = Semester;

                _dbContext.SaveChanges();
            }
        }

        public void UpdateStudent(int id, string name)
        {
            throw new NotImplementedException();
        }

        public async Task<StudentTable> GetStudentByIdAsync(int id)
        {
            return await _dbContext.StudentTables.FindAsync(id);
        }

    }
}

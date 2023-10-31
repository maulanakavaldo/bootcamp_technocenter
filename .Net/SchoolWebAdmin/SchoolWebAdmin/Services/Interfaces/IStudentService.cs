using SchoolWebAdmin.Models;

namespace SchoolWebAdmin.Services.Interfaces
{
    public interface IStudentService
    {
        Task<List<StudentTable>> GetStudentAsync();
        Task AddStudentAsync(StudentTable student);
        Task UpdateStudentAsync(int id, string Name, int DepartmentID, int Age, int Semester);
        Task DeleteStudentAsync(int id);
        void AddStudent(DepartmentTable student);
        Task<StudentTable> GetStudentByIdAsync(int id);
    }
}

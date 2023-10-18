using SchoolWebAdmin.Models;

namespace SchoolWebAdmin.Services.Interfaces
{
    public interface IStudentService
    {
        Task<List<StudentTable>> GetStudentAsync();
        void AddStudent(StudentTable student);
        void UpdateStudent(int id, string Name, int DepartmentID, int Age, int Semester);
        void DeleteStudent(int id);
        void UpdateStudent(int id, string name);
        void AddStudent(DepartmentTable student);
        Task<StudentTable> GetStudentByIdAsync(int id);
    }
}

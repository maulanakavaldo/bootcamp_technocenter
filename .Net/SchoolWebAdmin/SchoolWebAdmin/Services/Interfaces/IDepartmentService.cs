using SchoolWebAdmin.Models;

namespace SchoolWebAdmin.Services.Interfaces
{
    public interface IDepartmentService
    {
        Task<List<DepartmentTable>> GetDepartementAsync();
        void AddDepartment(DepartmentTable department);
        void UpdateDepartment(int id, string departmentName);
        void DeleteDepartment(int id);
        Task<DepartmentTable> GetDepartmentByIdAsync(int id);
    }
}

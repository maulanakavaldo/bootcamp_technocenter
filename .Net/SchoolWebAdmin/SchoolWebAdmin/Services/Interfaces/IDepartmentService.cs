using SchoolWebAdmin.Models;

namespace SchoolWebAdmin.Services.Interfaces
{
    public interface IDepartmentService
    {
        Task<List<DepartmentTable>> GetDepartementAsync();
        Task AddDepartment(DepartmentTable department);
        Task UpdateDepartment(int id, string departmentName);
        Task DeleteDepartment(int id);
        Task<DepartmentTable> GetDepartmentByIdAsync(int id);
    }
}

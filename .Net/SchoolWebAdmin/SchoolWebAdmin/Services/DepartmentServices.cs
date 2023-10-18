using Microsoft.EntityFrameworkCore;
using SchoolWebAdmin.Models;
using SchoolWebAdmin.Services.Interfaces;

namespace SchoolWebAdmin.Services
{
    public class DepartmentServices : IDepartmentService
    {
        readonly SchoolDatabaseContext _dbContext;

        public DepartmentServices(SchoolDatabaseContext _dbContext)
        {
            this._dbContext = _dbContext;
        }
        
        async Task<List<DepartmentTable>> IDepartmentService.GetDepartementAsync()
        {
            List<DepartmentTable> departments = await _dbContext.DepartmentTables.ToListAsync();
            return departments;
        }


        void IDepartmentService.AddDepartment(DepartmentTable department)
        {
            bool isDuplicate = _dbContext.DepartmentTables.Any(x => x.DepartmentName == department.DepartmentName);

            if (!isDuplicate)
            {
                _dbContext.Add(department);
                _dbContext.SaveChanges();
            }
            else
            {
                throw new Exception("Duplikat data");
            }
        }

        void IDepartmentService.UpdateDepartment(int id, string departmentName)
        {
            bool isDuplicate = _dbContext.DepartmentTables.Any(x => x.DepartmentName == departmentName && x.DepartmentId != id);

            if (!isDuplicate)
            {
                DepartmentTable department = _dbContext.DepartmentTables.Where(x => x.DepartmentId == id).First();
                department.DepartmentName = departmentName;

                _dbContext.Update(department);
                _dbContext.SaveChanges();
            }
            else
            {
                throw new Exception("Duplikat data");
            }
        }

        void IDepartmentService.DeleteDepartment(int id)
        {
            DepartmentTable department = _dbContext.DepartmentTables.Where(x => x.DepartmentId == id).First();

            _dbContext.Remove(department);
            _dbContext.SaveChanges();
        }

        public async Task<DepartmentTable> GetDepartmentByIdAsync(int id)
        {
            return await _dbContext.DepartmentTables.FindAsync(id);
        }
    }
}

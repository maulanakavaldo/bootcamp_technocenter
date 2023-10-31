using SchoolWebAdmin.Helpers;
using SchoolWebAdmin.Models;
using SchoolWebAdmin.Services.Interfaces;

namespace SchoolWebAdmin.Services
{
    public class DepartmentServices : IDepartmentService
    {
        readonly SchoolDatabaseContext _dbContext;
        private readonly HttpClient _client;
        public const string BasePath = "/api/DepartmentApi";

        public DepartmentServices(SchoolDatabaseContext _dbContext, HttpClient client)
        {
            this._dbContext = _dbContext;
            _client = client ?? throw new ArgumentNullException(nameof(client));
        }

        async Task<List<DepartmentTable>> IDepartmentService.GetDepartementAsync()
        {
            //List<DepartmentTable> departments = await _dbContext.DepartmentTables.ToListAsync();
            //return departments;

            var response = await _client.GetAsync(BasePath);
            return await response.ReadContentAsync<List<DepartmentTable>>();
        }


        //void IDepartmentService.AddDepartment(DepartmentTable department)
        async Task IDepartmentService.AddDepartment(DepartmentTable department)
        {
            var response = await _client.PostAsJsonAsync(BasePath, department);

            //bool isDuplicate = _dbContext.DepartmentTables.Any(x => x.DepartmentName == department.DepartmentName);

            //if (!isDuplicate)
            //{
            //    _dbContext.Add(department);
            //    _dbContext.SaveChanges();
            //}
            //else
            //{
            //    throw new Exception("Duplikat data");
            //}
        }

        async Task IDepartmentService.UpdateDepartment(int id, string departmentName)
        {
            DepartmentTable department = new DepartmentTable();
            department.DepartmentId = id;
            department.DepartmentName = departmentName;
            var response = await _client.PutAsJsonAsync(BasePath + "/" + id, department);

            //var response = await _client.PutAsJsonAsync(BasePath + "?id=" + id, department);


            //bool isDuplicate = _dbContext.DepartmentTables.Any(x => x.DepartmentName == departmentName && x.DepartmentId != id);

            //if (!isDuplicate)
            //{
            //    DepartmentTable department = _dbContext.DepartmentTables.Where(x => x.DepartmentId == id).First();
            //    department.DepartmentName = departmentName;

            //    _dbContext.Update(department);
            //    _dbContext.SaveChanges();
            //}
            //else
            //{
            //    throw new Exception("Duplikat data");
            //}
        }

        async Task IDepartmentService.DeleteDepartment(int id)
        {
            //DepartmentTable department = _dbContext.DepartmentTables.Where(x => x.DepartmentId == id).First();

            //_dbContext.Remove(department);
            //_dbContext.SaveChanges();
            var response = await _client.DeleteAsync(BasePath + "/" + id);


        }

        public async Task<DepartmentTable> GetDepartmentByIdAsync(int id)
        {
            return await _dbContext.DepartmentTables.FindAsync(id);
        }
    }
}

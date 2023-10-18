using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolWebAdmin.Models;
using SchoolWebAdmin.Services.Interfaces;

namespace SchoolWebAdmin.Controllers.Department
{
    public class DepartmentController : Controller
    {
        private readonly IDepartmentService _department;

        public DepartmentController(IDepartmentService department)
        {
            _department = department;
        }

        public async Task<IActionResult> Index(){
            List<DepartmentTable> departments = await _department.GetDepartementAsync();
            return View(departments);
        }

        [HttpGet]
        public async Task<IActionResult> AddDepartment()
        {
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> UpdateDepartment(int id)
        {
            DepartmentTable department = await _department.GetDepartmentByIdAsync(id);

            if (department == null)
            {
                return NotFound();
            }

            return View(department);
        }

        public IActionResult AddDepartment(DepartmentTable department)
        {
            _department.AddDepartment(department);
            return RedirectToAction("Index");
        }
        public IActionResult UpdateDepartment(int id, string departmentName)
        {
            _department.UpdateDepartment(id, departmentName);
            return RedirectToAction("Index");
        }

        public IActionResult DeleteDepartment(int id)
        {
            _department.DeleteDepartment(id);
            return RedirectToAction("Index");
        }

    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolWebAdmin.Models;
using SchoolWebAdmin.Services.Interfaces;

namespace SchoolWebAdmin.Controllers.Student
{
    public class StudentController : Controller
    {
        readonly IStudentService _student;
        readonly SchoolDatabaseContext _dbContext;

        public StudentController(IStudentService student, SchoolDatabaseContext dbContext)
        {
            _student = student;
            _dbContext = dbContext;
        }

        public async Task<IActionResult> Index()
        {
            List<StudentTable> students = await _student.GetStudentAsync();
            return View(students);
        }

        [HttpGet]
        public async Task<IActionResult> AddStudent()
        {
            List<DepartmentTable> departments = await _dbContext.DepartmentTables.ToListAsync();

            ViewBag.Departments = departments;
            return View();
        }

        [HttpPost]
        public IActionResult AddStudent(StudentTable student)
        {
            _student.AddStudent(student);
            return RedirectToAction("Index");
        }


        [HttpGet]
        public async Task<IActionResult> UpdateStudent(int id)
        {
            StudentTable student = await _student.GetStudentByIdAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            List<DepartmentTable> departments = await _dbContext.DepartmentTables.ToListAsync();

            ViewBag.Departments = departments;

            return View(student);
        }

        public IActionResult UpdateStudent(int id, string Name, int departmentID, int age, int semester)
        {
            _student.UpdateStudent(id, Name, departmentID, age, semester);
            return RedirectToAction("Index");
        }

        public IActionResult DeleteStudent(int id)
        {
            _student.DeleteStudent(id);
            return RedirectToAction("Index");
        }

    }
}

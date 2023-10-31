namespace SchoolWebAdmin.Models;

public partial class DepartmentTable
{
    public int DepartmentId { get; set; }

    public string? DepartmentName { get; set; }

    public virtual ICollection<StudentTable> StudentTables { get; set; } = new List<StudentTable>();
}

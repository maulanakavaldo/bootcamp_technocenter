using System.Text.Json.Serialization;

namespace StudentWebAdmin_API.Models;

public partial class DepartmentTable
{
    //[JsonIgnore]
    public int DepartmentId { get; set; }

    public string? DepartmentName { get; set; }

    public virtual ICollection<StudentTable> StudentTables { get; set; } = new List<StudentTable>();
}

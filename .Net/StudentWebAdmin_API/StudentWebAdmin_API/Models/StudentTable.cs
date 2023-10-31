using System.Text.Json.Serialization;

namespace StudentWebAdmin_API.Models;

public partial class StudentTable
{
    //[JsonIgnore]
    public int StudentId { get; set; }

    public string? Name { get; set; }

    public int? DepartmentId { get; set; }

    public int? Semester { get; set; }

    public int? Age { get; set; }

    public virtual DepartmentTable? Department { get; set; }
}

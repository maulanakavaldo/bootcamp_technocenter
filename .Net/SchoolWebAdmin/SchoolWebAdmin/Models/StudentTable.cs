using System;
using System.Collections.Generic;

namespace SchoolWebAdmin.Models;

public partial class StudentTable
{
    public int StudentId { get; set; }

    public string? Name { get; set; }

    public int? DepartmentId { get; set; }

    public int? Semester { get; set; }

    public int? Age { get; set; }

    public virtual DepartmentTable? Department { get; set; }
}

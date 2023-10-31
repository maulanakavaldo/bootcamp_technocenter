using System.ComponentModel.DataAnnotations;

namespace SchoolWebAdmin.Models
{
    public class ProgramTable
    {
        [Key]
        public int ProgramId { get; set; }

        public string ProgramName { get; set; }
    }
}

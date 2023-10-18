using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SchoolWebAdmin.Migrations
{
    /// <inheritdoc />
    public partial class initialcreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DepartmentTable",
                columns: table => new
                {
                    DepartmentID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DepartmentName = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Departme__B2079BCDB6C17AAF", x => x.DepartmentID);
                });

            migrationBuilder.CreateTable(
                name: "StudentTable",
                columns: table => new
                {
                    StudentID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: true),
                    DepartmentID = table.Column<int>(type: "int", nullable: true),
                    Semester = table.Column<int>(type: "int", nullable: true),
                    Age = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__StudentT__32C52A79F343DF2C", x => x.StudentID);
                    table.ForeignKey(
                        name: "FK__StudentTa__Depar__35BCFE0A",
                        column: x => x.DepartmentID,
                        principalTable: "DepartmentTable",
                        principalColumn: "DepartmentID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_StudentTable_DepartmentID",
                table: "StudentTable",
                column: "DepartmentID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StudentTable");

            migrationBuilder.DropTable(
                name: "DepartmentTable");
        }
    }
}

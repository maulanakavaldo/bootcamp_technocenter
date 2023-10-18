using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SchoolWebAdmin.Models;

public partial class SchoolDatabaseContext : DbContext
{
    public SchoolDatabaseContext()
    {
    }

    public SchoolDatabaseContext(DbContextOptions<SchoolDatabaseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<DepartmentTable> DepartmentTables { get; set; }

    public virtual DbSet<StudentTable> StudentTables { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;database=SchoolDatabase;Trusted_connection=true; TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<DepartmentTable>(entity =>
        {
            entity.HasKey(e => e.DepartmentId).HasName("PK__Departme__B2079BCDB6C17AAF");

            entity.ToTable("DepartmentTable");

            entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");
            entity.Property(e => e.DepartmentName)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StudentTable>(entity =>
        {
            entity.HasKey(e => e.StudentId).HasName("PK__StudentT__32C52A79F343DF2C");

            entity.ToTable("StudentTable");

            entity.Property(e => e.StudentId).HasColumnName("StudentID");
            entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .IsUnicode(false);

            entity.HasOne(d => d.Department).WithMany(p => p.StudentTables)
                .HasForeignKey(d => d.DepartmentId)
                .HasConstraintName("FK__StudentTa__Depar__35BCFE0A");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

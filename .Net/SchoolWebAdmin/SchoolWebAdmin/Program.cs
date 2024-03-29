using Microsoft.EntityFrameworkCore;
using SchoolWebAdmin.Models;
using SchoolWebAdmin.Services;
using SchoolWebAdmin.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

//api
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<SchoolDatabaseContext>(service =>
service.UseSqlServer(builder.Configuration.GetConnectionString("DefaultString")));

//Register

builder.Services.AddHttpClient<IDepartmentService, DepartmentServices>(c =>
c.BaseAddress = new Uri("https://localhost:7116/"));

builder.Services.AddHttpClient<IStudentService, StudentServices>(c =>
c.BaseAddress = new Uri("https://localhost:7116/"));


//builder.Services.AddScoped<IDepartmentService, DepartmentServices>();
//builder.Services.AddScoped<IStudentService, StudentServices>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

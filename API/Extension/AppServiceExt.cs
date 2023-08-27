using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Interfaces;
using Infrastructue.Data;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Extension
{
    public static class AppServiceExt
    {
        public static IServiceCollection applicationServices(this IServiceCollection services, IConfiguration config){
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
services.AddEndpointsApiExplorer();
services.AddSwaggerGen();
services.AddDbContext<StoreContext>(opt => 
{
    opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
});
services.AddScoped<IProductRepository, ProductRepo>();
services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepo<>));

services.AddCors(opt =>
{
    opt.AddPolicy("CorsPolicy", policy =>
    {
        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200");
    });
});
            return services;
        }
    }
}
using Domain.Entites;
using Microsoft.EntityFrameworkCore;
using System;

namespace Domain
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
        }

        DbSet<User> Users { get; set; }
        DbSet<WalletBalance> WalletBalances { get; set; }
        DbSet<WalletTransfer> WalletTransfers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>().HasData(new User()
            {
                Id = 1,
                UserName = "Admin",
                Mobile = "Admin",
                Password = "Admin",
                IsActive = true,
                IsAdmin = true
            });
        }
    }
}

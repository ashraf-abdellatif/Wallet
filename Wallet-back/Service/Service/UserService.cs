using Domain;
using Domain.Entites;
using Microsoft.EntityFrameworkCore;
using Service.Contract;
using Service.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Service
{
    public class UserService : IUserService
    {
        Context _context;
        public UserService(Context context)
        {
            _context = context;
        }

        public async Task<User> Authenticate(string Mobile, string Password)
        {
            var users = await _context.Set<User>().Where(w => w.Mobile == Mobile && w.Password == Password).ToListAsync();
            return users.FirstOrDefault();
        }

        public async Task RegisterNewUser(UserRegister form)
        {
            var addedUser = await _context.AddAsync<User>(new User() { Mobile = form.Mobile, Password = form.Password, UserName = form.UserName, IsAdmin = false });
            _context.SaveChanges();
            if (addedUser != null && addedUser.Entity != null)
            {
                await _context.AddAsync<WalletBalance>(new WalletBalance() { Credit = 0, Date = DateTime.UtcNow, Debit = 1000, Description = "Greeting Balance", UserID = addedUser.Entity.Id });
            }
            _context.SaveChanges();
        }
    }
}

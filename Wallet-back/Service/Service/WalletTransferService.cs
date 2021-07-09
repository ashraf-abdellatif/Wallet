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
    public class WalletTransferService : IWalletTransferService
    {
        Context _context;
        public WalletTransferService(Context context)
        {
            _context = context;
        }
        public async Task<WalletTransfer> DoTransfer(CreateTransferDto createTransferDto)
        {
            var transfer = await _context.AddAsync<WalletTransfer>(new WalletTransfer() { Date = DateTime.UtcNow, ToMoibileNumber = createTransferDto.Mobile, UserID = createTransferDto.UserID, Value = createTransferDto.Value });
            _context.SaveChanges();
            return transfer.Entity;
        }

        public async Task<List<WalletTransfer>> GetTransferToUser(int? userID)
        {
            var users = await _context.Set<User>().Where(w => w.Id == userID).ToListAsync();
            var user = users.FirstOrDefault();
            if (user.IsAdmin)
            {
                return await _context.Set<WalletTransfer>().Include(a=> a.UserFk).ToListAsync();
            }
            else
            {
                return await _context.Set<WalletTransfer>().Include(a => a.UserFk).Where(w => w.UserID == userID).ToListAsync();
            }
        }
    }
}

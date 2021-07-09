using Domain.Entites;
using Service.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Contract
{
    public interface IWalletTransferService
    {
        Task<WalletTransfer> DoTransfer(CreateTransferDto createTransferDto);
        Task<List<WalletTransfer>> GetTransferToUser(int? userID);
    }
}

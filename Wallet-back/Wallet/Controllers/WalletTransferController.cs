using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service.Contract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wallet.Models;

namespace Wallet.Controllers
{
 //   [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WalletTransferController : Controller
    {
        IWalletTransferService _walletTransferService;
        public WalletTransferController(IWalletTransferService walletTransferService)
        {
            _walletTransferService = walletTransferService;
        }

        [HttpGet]
        [Route("{Action}/{userId}")]
        public async Task<IActionResult> GetAllTransfers(int? userId)
        {
            return Ok(await _walletTransferService.GetTransferToUser(userId));
        }
        [HttpPost]
        [Route("{Action}")]
        public async Task<IActionResult> Post([FromBody]TransferModel model)
        {
            return Ok(await _walletTransferService.DoTransfer(new Service.Dtos.CreateTransferDto() { Mobile = model.ToMobile, UserID = model.UserID, Value = model.Value }));
        }

    }
}

using Microsoft.AspNetCore.Mvc;
using Service.Contract;
using Service.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wallet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WalletController : ControllerBase
    {
        IUserService _userService;
        public WalletController(IUserService userService)
        {
            _userService = userService;
        }

    }
}

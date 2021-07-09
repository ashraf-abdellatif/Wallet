﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Wallet.Models
{
    public class TransferModel
    {
        [Required]
        public int UserID { get; set; }
        [Required]
        public string ToMobile { get; set; }
        [Required]
        public decimal Value { get; set; }
    }
}

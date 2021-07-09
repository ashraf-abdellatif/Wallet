﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Dtos
{
    public class CreateTransferDto
    {
        public int UserID { get; set; }
        [Required]
        public string Mobile { get; set; }
        [Required]
        public decimal Value { get; set; }
    }
}

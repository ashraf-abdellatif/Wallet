using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entites
{
    public class Wallet: AggregateRoot<int>
    {
        //[ForeignKey("")]
        public int UserID { get; set; }
    }
}

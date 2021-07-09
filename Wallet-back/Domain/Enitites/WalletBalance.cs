using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entites
{
    public class WalletBalance : AggregateRoot<int>
    {
        [ForeignKey("UserFk")]
        public int UserID { get; set; }
        public DateTime Date { get; set; }
        public decimal Debit { get; set; }
        public decimal Credit { get; set; }
        public string Description { get; set; }
        public virtual User UserFk_Balance { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entites
{
    public class WalletTransfer : AggregateRoot<int>
    {
        [ForeignKey("UserFk")]
        public int UserID { get; set; }

        public DateTime Date { get; set; }
        public decimal Value { get; set; }
        public string ToMoibileNumber { get; set; }

        public virtual User UserFk { get; set; }
    }
}

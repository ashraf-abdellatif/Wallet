using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entites
{
    public class AggregateRoot<T>
    {
        public T Id { get; set; }
    }
}

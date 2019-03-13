namespace smashing72_beta.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class SmashingModel : DbContext
    {
        public SmashingModel()
            : base("name=SmashingModel")
        {
        }

        public virtual DbSet<Page> Pages { get; set; }
        public virtual DbSet<News> News { get; set; }
    }
}

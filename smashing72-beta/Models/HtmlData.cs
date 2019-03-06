namespace smashing72_beta.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("smashing72_admin.HtmlData")]
    public partial class HtmlData
    {
        public int Id { get; set; }

        [Required]
        public string Html { get; set; }
    }
}

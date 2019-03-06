namespace smashing72_beta.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("smashing72_admin.Content")]
    public partial class Content
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Content()
        {
            Content1 = new HashSet<Content>();
        }

        public int Id { get; set; }

        [Required]
        [StringLength(500)]
        public string Title { get; set; }

        [Required]
        [StringLength(50)]
        public string UrlSegment { get; set; }

        public bool ShowInMenu { get; set; }

        public int? MenuOrder { get; set; }

        public int? ParentContentId { get; set; }

        [StringLength(50)]
        public string DataType { get; set; }

        public string JsonData { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Content> Content1 { get; set; }

        public virtual Content Content2 { get; set; }
    }
}

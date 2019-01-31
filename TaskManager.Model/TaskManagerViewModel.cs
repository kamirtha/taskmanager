using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager.Model
{
    public class TaskViewModel
    {
        [Key]
        public int TaskId { get; set; }        

        [Required]
        [StringLength(80)]
        public string TaskDescription { get; set; }

        public int? ParentTaskId { get; set; }

        public string ParentTaskDescription { get; set; }

        public int Priority { get; set; }             

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }

        public bool Completed { get; set; }
    }
}

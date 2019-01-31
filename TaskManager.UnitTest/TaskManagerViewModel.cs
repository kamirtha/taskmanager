using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager.UnitTest
{
    public class TaskViewModel
    {
        public int TaskId { get; set; }        

        public string TaskDescription { get; set; }

        public int? ParentTaskId { get; set; }

        public string ParentTaskDescription { get; set; }

        public int Priority { get; set; }             

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public bool Completed { get; set; }
    }
}

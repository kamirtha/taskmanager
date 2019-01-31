using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TaskManager.Model;
using TaskManager.DataAccessLib;

namespace TaskManager.API.Controllers
{
    [EnableCors(origins:"*", headers: "*", methods: "*")]
    public class TaskManagerController : ApiController
    {
        // GET: api/TaskManager
        public List<TaskViewModel> GetAllTasks()
        {
            TaskManagerDAL taskDAL = new TaskManagerDAL();
            List<TaskViewModel> tasks = taskDAL.GetAllTasks();
            return tasks;
        }

        public List<TaskViewModel> GetParentTasks(int id)
        {
            TaskManagerDAL taskDAL = new TaskManagerDAL();
            List<TaskViewModel> tasks = taskDAL.GetParentTasks(id);
            return tasks;
        }


        // GET: api/TaskManager/5
        public TaskViewModel GetTaskById(int id)
        {
            TaskManagerDAL taskDAL = new TaskManagerDAL();
            TaskViewModel task = taskDAL.GetTaskById(id);
            return task;
        }

        // POST: api/TaskManager
        public bool Save(TaskViewModel model)
        {
            TaskManagerDAL taskDAL = new TaskManagerDAL();
            return taskDAL.SaveTask(model);
        }

        // POST: api/TaskManager
        public bool CompleteTask(TaskViewModel model)
        {
            TaskManagerDAL taskDAL = new TaskManagerDAL();
            return taskDAL.CompleteTask(model.TaskId);
        }


        // DELETE: api/TaskManager/5
        [HttpDelete]
        public bool DeleteTask(int id)
        {
            TaskManagerDAL taskDAL = new TaskManagerDAL();
            return taskDAL.DeleteTask(id);
        }
    }
}

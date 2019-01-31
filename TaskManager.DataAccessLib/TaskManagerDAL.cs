using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TaskManager.Entities;
using TaskManager.Context;
using TaskManager.Model;

namespace TaskManager.DataAccessLib
{
    public class TaskManagerDAL
    {
        private TaskManagerDBContext dbCntx;

        public TaskManagerDAL()
        {
            dbCntx = new TaskManagerDBContext();
        }

        public List<TaskViewModel> GetAllTasks()
        {
            List<TaskViewModel> tasks = (from task in dbCntx.Task

                                         join parent in dbCntx.Task
                                         on task.ParentTaskId equals parent.TaskId into parentTasks

                                         from parentTask in parentTasks.DefaultIfEmpty()

                                         where task.Active == true

                                         select new TaskViewModel
                                         {
                                             TaskId = task.TaskId,
                                             ParentTaskId = task.ParentTaskId,
                                             TaskDescription = task.TaskDescription,
                                             ParentTaskDescription = parentTask != null ? parentTask.TaskDescription : string.Empty,
                                             Priority = task.Priority,
                                             StartDate = task.StartDate,
                                             EndDate = task.EndDate,
                                             Completed = task.Completed
                                         }).ToList();

            return tasks;
        }

        public List<TaskViewModel> GetParentTasks(int id)
        {
            List<TaskViewModel> tasks = (from task in dbCntx.Task

                                         where task.Active == true

                                         && task.TaskId != id

                                         select new TaskViewModel
                                         {
                                             TaskId = task.TaskId,
                                             TaskDescription = task.TaskDescription
                                         }).ToList();

            return tasks;
        }

        public TaskViewModel GetTaskById(int Id)
        {
            TaskViewModel taskVM = (from task in dbCntx.Task

                                    join parent in dbCntx.Task
                                    on task.ParentTaskId equals parent.TaskId into parentTasks

                                    from parentTask in parentTasks.DefaultIfEmpty()

                                    where task.TaskId == Id

                                    && task.Active == true

                                    select new TaskViewModel
                                    {
                                        TaskId = task.TaskId,
                                        ParentTaskId = task.ParentTaskId,
                                        TaskDescription = task.TaskDescription,
                                        ParentTaskDescription = parentTask != null ? parentTask.TaskDescription : string.Empty,
                                        Priority = task.Priority,
                                        StartDate = task.StartDate,
                                        EndDate = task.EndDate,
                                        Completed = task.Completed
                                    }).FirstOrDefault();

            return taskVM;
        }

        public bool SaveTask(TaskViewModel model)
        {
            Task task = dbCntx.Task.FirstOrDefault(t => t.TaskId == model.TaskId);

            if (task == null)
            {
                task = new Task { Active = true };
                dbCntx.Task.Add(task);
            }
            else
            {
                dbCntx.Task.Attach(task);
                dbCntx.Entry<Task>(task).State = System.Data.Entity.EntityState.Modified;
            }

            task.ParentTaskId = model.ParentTaskId;
            task.TaskDescription = model.TaskDescription;
            task.Priority = model.Priority;
            task.StartDate = model.StartDate;
            task.EndDate = model.EndDate;
            task.Completed = model.Completed;

            dbCntx.SaveChanges();

            return true;
        }

        public bool CompleteTask(int Id)
        {
            Task task = dbCntx.Task.FirstOrDefault(t => t.TaskId == Id);

            if (task != null)
            {
                task.Completed = true;
                dbCntx.Task.Attach(task);
                dbCntx.Entry<Task>(task).State = System.Data.Entity.EntityState.Modified;

                dbCntx.SaveChanges();
            }

            return true;
        }

        public bool DeleteTask(int Id)
        {
            Task task = dbCntx.Task.FirstOrDefault(t => t.TaskId == Id);

            if (task != null)
            {
                task.Active = false;
                dbCntx.Task.Attach(task);
                dbCntx.Entry<Task>(task).State = System.Data.Entity.EntityState.Modified;

                dbCntx.SaveChanges();
            }

            return true;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using NUnit.Framework;

namespace TaskManager.UnitTest
{
    [TestFixture]
    public class TaskManagerTest
    {
        string baseUri = "http://localhost:50895";
        int taskId = 0;
        string taskDescription = "NUnit Testing " + DateTime.Now.ToString("yyyyMMddHHmmss");

        [Test]
        public void T01_GetAllTasks()
        {
            var items = GetAllTasks();
            Assert.Greater(items.Count, 0);
        }

        [Test]
        public void T02_InsertTask()
        {
            TaskViewModel model = new TaskViewModel();
            model.TaskDescription = taskDescription;
            model.Priority = 10;
            model.StartDate = DateTime.Today;
            model.EndDate = DateTime.Today.AddDays(5);
            Save(model);

            var tasks = GetAllTasks();
            var task = tasks.Where(t => t.TaskDescription == model.TaskDescription).FirstOrDefault();

            taskId = task.TaskId;

            var item = GetTaskById(taskId);
            Assert.AreEqual(item.TaskId, taskId);
        }

        [Test]
        public void T03_UpdateTask()
        {
            TaskViewModel model = new TaskViewModel();
            model.TaskId = taskId;
            model.TaskDescription = taskDescription + " updated";
            model.Priority = 10;
            model.StartDate = DateTime.Today;
            model.EndDate = DateTime.Today.AddDays(5);
            Save(model);

            var item = GetTaskById(model.TaskId);
            Assert.AreEqual(item.TaskId, model.TaskId);
        }
        
        [Test]
        public void T04_GetTaskById()
        {
            var item = GetTaskById(taskId);
            Assert.AreEqual(item.TaskId, taskId);
        }

        [Test]
        public void T05_CompleteTask()
        {
            CompleteTask(taskId);

            var item = GetTaskById(taskId);
            Assert.AreEqual(
                new { id = taskId, state = true },
                new { id = item.TaskId, state = item.Completed }
                );
        }

        [Test]
        public void T06_DeleteTask()
        {
            int taskId = 3;
            DeleteTask(taskId);

            var item = GetTaskById(taskId);
            Assert.AreEqual(null, item);
        }

        private List<TaskViewModel> GetAllTasks()
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(baseUri);
            var response = client.GetAsync("/api/taskmanager/getalltasks").Result;
            var tasks = response.Content.ReadAsAsync<List<TaskViewModel>>().Result;
            return tasks;
        }

        private TaskViewModel GetTaskById(int id)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(baseUri);
            var response = client.GetAsync("/api/taskmanager/gettaskbyid/" + id.ToString()).Result;
            var task = response.Content.ReadAsAsync<TaskViewModel>().Result;
            return task;
        }

        private void Save(TaskViewModel model)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(baseUri);
            var response = client.PostAsJsonAsync<TaskViewModel>("/api/taskmanager/save", model).Result;
            response.EnsureSuccessStatusCode();
        }

        private void CompleteTask(int id)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(baseUri);
            TaskViewModel model = new TaskViewModel();
            model.TaskId = id;
            var response = client.PostAsJsonAsync<TaskViewModel>("/api/taskmanager/completetask", model).Result;
            response.EnsureSuccessStatusCode();
        }

        private void DeleteTask(int id)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(baseUri);
            var response = client.DeleteAsync("/api/taskmanager/deletetask/" + id.ToString()).Result;
            response.EnsureSuccessStatusCode();
        }
    }
}

using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NBench;
using TaskManager.DataAccessLib;
using TaskManager.Model;

namespace TaskManager.PerformanceTests
{
    public class TaskManagerPerformanceTest
    {
        TaskManagerDAL taskMgr;
        TaskViewModel taskVM;

        [PerfSetup]
        public void Setup(BenchmarkContext context)
        {
            taskMgr = new TaskManagerDAL();

            taskVM = new TaskViewModel
            {
                TaskDescription = "Perf testing",
                Priority = 10,
                StartDate = DateTime.Today,
                EndDate = DateTime.Today.AddDays(2)
            };
        }

        [PerfBenchmark(NumberOfIterations = 500, RunMode = RunMode.Iterations, TestMode = TestMode.Test, SkipWarmups = true)]
        [ElapsedTimeAssertion(MaxTimeMilliseconds = 100)]
        public void GetAllTasks_500_Iterations()
        {
            taskMgr.GetAllTasks();
        }

        [PerfBenchmark(RunTimeMilliseconds = 10000, RunMode = RunMode.Throughput, TestMode = TestMode.Test, SkipWarmups = true)]
        [ElapsedTimeAssertion(MaxTimeMilliseconds = 3000)]
        public void GetAllTasks_10_Seconds()
        {
            taskMgr.GetAllTasks();
        }

        [PerfBenchmark(NumberOfIterations = 1, RunMode = RunMode.Iterations, TestMode = TestMode.Test, SkipWarmups = true)]
        [ElapsedTimeAssertion(MaxTimeMilliseconds = 50)]
        public void AddTask_Elapsed_Time()
        {
            taskMgr.SaveTask(taskVM);
        }

        [PerfBenchmark(NumberOfIterations = 1, RunMode = RunMode.Iterations, TestMode = TestMode.Test, SkipWarmups = true)]
        [MemoryAssertion(MemoryMetric.TotalBytesAllocated, MustBe.GreaterThan, ByteConstants.SixtyFourKb)]
        public void AddTask_Memmory_Consumed()
        {
            taskMgr.SaveTask(taskVM);
        }
    }
}

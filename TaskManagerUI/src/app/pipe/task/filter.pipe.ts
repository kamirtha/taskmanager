import { Pipe, PipeTransform } from '@angular/core';
import { TaskModule, TaskSearchModule } from '../../model/task/task.module';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: TaskModule[], args?: TaskSearchModule): TaskModule[] {

    if (value == null)
      return null;

    let result = value.filter(task => {

      return ( 

        (args.TaskDescription == undefined || args.TaskDescription == "" || task.TaskDescription.toLowerCase().includes(args.TaskDescription))

        && (args.ParentTaskDescription == undefined || args.ParentTaskDescription == "" || task.ParentTaskDescription.toLowerCase().includes(args.ParentTaskDescription))

        && (args.PriorityFrom == undefined || args.PriorityFrom == "" || task.Priority >= parseInt(args.PriorityFrom))

        && (args.PriorityTo == undefined || args.PriorityTo == "" || task.Priority <= parseInt(args.PriorityTo))

        && (args.StartDate == undefined || task.StartDate >= args.StartDate)

        && (args.EndDate == undefined || task.EndDate <= args.EndDate)
      )

    });

    return result;
  }
}

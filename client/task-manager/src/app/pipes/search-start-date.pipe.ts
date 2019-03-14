import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../modules/task';

@Pipe({
  name: 'searchStartDate'
})
export class SearchStartDatePipe implements PipeTransform {

   transform(tasks: Array<Task>, startdate?: string) {
        console.log(tasks);
        console.log(startdate);
        if(startdate)
        {
            let filteredTask: Array<Task> = null;
            filteredTask= 
			tasks.filter(task => task.startdate.startsWith(startdate) )
            return filteredTask;
        }
        return tasks;
    }

}


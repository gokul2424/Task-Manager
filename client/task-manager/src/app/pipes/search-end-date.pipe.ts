
import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../modules/task';

@Pipe({
  name: 'searchEndDate'
})
export class SearchEndDatePipe implements PipeTransform {

   transform(tasks: Array<Task>, enddate?: string) {
        console.log(tasks);
        console.log(enddate);
        if(enddate)
        {
            let filteredTask: Array<Task> = null;
            filteredTask= 
			tasks.filter(task => task.enddate.startsWith(enddate) )
            return filteredTask;
        }
        return tasks;
    }

}
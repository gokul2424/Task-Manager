
import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../modules/task';

@Pipe({
  name: 'searchPriorityFrom'
})
export class SearchPriorityFromPipe implements PipeTransform {

  transform(tasks: Array<Task>, Priority_From?: string) {
        console.log(tasks);
        console.log(Priority_From);
        
        if(Priority_From)
        {
            let filteredTask: Array<Task> = null;
            filteredTask= 
			tasks.filter(task => (task.priority)>=(parseInt(Priority_From)))
            return filteredTask;
        }
        return tasks;
    }

}




import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../modules/task';

@Pipe({
  name: 'searchParent'
})
export class SearchParentPipe implements PipeTransform {

   transform(tasks: Array<Task>, parenttask?: string) {
        console.log(tasks);
        console.log(parenttask);
        if(parenttask)
        {
            let filteredTask: Array<Task> = null;
            filteredTask= 
			tasks.filter(task => task.parenttask.startsWith(parenttask) )
            return filteredTask;
        }
        return tasks;
    }

}
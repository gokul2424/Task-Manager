import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../modules/task';

@Pipe({
  name: 'searchTask'
})
export class SearchTaskPipe implements PipeTransform {

   transform(tasks: Array<Task>, taskname?: string) {
        console.log(tasks);
        console.log(taskname);
        if(taskname)
        {
            let filteredTask: Array<Task> = null;
            filteredTask= 
			tasks.filter(task => task.taskname.startsWith(taskname) )
            return filteredTask;
        }
        return tasks;
    }

}


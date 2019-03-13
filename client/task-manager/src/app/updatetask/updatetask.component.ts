import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent{

  
  tasks:Array <Object>=[];
  
  @Input('taskname') taskname:string=' ';
  @Input('priority') priority:number=0;
  @Input('parenttask') parenttask:string=' ';
  @Input('startdate') startdate:string=' ';
  @Input('enddate') enddate:string=' ';

constructor(public http:HttpClient){

}

updatetask(taskname:string,priority:number,parenttask:string,startdate:string,enddate:string){
        
	this.http.put('http://localhost:7001/edittasks',
	{
	  taskname:taskname,
	  priority:priority,
	  parenttask:parenttask,
	  startdate:startdate,
	  enddate:enddate
	})
		.toPromise()
		.then(res=>
		{
			console.log(res)
			return res
		})
}

}

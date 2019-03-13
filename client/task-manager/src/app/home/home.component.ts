import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent{

  states:Array <Object>=[];
  
  @Input('taskname') taskname:string=' ';
  @Input('priority') priority:number=0;
  @Input('parenttask') parenttask:string=' ';
  @Input('startdate') startdate:string=' ';
  @Input('enddate') enddate:string=' ';
  @Input('state') state:Boolean=true;
  
constructor(public http:HttpClient)
{

}
ngOnInit()
{
	this.http.get('http://localhost:7001/task')
		.toPromise()
		.then(res=>
		{
			console.log(res);
			this.states=res as any;
		})

}


endtask(taskname:string,priority:number,parenttask:string,startdate:string,enddate:string)
{
	this.http.put('http://localhost:7001/endtasks',
	{
		taskname:taskname,
		priority:priority,
		parenttask:parenttask,
		startdate:startdate,
		enddate:enddate,
		
	})
		.toPromise()
		.then(res=>
		{
			console.log(res)
			return res
		})
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




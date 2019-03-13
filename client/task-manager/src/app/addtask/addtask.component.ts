import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

 
  tasks:Array<Object>=[];
  
  @Input('taskname') taskname:string=' ';
  @Input('priority') priority:number=0;
  @Input('parenttask') parenttask:string=' ';
  @Input('startdate') startdate:string=' ';
  @Input('enddate') enddate:string=' ';
  constructor(public http:HttpClient)
  {

  }

  addtask(
    taskname:string,
    priority:number,
    parenttask:string,
    startdate:string,
    enddate:string,
    ){
    
   this.http.post('http://localhost:7001/tasks',
   {
     taskname:taskname,
    priority:priority,
    parenttask:parenttask,
    startdate:startdate,
    enddate:enddate
  })
   .toPromise()
   .then(res=>{
       console.log(res)
       return res
})
}
  ngOnInit() {
  }

}


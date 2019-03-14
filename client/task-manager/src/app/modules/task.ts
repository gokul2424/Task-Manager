export class Task {

    constructor
	(
		public taskname:string,
        public priority:number,
        public parenttask:string,
        public startdate:string,
        public enddate:string,
		public state:boolean
		)
    {
        
    }
}

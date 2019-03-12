const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tasks';

function connect(callback)
{
    MongoClient.connect("mongodb://localhost:27017/dbName", 
	{ 
        useNewUrlParser: true 
	},
	function(err, client) 
		{
		assert.equal(null, err);
		console.log("Connected successfully to server");
		if(err)
		{
			callback(err,null)
		}	
		else
		{
			callback(null,client)
		}
 
    });
}

function findtask(callback)
{
	connect((err,client)=>
	{
		const db = client.db(dbName);
		//Collection Name
		const collection = db.collection('task');
		
		// Find some documents
		collection.find({}).toArray(function(err, docs) 
		{
			assert.equal(err, null);
			console.log("Found the following task");
			client.close();
			callback(null,docs);
		});
   })
   
}

function inserttask(body,callback)
{
    console.log(typeof(body));
	
    connect((err,client)=>
	{
        const db = client.db(dbName);
        const collection = db.collection('task');
         //Insert one document in task collection
		collection.insertOne(body,(err,result) => 
		{
			console.log("Inserted the task")
			client.close();
			callback(result);
		});
   
    })
       
}
	
function insertparent(body,callback)
{
    console.log(typeof(body));
	
    connect((err,client)=>
	{
        const db = client.db(dbName);
        const collection = db.collection('parent');
         //Insert one document in parent collection
		collection.insertOne(body,(err,result) => 
		{
			console.log("Inserted the parent")
			client.close();
			callback(result);
		});

    })
       
}

function insertstate(body,callback)
{
    console.log(typeof(body));
	
    connect((err,client)=>
	{
        const db = client.db(dbName);
        const collection = db.collection('state');
         //Insert one document in state collection to check for state true or false
		collection.insertOne(body,(err,result) => 
		{
			console.log("Inserted the state")
			client.close();
			callback(result);
		});

    })
       
}
	
function deletetask(taskname,callback)
{
        connect((err,client)=>
		{
            const db = client.db(dbName);
            const collection = db.collection('task');
		    //delete one document
            collection.deleteOne({ taskname:taskname }, function(err, result) 
			{
                console.log("Removed the document with the field a equal to "+taskname);
                callback(result);
			});
    })
}

function updatetask(body,callback)
{
    connect((err,client)=>
	{
        const db = client.db(dbName);
        const collection = db.collection('task');
        //collection.find({'a': 3}).toArray(function(err, docs) {
          //console.log(docs);
          //});
          //update one document
        collection.updateOne({tskid:body.tskid}, 
		{ 
			$set: 
			{ 
			   tskid:body.tskid,
			   taskname:body.taskname,
			   priority:body.priority,
			   parenttask:body.parenttask,
			   startdate:body.startdate,
			   enddate:body.enddate,
			   state:body.state
			} 
		}, 
		function(err, result) 
		{
            console.log("Updated the document with the field a equal to 2");
            console.log(result)
            callback(result);
        });  
     
    })
}

function endtask(body,callback)
{
    connect((err,client)=>
	{
        const db = client.db(dbName);
        const collection = db.collection('task');
        //collection.find({'a': 3}).toArray(function(err, docs) {
          //console.log(docs);
          //});
          //update one document
        collection.updateOne({tskid:body.tskid}, 
		{ 
			$set: 
			{ 
			   tskid:body.tskid,
			   taskname:body.taskname,
			   priority:body.priority,
			   parenttask:body.parenttask,
			   startdate:body.startdate,
			   enddate:body.enddate,
			   state:'false'
			} 
		}, 
		function(err, result) 
		{
            console.log("Updated the document with the field a equal to 2");
            console.log(result)
            callback(result);
        });  
     
    })
}

module.exports={findtask,inserttask,deletetask,updatetask,insertparent,insertstate}

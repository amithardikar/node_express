var express=require('express');
var app=express();
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/nodeproject');
var Schema=mongoose.Schema;
var userSchema=new Schema({
    name:String,
    age:Number 
});
    

var User=mongoose.model('User',userSchema);
            
/*
 * The function  
 */
app.get('/', function(req,res){
    User.find({}, function(err, users) {
        if (err) throw err;
        
         // object of all the users
        console.log(users);
        res.send(users);
    });
});
app.post('/api/save',function(req,res){
              
    var newuser=User({
        name:"soham2",
        age:28
                 
    });
     newuser.save(function(err){
        if(err) throw err;
            console.log("user cteated");
    });
                // var users=newuser.findOne();
                // users.each(function(err,doc){
                //     //assert.equal(err,null);
                //             if(doc!=null)
                //             {
                //                     console.log(doc);
                //             }
                // });
                
});

app.get('/api/username',(req,res)=>{
    
    User.findOne({ name: 'nilesh' }, function(err, user) {
        if (err) throw err;
              
                // object of the user
                res.send(user);
    });
});
app.get('/api/username',(req,res)=>{

    User.find({ name: 'nilesh' }, function(err, user) {
        if (err) throw err;
                  
                    // object of the user
        res.send(user);
    });
});
            
app.delete('/api/username/remove',(req,res)=>{

    User.remove({ name: 'nilesh' }, function(err, user) {
        if (err) throw err;
                      
                        // object of the user
        res.send("user removed");
    });
});

var id="5ab49a9356740b1d1cf4620d";// get a user with ID of soham
                    
app.put('/api/update',(req,res)=>{

    User.findById(id, function(err, user) {
        if (err) throw err;
                        
        // change the users age means soham here
        user.age = 100;
                        
        // save the user
            user.save(function(err) {
                if (err) throw err;
                        
                console.log('Users age successfully updated!');
            });
                        
    });
});

app.listen(5000);
console.log("port run on localhost 5000");
module.exports=User;
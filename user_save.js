var User=require('D:/Development/node project/server');
//var bodyParser = require('body-parser');
var express=require('express');
var app=express();
//app.use(express.static('public'));

var newuser=User({
    name:"nilesh",
    age:27
   
});
newuser.save(function(err){
    if(err) throw err;
    console.log("user cteated");
});
// var users=newuser.findOne();
// users.each(function(err,doc){
   
//             if(doc!=null)
//             {
//                     console.log(doc);
//             }
// });


      
//   app.get('/',function(req,res){
//     console.log('get');
//     // User.find({}, function(err, users) {
//     //     if (err) throw err;
      
//     //     // object of all the users
//     //   //  res.send(users);
//     //     console.log(users);
//     //   });

//     res.send(courses);
//     });
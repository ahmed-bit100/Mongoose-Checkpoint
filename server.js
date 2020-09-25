const person= require ('./person');
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/db',{useFindAndModify:false,useNewUrlParser: true, useUnifiedTopology: true },(er)=>{
    if(er) console.log(er)
    else console.log('database connected')
})
/*let newperson=new person({
    name:'ahmed',
    age: 25,
    favoriteFoods:['Lasagna'],


})*/
/*newperson.save()
.then(result=>console.log(result))
.catch(er=>console.log(er))*/

let newperson= new person()
//Create Many Records with model.create()
/*
let arrayOfPeople=[{name:'mohamed',age:24, favoriteFoods:['Couscous']},
                    {name:'mahmoud', age:30, favoriteFoods:['Fish']}];


    person.create(arrayOfPeople,function(err,people){
        if (err)  console.log(err);
        else console.log(people);
        
    });
; */


//Use model.find() to Search Your Database
/*
    person.find({name: 'mohamed'}, function(err, found) {
    if (err)  console.log(err);
    else console.log(found);
    
    });
*/


//Use model.findOne() to Return a Single Matching Document from Your Database
/*
person.findOne({favoriteFoods:'Couscous'}, function(err, data) {
    if(err) console.log(err);
    else console.log(data);
});  
*/


//Use model.findById() to Search Your Database By _id
/*
person.findById('5f6db2b668bed74b78a5230d', function(err, data){
    if(err) console.log(err);
    else    console.log(data);
})  
*/


//Perform Classic Updates by Running Find, Edit, then Save
/*
person.findById('5f6db2b668bed74b78a5230d', function(err, data){
    if(err) console.log(err);
    else  { 

data.favoriteFoods.push("hamburger");
Person=new person(data);
Person.save((err,data)=>{
    if(err) console.log(err);
    else console.log(data);
})
}})
*/
//Perform New Updates on a Document Using model.findOneAndUpdate()
/*  
    person.findOneAndUpdate(
    {name: 'ahmed'},{age:20},
    function(err, data) { 
        if (err) console.log(err);
        else console.log(data)
    }
    );
*/

//Delete One Document Using model.findByIdAndRemove
/*
person.findByIdAndRemove('5f6b7889ad085724e0b162ca',function(err,data){
    if (err) console.log(err)
    else console.log(data)
})
*/

//MongoDB and Mongoose - Delete Many Documents with model.remove()
/*
person.remove({name:'Mary'},function(err,done){
    if (err) console.log(err)
    else console.log(done.deletedCount)
})
*/

//Chain Search Query Helpers to Narrow Search Results
person.find({favoriteFoods:'burrito'}).sort({name : "asc"}).limit(2).select("-age").exec (function(err,data){
    if (err) console.log(err)
    else console.log(data)})


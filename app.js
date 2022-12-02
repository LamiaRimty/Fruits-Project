const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
  //collection names
   name:{
    type : String,
    require: [ true,"Please check your data entry no name specified!" ]
   },
   rating: {
    type: Number,
    min:1,
    max:10
   },
   review: String
 });
 
// //schema model
// const Fruit = mongoose.model("Fruit", fruitSchema); //convert prularise form fruits,stick to specify sturcture called fruitschema
// const fruit = new Fruit({
 
//  rating:9,
//  review: "Liche is yummy!"

// });

//fruit.save(); //save fruits doc save in Fruit collection fruitdb

const personSchema = new mongoose.Schema({
 //collection names
  name:String,
  age: Number
});

//schema model
const Person = mongoose.model("Person", personSchema); //convert prularise form fruits,stick to specify sturcture called fruitschema
const person = new Person(
  
  {
    name:"Rimty",
    age:27
  }
  );
  //person.save();

  
//   const plum= new Fruit({
//      name: "Plum",
//      score:9,
//      review:"Normalize blood sugar"
//   });

//   const avocado= new Fruit({
//     name: "Avocado",
//     score:10,
//     review:"Very healthy fruit with nutty flavour"
//  });

//  const orange= new Fruit({
//   name: "Orange",
//   score:7,
//   review:"Spanish oranges are sweet"
// });



// Fruit.insertMany([ plum, avocado, orange], function(error) {

//   if(error){
//     console.log(error);
//   }

//   else{
//     console.log("Sucessfully saved all fruits to the FruitsDB");
//   }
// });

//reading from db ,call find function
Fruit.find(function(error,fruits){
  if(error){
    console.log(error);
  }
  else{

    mongoose.connection.close();
    
  fruits.forEach( function(fruit){ //each individual object inside the array.pick out each fruit out of array
    console.log(fruit.name);
  });
  }
});


Fruit.updateOne({ _id: "6389d9a295aeab3b0622204b" },{ name:"Liche"},function(error){
 
  if(error){
    console.log(error);
  }

  else{
    console.log("Successfully update liche name in the document");
  }
});


// Fruit.deleteOne({name:"Liche"},function(error){
 
//   if(error){
//     console.log(error);
//   }

//   else{
//     console.log("Successfully deleted Liche in the document");
//   }
// })
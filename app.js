const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
  //collection names
   name: String,
   rating: Number,
   review: String
 });
 
//schema model
const Fruit = mongoose.model("Fruit", fruitSchema); //convert prularise form fruits,stick to specify sturcture called fruitschema
const fruit = new Fruit({
 name: "Apple",
 rating:8,
 review: "Pink lady apples are kinda sour!"

});

fruit.save(); //save fruits doc save in Fruit collection fruitdb

const personSchema = new mongoose.Schema({
 //collection names
  name:String,
  age: Number
});

//schema model
const Person = mongoose.model("Person", personSchema); //convert prularise form fruits,stick to specify sturcture called fruitschema
const person = new Person(
  
  {
    name:"John",
    age:30
  }

  );

  person.save();

  //
  const plum= new Fruit({
     name: "Plum",
     score:9,
     review:"Normalize blood sugar"
  });

  const avocado= new Fruit({
    name: "Avocado",
    score:10,
    review:"Very healthy fruit with nutty flavour"
 });

 const orange= new Fruit({
  name: "Orange",
  score:7,
  review:"Spanish oranges are sweet"
});



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
    console.log(fruits);
  }

});
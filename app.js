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
 
//schema model
const Fruit = mongoose.model("Fruit", fruitSchema); //convert prularise form fruits,stick to specify sturcture called fruitschema
const fruit = new Fruit({
 name:"Liche",
 rating:9,
 review: "Liche is yummy!"

});

//fruit.save(); //save fruits doc save in Fruit collection fruitdb

const personSchema = new mongoose.Schema({
 //collection names
  name:String,
  age: Number,
  favouriteFruit: fruitSchema
});

//schema model
const Person = mongoose.model("Person", personSchema); //convert prularise form fruits,stick to specify sturcture called fruitschema

const watermelon = new Fruit({
  name:"Watermelon",
  rating:10,
  review: "Monmoy loves watermelon"
});
//watermelon.save();

const mango = new Fruit({
  name:"Mango",
  rating:10,
  review:"Rimty loves Lengra Mango because of it's Great Taste!"
});
//mango.save();

const person = new Person(
  {
    name:"Monmoy",
    age:27,
    favouriteFruit: watermelon
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

Person.updateOne({ name: "Rimty"},{ favouriteFruit: mango},function(error){
     
  if(error){
    console.log(error);
  }
  else{
    console.log("Succesfully updated Rimty's favourite fruit mango");
  }
});

// Fruit.updateOne({ _id:"638fa9653bce36317fc6a88f" },{ favouriteFruit:mango },function(error){
 
//   if(error){
//     console.log(error);
//   }

//   else{
//     console.log("Successfully update liche name in the document");
//   }
// });


// Person.deleteOne({ _id: "638f3096155e3ba110143b86"},function(error){
 
//   if(error){
//     console.log(error);
//   }

//   else{
//     console.log("Successfully deleted extra Rimty in the document");
//   }
// })
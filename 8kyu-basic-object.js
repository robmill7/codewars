/************************************************
In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}
you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")
Task
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."
*****************************************************/




 function animal(obj){
  var newAnimal = {
    name: obj.name,
    legs: obj.legs,
    color: obj.color
  };


return `This ${newAnimal.color} ${newAnimal.name} has ${newAnimal.legs} legs.`
}
  
  



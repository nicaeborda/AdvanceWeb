import _ from "lodash";

const person = {
    firstName : "Shawnica",
    lastName  : "Eborda",
    age     : 21,
    eyeColor  : "Dark Brown"
  };
  
  document.getElementById("datatypes").innerHTML =
  person.firstName + " is " + person.age + " years old.";
import _ from "lodash";

// Create an object:
const person = {
    firstName: "Shawnica",
    lastName : "Eborda",
    id     :  11767452
  };
  
  // Display some data from the object:
  document.getElementById("objects").innerHTML =
  person["firstName"] + " " + person["lastName"] + "  " +"ID NUM:" + "  " + person["id"] ;

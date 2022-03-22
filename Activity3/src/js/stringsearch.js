import _ from "lodash";

let text = "The rain in SPAIN stays mainly in the plain"; 
document.getElementById("stringsearch").innerHTML = text.match(/ain/g);
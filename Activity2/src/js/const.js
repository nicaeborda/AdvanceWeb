import _ from "lodash";

try {
    const PI = 3.141592653589793;
    PI = 3.14;
  }
  catch (err) {
    document.getElementById("const").innerHTML = err;
  }
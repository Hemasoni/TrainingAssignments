console.log("My Document");

var arr = [{"uname": "hemant", "email": "hemasoni@gmail.com"},{"uname": "SahiL", "email": "sahimang@gmail.com"},
{"uname": "samridhI", "email": "samjind@gmail.com"},{"uname": "KritIka", "email": "krigup@gmail.com"} ]

const { v4: uuidv4 } = require('uuid');
const jsConvert = require('js-convert-case');

for (let i =0; i<arr.length; i++)
{
    arr[i].cardid = uuidv4();
  
}

for (let j =0; j<arr.length; j++)
{
    console.log("user id:" + jsConvert.toHeaderCase(arr[j].uname) + ", email:" + jsConvert.toLowerCase(arr[j].email) + ", cardid:" + jsConvert.toUpperCase(arr[j].cardid));
}









const productObj=require("./ProductModule");
var string1 = productObj.getProducts();
console.log(string1);

var string2 = productObj.productsCategory("Electronics");
console.log("Products in Category 'Electronics' : ")
console.log(string2);

var string5 = productObj.productsRange("30000", "800000");
console.log("Products in Range (30000-80000) : ")
console.log(string5);

var string3 = productObj.productsInstock();
console.log("Products in Stock : ")
console.log(string3);

var string4 = productObj.productsOutstock();
console.log("Products Out of Stock : ")
console.log(string4);



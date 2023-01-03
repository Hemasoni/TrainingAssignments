var  productsArray = [
    {Product:  "Guitar",  Company  : "Fender",  Price : 15000, Category: "Musical Instrument", Availability: "Yes"},
    {Product:  "Laptop",  Company  : "HP",  Price : 75000, Category: "Electronics", Availability: "Yes"},
    {Product:  "iPhone",  Company  : "Apple",  Price: 53000, Category: "Electronics", Availability: "No"},
    {Product:  "Speaker",  Company  : "JBL",  Price : 20000, Category: "Electronics", Availability: "Yes"},
    {Product:  "Laptop",  Company  : "Dell",  Price : 1000000, Category: "Electronics", Availability: "No"},
    {Product:  "Headphones",  Company  : "BOAT",  Price : 17000, Category: "Electronics", Availability: "No"},
    {Product:  "Guitar",  Company  : "Yamaha",  Price : 35000, Category: "Musical Instrument", Availability: "No"},
    {Product:  "Laptop",  Company  : "Lenovo",  Price : 50000, Category: "Electronics", Availability: "Yes"},
];

exports.getProducts =  function()
{   
		return productsArray; 
};

exports.productsCategory =  function(cat)
{   

    let arr=[];
    let arr1;
    for(let item of productsArray)
    
    {    
        if(item.Category==cat)
        arr.push(item); 
};

return arr ;
}

exports.productsRange =  function(min,max)
{   

    let arr=[];
    for(let item of productsArray)
    {
        if(item.Price> min && item.Price<max)
        arr.push(item);
    }
		return arr; 
};

exports.productsInstock = function()
{
   let arr=[];
   for(let item of productsArray)
   {
       if(item.Availability == "Yes")
       arr.push(item);
   }
       return arr; 
}

exports.productsOutstock = function()
{
       return productsArray.filter(item=>item.Availability=="No");
}





	
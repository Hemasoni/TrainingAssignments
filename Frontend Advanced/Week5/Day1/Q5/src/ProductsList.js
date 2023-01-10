function ProductsList(props)
{   let  productsArray =  [
  {  sno : 10256, pname:"Speaker", company: "JBL", category: "Electronics"},
  {  sno : 10257, pname:"Phone", company: "Apple", category: "Electronics"},
  {  sno : 10258, pname:"Tennis Racket", company: "HEAD", category: "Sports"},
  {  sno : 10259, pname:"Golf Kit", company: "Cobra", category: "Sports"},
  {  sno : 10260, pname:"Speaker", company: "JBL", BOAT: "Electronics"},
  {  sno : 10261, pname:"Laptop", company: "HP", category: "Electronics"},
  {  sno : 10262, pname:"Phone", company: "Samsung", category: "Electronics"},
  ];
let result;
let x = props.cat;
  if(x=="Electronics" || x=="Sports") 
result = productsArray.filter(item=>item.category==x);
else
result=productsArray;
  
return(
  <>
  {result.map(item=>
  <>
<div>
Sno: {item.sno} <br></br>
    Company: {item.company} <br></br>
    Name: {item.pname}<br></br>
</div>
<br></br>
</>
  )}
  </>
)
}
export default ProductsList;
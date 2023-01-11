import {useState}  from 'react';


function Productdetails() { 

  const[pname, setPname]  = useState("");
  const[quantity, setQuantity]  = useState("");
  const[price, setPrice]  = useState("");
  const [total,  setTotal] =  useState("");
  const [result,  setResult] =  useState("");

  function  nameChange(event)
  {
      setPname(event.target.value);
  }

  function  priceChange(event)
  {
      setPrice(event.target.value);
  }

  function  quantityChange(event)
  {
      setQuantity(event.target.value);
  }
 

  function  buttonClick()
  { 
    setTotal(price*quantity); 
    setResult(pname)
  }
   
  return (
    <>
    <div>
      <h1>Getting Product Details from user</h1>
      <hr/>

    Product Name  :  <input type="text" id="t1" onChange={nameChange}   />
    <br></br>
    Unit Price  :  <input type="number" id="n1" onChange={priceChange}   />
    <br></br>
    Quantity  :  <input type="number" id="n2" onChange={quantityChange}   />
   <br></br>
 
      <input type="button"  value="Show Result"  onClick={buttonClick}  />
      <br></br>
    
      <h3>Product Name: {result}</h3> 
      <h3>Total: {total}</h3>
    </div>
    </>
  );
}

export default Productdetails;
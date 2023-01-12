import axios from 'axios';
import { useState } from 'react';

function Products() { 

    const [productsArray, setProducts] = useState([]);

    function  getProducts_click()
    {
        let url = "https://fakestoreapi.com/products";

        axios.get(url).then( Data => 
        {
        
           setProducts(Data.data);
        });
    }

    let result =  productsArray.map(item =>
        <tr className="table-success">
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td><img src={item.image}/></td>
        </tr>);
  
  return (    
      <> 
        <h3>Getting Product details using AXIOS</h3>
        <hr/>
        <input type="button"  className="btn btn-primary" value="Get Products" onClick={getProducts_click} />
        <br/><br/>
        <table  className="table" border="2" cellpadding="10" cellspacing="0" > 
             <thead>
                <tr className="table-primary" >
                  <th>ID</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Image</th>
              </tr>
              </thead>

              <tbody>
                {result}  
              </tbody>               
            </table> 

      </>   
  );
}

export default Products;
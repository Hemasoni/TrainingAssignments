import { useState } from "react";
import GuitarscrudObj from "./Guitarscrud";

function Guitars() { 

    const [guitarArray, setGuitarArray]  =  useState([]);
    const [gname, setGname] = useState("");
    const [gdetails, setGdetails] = useState("");
    const [price, setPrice] = useState();
    const [discount, setDiscount] = useState();
    const [imgsrc, setImgsrc] = useState("");

    function  getGuitars_click()
    {
       GuitarscrudObj.getData().then( x => 
        {
            setGuitarArray(x.data);
        });
    }

    function  addGuitar_click()
    {
        let guitarObj = {};
        guitarObj.gname = gname; 
        guitarObj.gdetails = gdetails; 
        guitarObj.price = price; 
        guitarObj.discount = discount; 
        guitarObj.imgsrc = imgsrc; 
 

        GuitarscrudObj.addData(guitarObj).then(data => 
        {
          alert("New Guitar details are added to Server");
          getGuitars_click();
        });    
    }

 function deleteGuitar_click(gname)
 {
     GuitarscrudObj.deleteData(gname).then(x=>
        {
            getGuitars_click();
        });
 }

 function  selectGuitar_click(gname)
    {
     GuitarscrudObj.selectData(gname).then(resdata=>
        {
            let x= resdata.data;
            setGname(x.gname)
            setGdetails(x.gdetails);
            setPrice(x.price);
            setDiscount(x.discount);
            setImgsrc(x.imgsrc);
        });
    }

    function  updateGuitar_click()
    {
        let guitarObj = {}; 
        guitarObj.gname =gname; 
        guitarObj.price = price; 
        guitarObj.discount = discount; 
        guitarObj.imgsrc = imgsrc;
        guitarObj.gdetails = gdetails; 

        GuitarscrudObj.updateData( guitarObj ).then(resData => 
        {
          getGuitars_click();
        });
        
    }

        let result = guitarArray.map( item => 
        <>
        <div id="d1">
        <img src={item.imgsrc}></img>
        <br/>
 <input type="button" className="btn btn-primary" value={item.discount + "% off"} /> 
        <p>Rs {item.price}</p>
        <p>{item.gname}</p>
        <p>{item.gdetails}</p>
        <p><span><a href="javascript:void(0);"    onClick={() => deleteGuitar_click(item.gname)}>Delete</a> 
         | <a href="javascript:void(0);"    onClick={() => selectGuitar_click(item.gname)}>Select</a> </span> </p>
        </div>
    </> );

  return (
      <>
          <h3>Guitars CRUD using JSON and AXIOS</h3>
          <hr/>
          <input placeholder="Guitar Name" value={gname} onChange={e => setGname(e.target.value)}  />
          <input placeholder="Details" value={gdetails} onChange={e => setGdetails(e.target.value)}  />
          <input placeholder="Price"  value={price} onChange={e => setPrice(e.target.value)}  />
          <input placeholder="Discount" value={discount}  onChange={e => setDiscount(e.target.value)}  />
          <input placeholder="Image Link" value={imgsrc}  onChange={e => setImgsrc(e.target.value)}  />
        <br/><br/>

          <div className="btn-group" >
          <input type="button" className="btn btn-success" value="Get Guitars" onClick={getGuitars_click} />
          <input type="button" className="btn btn-success" value="Add Guitar" onClick={addGuitar_click} />
          <input type="button" className="btn btn-success" value="Update Guitar" onClick={updateGuitar_click} />
       </div>
       <br/>
       {result}
      </>   
  );
}
export default Guitars;
import React from "react";
import { AiFillStar} from 'react-icons/ai';
function Employee()
{
    let doctorArray = [{src:"https://th.bing.com/th/id/OIP.RPRpZ0mTLLrHDqxz4rhZuwHaHp?pid=ImgDet&rs=1", dname: "Hemant", dept: "Cardiologist", star: 5},
    {src:"https://thumbs.dreamstime.com/b/serious-doctor-isolated-white-22893662.jpg", dname: "Sahil", dept: "Neurosurgeon", star: 4},
    {src:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip", dname: "Samridhi", dept: "Surgeon", star: 4},
    {src:"https://www.pulseheadlines.com/wp-content/uploads/2016/12/jejeje-1.jpg", dname: "Kritika", dept: "Urology", star: 2},
    {src:"https://th.bing.com/th/id/OIP.4cZGh2G7Z4oEPJew8LgpSwHaGe?pid=ImgDet&rs=1", dname: "Puneet", dept: "Eye Specialist", star: 3},
    {src:"https://thumbs.dreamstime.com/z/image-serious-doctor-looking-camera-57169692.jpg", dname: "Vaishnavi", dept: "Psychiatrist", star: 5},]; 

     let result = doctorArray.map(item=>
     <>
     <div id="d1">
        <img src = {item.src} ></img>
        <p style={{"font-size":"20px",}}>{item.dname}</p>
        <p>{item.dept}</p> 
    
       {[...Array(item.star)].map(item=>
        
        <AiFillStar style={{"color":"green", "font-size":"20px"}}></AiFillStar>)}
        <br></br>
       
       <button style={{"font-weight":"bold"}}>Book Appointment</button>
     </div></>)

      
    return (<>
        
        <div>{result}</div>
        </>
);
}
export default Employee;
import { useState } from "react";

function StudCrud() { 

    const  [studArray, setStudArray]  =  useState([]);
    const [sid, setSid] = useState("");
    const [sname, setSname] = useState("");
    const [course, setCourse] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    function  getStud_click()
    {
        let tempArray  = [     
            {  sid : 18105061, sname:"Rishabh", course : "ECE", age:20, email:"Rishabh@gmail.com"  },
            {  sid : 18105062, sname:"Muskan", course : "CSE", age:22, email:"Muskan@gmail.com"  },
            {  sid : 18105063, sname:"Bhupinder", course : "Mechanical", age:23, email:"Bhupinder@gmail.com"  },
            {  sid : 18105064, sname:"Tanish", course : "Civil", age:22, email:"Tanish@gmail.com"  },
            {  sid : 18105065, sname:"Hemant", course : "ECE", age:21, email:"Hemant@gmail.com"  },
            
        ];
        setStudArray( tempArray );
    }
    function  addStud_click()
    {
        let studObj = {};
        studObj.sid= sid;
        studObj.sname= sname;
        studObj.course= course;
        studObj.age= age;
        studObj.email= email;

         let tempArray = [...studArray];
         tempArray.push( studObj );  
         
         setStudArray( tempArray );
    }

    
    function  delete_click(sid)
    {
         let tempArray = [...studArray];

         let index = tempArray.findIndex(item => item.sid == sid);
         tempArray.splice(index, 1);
         
         setStudArray( tempArray );
    }

    function  select_click(sid)
    {
         let studObj = studArray.find(item => item.sid == sid);
         setSid(studObj.sid);
         setSname(studObj.sname);
         setCourse(studObj.course);
         setAge(studObj.age);
         setEmail(studObj.email);
    }

    function  update_click()
    {
        let tempArray = [...studArray];
        let index = tempArray.findIndex(item => item.sid == sid);
        tempArray[index].sname = sname; 
        tempArray[index].course = course; 
        tempArray[index].age = age; 
        tempArray[index].email = email; 

        setStudArray(tempArray); 
    }


    let result = studArray.map( item => 
       
       <tr>
            <td> {item.sid}  </td>  
            <td> {item.sname}  </td>                
            <td> {item.course}  </td>  
            <td> {item.age}  </td>                
            <td> {item.email}  </td>  
            <td>
                <a href="#"  onClick={() => delete_click(item.sid)}>Delete</a>
                |
                <a href="#"  onClick={() => select_click(item.sid)}>Select</a>
            </td>
        </tr>);

  
  return (
      <>
          <h3>Implementing CRUD operations on Students Array</h3>
          <hr/>

          <input placeholder="SID"  value={sid}  onChange={e => setSid(e.target.value)}  />
          <input placeholder="Name"  value={sname} onChange={e => setSname(e.target.value)}  />
          <input placeholder="Course" value={course}  onChange={e => setCourse(e.target.value)}  />
          <input placeholder="Age"  value={age} onChange={e => setAge(e.target.value)}  />
          <input placeholder="Email" value={email}  onChange={e => setEmail(e.target.value)}  />
        <br/><br/>

          <input type="button" value="Get Student Details" onClick={getStud_click} />
          <input type="button" value="Add Student" onClick={addStud_click} />
          <input type="button" value="Update Details" onClick={update_click} />

        <br/><br/>
          <table border="2"  id="t1" cellspacing="0" cellpadding="10">
          <tr>
                <th>SID</th>
                <th>Student Name</th>               
                <th>Course</th>
                <th>Age</th>               
                <th>Email</th>
                <th></th>
             </tr>  
                {result}
            </table>
      </>   
  );
}
export default StudCrud;
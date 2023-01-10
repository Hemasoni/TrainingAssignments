import React from "react";
function Students()
{
    var studentObj = {sid:"18105065", sname: "Hemant", course: "Frontend Advanced", age:22, total:10000};  

     
    return (

        <tr>
            <td>{studentObj.sid}</td>
            <td>{studentObj.sname}</td>
            <td>{studentObj.course}</td>
            <td>{studentObj.age}</td>
            <td>{studentObj.total}</td>
        </tr>

);
}
export default Students;
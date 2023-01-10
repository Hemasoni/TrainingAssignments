import logo from './logo.svg';
import './App.css';
import Students from './Students';

function App() {
  return (
<>
    <h1 align="center">Displaying Student Details</h1>
    <hr/>
<table border="2" cellspacing="0" cellpadding="10">
      <tr>
        <th>Student ID</th>
        <th>Student Name</th>
        <th>Course</th>
        <th>Age</th>
        <th>Salary</th>
      </tr>
    <Students></Students>
    </table>
    </>
  );
}

export default App;

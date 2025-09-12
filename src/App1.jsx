import React from "react";
import "./App.css"

class EmployeeDetails extends React.Component{
  constructor(props) {
   super(props);
  this.state = { Name : '', emp_id: '', emp_email: '' };
  }
  handleInputChange = event => {
    const { name, value } = event.target; 
    this.setState({ [name]: value });
}
render() {
  const { Name, emp_id, emp_email } = this.state;
  const {emp_desg} = this.props;
    return(
       <div className="EmployeeDetails">

        <input type="text" name="Name" value={Name}
          onChange= {this.handleInputChange} placeholder='Enter Name'/>
        < br />

        <input type="text" name="emp_id" value={emp_id}
          onChange= {this.handleInputChange} placeholder='Enter Employee Id'/>
        < br />

        <input type="email" name="emp_email" value={emp_email}
          onChange={ this.handleInputChange }
          placeholder='Enter Employee Email' />
        < br />

        <button onClick={() => alert(`Name: ${Name}\nEmployee ID: ${emp_id}\nEmail: ${emp_email}\nEmp_desg: ${emp_desg}`)}>
          Show Details
        </button>
      </div>
    );
  }
}export default EmployeeDetails;
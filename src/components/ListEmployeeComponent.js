import React, {useState,useEffect} from 'react';
import EmployeeService from "../services/EmployeeService";
//TODO add routing from add button

function ListEmployeeComponent() {

  /*  constructor(props) {
        super(props);
        this.state = {
            employees: []
        }

        this.addEmployee= this.addEmployee.bind(this);
    }*/

    const[employees, setEmployees] = useState([])

    /*addEmployee(){
        this.props.history.push('/add-employee');
    }*/

   /* componentDidMount() {
        EmployeeService.getEmployees().then((res)=> {
            this.setState({employees:res.data})
        });
    }*/

    useEffect(()=>{
        EmployeeService.getEmployees().then((res)=> {
            setEmployees(res.data)
        })
    },[])


        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                {/*<button className="btn btn-primary button" onClick={() => history.push('/add-employee')}> Add Employee</button>*/}
                <div className="row">
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                             <th> Employee First Name</th>
                             <th> Employee Last Name</th>
                             <th> Employee Email Id</th>
                             <th> Actions </th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                            employees.map(
                                employee => <tr key={employee.id}>
                                            <td> {employee.firstName}</td>
                                            <td> {employee.lastName}</td>
                                            <td> {employee.emailId}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        );
}

export default ListEmployeeComponent;



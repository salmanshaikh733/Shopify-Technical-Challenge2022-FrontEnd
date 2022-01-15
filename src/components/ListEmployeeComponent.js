import React, {useState, useEffect} from 'react';
import ItemService from "../services/ItemService";
import {useNavigate} from "react-router";
import TableScrollbar from 'react-table-scrollbar';


function ListEmployeeComponent() {
    let navigate = useNavigate();
    const [dirty,setDirty] = useState(0)
    const [employees, setEmployees] = useState([])

    //on initial mount
    useEffect(() => {
        ItemService.getEmployees().then((res) => {
            setEmployees(res.data)
            employees.sort()
            setDirty(dirty+1)
        })
    }, [])

    useEffect(() => {
        ItemService.getEmployees().then((res) => {
            setEmployees(res.data)
        })
    }, [dirty])

    const deleteEmployee = async event => {
        await ItemService.deleteEmployee(event).then((res)=> {
            setDirty(dirty+1)
        })
    }

    const viewEmployee = event => {
        navigate(`/view-employee/${event}`);
    }

    //navigate to employee page
    const updateEmployee = async event => {
        navigate(`/update-employee/${event}`);
    }

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <button className="btn btn-primary button" onClick={() => navigate("/add-employee")}> Add Employee</button>
            <div className="row">
            </div>
            <div className="row">
                {/*<TableScrollbar rows={10}>*/}
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th> Employee First Name</th>
                        <th> Employee Last Name</th>
                        <th> Employee Email Id</th>
                        <th> Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(
                            employee => <tr key={employee.id}>
                                <td> {employee.firstName}</td>
                                <td> {employee.lastName}</td>
                                <td> {employee.emailId}</td>
                                <td>
                                    <button className="btn btn-info"
                                            onClick={() => updateEmployee(employee.id)}>Update
                                    </button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-danger"
                                            onClick={() => deleteEmployee(employee.id)}>Delete
                                    </button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-dark"
                                            onClick={() => viewEmployee(employee.id)}>View
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                {/* </TableScrollbar>*/}
            </div>

        </div>
    );
}

export default ListEmployeeComponent;



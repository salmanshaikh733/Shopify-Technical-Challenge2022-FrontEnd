import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import EmployeeService from "../services/EmployeeService";
import {useNavigate} from "react-router";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';


function UpdateEmployeeComponent(props) {

    const params = useParams();
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailId, setEmailId] = useState("")
    const [employeeId, setEmployeeId] = useState(params.id)


    //when component mounts
    useEffect(() => {
        EmployeeService.getEmployeeById(employeeId).then((res) =>{
            let employee = res.data;
            setFirstName(employee.firstName)
            setLastName(employee.lastName)
            setEmailId(employee.emailId)
        })
    },[])

    const handleFirstNameChange = event => {
        setFirstName(event.target.value);

    }

    const handleLastNameChange = event => {
        setLastName(event.target.value);

    }

    const handleEmailChange = event => {
        setEmailId(event.target.value);
    }

    const updateEmployee = async event => {
        event.preventDefault();
        let newEmployee = {firstName: firstName, lastName: lastName, emailId: emailId}
        if(firstName !=="" && lastName!=="" && emailId !=="") {
            await EmployeeService.updateEmployee(newEmployee,employeeId);
            toast("Success, Employee Updated");

        } else {
            alert("Do not submit empty boxes");
        }
    }

    return (
        <div>
            <div className="container margin-top">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center"> Update Employee </h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input name = "FirstName" placeholder="First Name" className="form-control"
                                           value={firstName} onChange={handleFirstNameChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input name = "FirstName" placeholder="Last Name" className="form-control"
                                           value={lastName} onChange={handleLastNameChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input name = "FirstName" placeholder="john.doe@gmail.com" className="form-control"
                                           value={emailId} onChange={handleEmailChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={updateEmployee}>Update Employee</button>
                                <button type="submit" className="btn btn-danger cancel-button" onClick={()=>navigate("/employees")}>Cancel</button>
                            </form>
                            <ToastContainer
                                position="bottom-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

UpdateEmployeeComponent.propTypes = {

};

export default UpdateEmployeeComponent;
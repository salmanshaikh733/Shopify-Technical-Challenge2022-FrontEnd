import React, {useState, useEffect} from 'react';
import ItemService from "../services/ItemService";
import {useNavigate} from "react-router";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function CreateEmployeeComponent() {

    let navigate = useNavigate();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailId, setEmailId] = useState("")


    const handleFirstNameChange = event => {
        setFirstName(event.target.value);

    }

    const handleLastNameChange = event => {
        setLastName(event.target.value);

    }

    const handleEmailChange = event => {
        setEmailId(event.target.value);
    }

    const saveEmployee = async event => {
        event.preventDefault();
        let newEmployee = {firstName: firstName, lastName: lastName, emailId: emailId}
        if(firstName !=="" && lastName!=="" && emailId !=="") {
            await ItemService.addNewItem(newEmployee);
            toast("Success, Employee Added");
        } else {
            alert("Do not submit empty boxes");
        }
    }


    return (
        <div>
            <div className="container margin-top">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center"> Add Employee </h3>
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
                                <button type="submit" className="btn btn-primary" onClick={saveEmployee}>Save Employee</button>
                                <button type="submit" className="btn btn-danger cancel-button" onClick={()=>navigate("/items")}>Cancel</button>
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

export default CreateEmployeeComponent;
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ItemService from "../services/ItemService";
import {useNavigate} from "react-router";


function ViewEmployeeComponent(props) {
    let navigate = useNavigate();

    const params = useParams();
    const [employeeId, setEmployeeId] = useState(params.id);
    let [employee, setEmployee] = useState();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailId, setEmailId] = useState("")


    //component did mount
    useEffect(() => {
        ItemService.getEmployeeById(employeeId).then((res) => {
            employee = res.data;
            setFirstName(employee.firstName)
            setLastName(employee.lastName)
            setEmailId(employee.emailId)

        })
    }, [])

    const goBack = event => {
        navigate("/employees");
    }

    return (
        <div>
            <div className="card col-md-6 offset-md-3 margin-top">
                <h3 className="text-center"> View Employee Details </h3>
                <div className="card-body">
                    <div className="row">
                        <label>Employee First Name: {firstName}</label>
                    </div>
                    &nbsp;
                    <div className="row">
                        <label>Employee Last Name: {lastName}</label>
                    </div>
                    &nbsp;
                    <div className="row">
                        <label>Employee Email : {emailId}</label>
                    </div>
                </div>
                <div >
                    <button type="submit" className="btn btn-danger go-back-button" onClick={goBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
}

export default ViewEmployeeComponent;
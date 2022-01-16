import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import ItemService from "../services/ItemService";
import {useNavigate} from "react-router";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';


function UpdateEmployeeComponent(props) {

    const params = useParams();
    let navigate = useNavigate();
    const [itemName, setItemName] = useState("")
    const [itemQuantity, setItemQuantity] = useState("")
    const [itemPrice, setItemPrice] = useState("")
    const [itemId, setItemId] = useState(params.id)


    //when component mounts
    useEffect(() => {
        ItemService.getItemById(itemId).then((res) =>{
            let item = res.data;
            console.log(item)
            setItemName(item.itemName)
            setItemQuantity(item.quantity)
            setItemPrice(item.price)
        })
    },[])

    const handleItemNameChange = event => {
        setItemName(event.target.value);

    }

    const handleItemQuantityChange = event => {
        setItemQuantity(event.target.value);

    }

    const handleItemPriceChange = event => {
        setItemPrice(event.target.value);
    }

    const updateItem = async event => {
        event.preventDefault();
        let newEmployee = {firstName: itemName, lastName: itemQuantity, emailId: itemPrice}
        if(itemName !=="" && itemQuantity!=="" && itemPrice !=="") {
            await ItemService.updateItem(newEmployee,itemId);
            toast("Success, Item Updated");

        } else {
            alert("Do not submit empty boxes");
        }
    }

    return (
        <div>
            <div className="container margin-top">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center"> Update Item </h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Item Name:</label>
                                    <input name = "FirstName" placeholder="Item Name" className="form-control"
                                           value={itemName} onChange={handleItemNameChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Item Quantity:</label>
                                    <input type="number" name = "FirstName" placeholder="Item Quantity" className="form-control"
                                           value={itemQuantity} onChange={handleItemQuantityChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Item Price</label>
                                    <input type="number" name = "FirstName" placeholder="Item Price" className="form-control"
                                           value={itemPrice} onChange={handleItemPriceChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={updateItem}>Update Item</button>
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

UpdateEmployeeComponent.propTypes = {

};

export default UpdateEmployeeComponent;
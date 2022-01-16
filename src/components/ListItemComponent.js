import React, {useState, useEffect} from 'react';
import ItemService from "../services/ItemService";
import {useNavigate} from "react-router";


function ListItemComponent() {
    let navigate = useNavigate();
    const [dirty,setDirty] = useState(0)
    const [items, setItems] = useState([])

    //on initial mount
    useEffect(() => {
        ItemService.getItems().then((res) => {
            setItems(res.data)
            items.sort()
            setDirty(dirty+1)
        })
    }, [])

    useEffect(() => {
        ItemService.getItems().then((res) => {
            setItems(res.data)
        })
    }, [dirty])

    const deleteItem = async event => {
        await ItemService.deleteItem(event).then((res)=> {
            setDirty(dirty+1)
        })
    }

    const viewItem = event => {
        navigate(`/view-item/${event}`);
    }

    //navigate to update-item page
    const updateItem = async event => {
        navigate(`/update-item/${event}`);
    }

    return (
        <div>
            <h2 className="text-center offcanvas-title">Inventory List</h2>
            <button className="btn btn-primary button" onClick={() => navigate("/add-item")}> Add Item </button>
            <button className="btn btn-secondary button cancel-button" onClick={() => navigate("/add-item")}> Export to CSV</button>
            <div className="row">
            </div>
            <div className="row table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-striped table-bordered table-hover table-light " >
                    <thead className="sticky-top">
                    <tr>
                        <th> Item Name</th>
                        <th> Item Quantity</th>
                        <th> Item Price</th>
                        <th> Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.map(
                            item => <tr key={item.id}>
                                <td> {item.itemName}</td>
                                <td> {item.quantity}</td>
                                <td>$ {item.price.toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-info"
                                            onClick={() => updateItem(item.id)}>Update
                                    </button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-danger"
                                            onClick={() => deleteItem(item.id)}>Delete
                                    </button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-outline-dark"
                                            onClick={() => viewItem(item.id)}>View
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ListItemComponent;



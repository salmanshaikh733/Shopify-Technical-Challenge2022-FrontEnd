import React from "react";
import './App.css';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
    return (
        <div>
            <Router>
                    <HeaderComponent/>
                    <div className="container">
                        <Routes>
                            <Route path="/" exact element={<ListEmployeeComponent/>}/>
                            <Route path="/employees" element={<ListEmployeeComponent/>}/>
                            <Route path="/add-employee" element={<CreateEmployeeComponent/>}/>
                        </Routes>
                    </div>
                    <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;

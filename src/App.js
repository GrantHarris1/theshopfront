import React, { useState, useEffect } from 'react'
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Headline from './components/Headline.js';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Checkout from './pages/Checkout';
import Return from './pages/Return';
import Materials from './pages/Materials';
import SignIn from './pages/SignIn';
import axios from 'axios';
import Brands from './pages/Brands';


function App() {
    const [token, setToken] = useState('');
    const [tools, setTools] = useState([]);
    const [brands, setBrands] = useState([]);
    const [materials, setMaterials] = useState([]);
    useEffect(() => {
        // run axios call
        // in then -> set tools

        axios({
            method: 'get',
            url: "https://the_shop_backend-grantharriselectric334935.codeanyapp.com/api/v1/tools",
        }).then(res => setTools(res.data))
    }, [])
    useEffect(() => {
        // run axios call
        // in then -> set tools

        axios({
            method: 'get',
            url: "https://the_shop_backend-grantharriselectric334935.codeanyapp.com/api/v1/brands",
        }).then(res => setBrands(res.data))
    }, [])

    useEffect(() => {
        // run axios call
        // in then -> set tools

        axios({
            method: 'get',
            url: "https://the_shop_backend-grantharriselectric334935.codeanyapp.com/api/v1/materials",
        }).then(res => setMaterials(res.data))
    }, [])

    

    console.log(brands)

    return (
        <Router>
            <Headline token={token} setToken={setToken} />
            <Routes>
                <Route path="/" >
                    <Route path="tools" element={<Tools tools={tools} />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="return" element={<Return />} />
                    <Route path="brands" element={<Brands brands ={brands} />} />
                    <Route path="materials" element={<Materials materials = {materials} />} />
                    <Route path="signIn" element={<SignIn setToken={setToken} />} />
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

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
import Conduit from './components/Conduit'


function App() {
    const [token, setToken] = useState('');
    const [tools, setTools] = useState([]);
    const [brands, setBrands] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [toolsInCart, setToolsInCart] = useState([]);
    
    const [cart, setCart] = useState([]);
    const addToCart = (id) => {
        const found = tools.find(tool => tool.id == id);
        setToolsInCart(prevCart => {
            let oldCart = prevCart;
            if(found){
                return [...prevCart, found]
            } else {
                return oldCart
            }
        
        })
        console.log('added to cart : ', id)
    }

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

    const calculateCart = () =>{
        // get cart from state , create var , map, oject total cart, total price
       let num = cart.length;
    
        return num;

    }

    let cartobj = calculateCart();
     let toolCheckout = (tool_id) => {
        // axios call
        addToCart(parseInt(tool_id)); 
    }
    

    console.log(brands)

    return (
        <Router>
            <Headline token={token} setToken={setToken} toolsInCart={toolsInCart} />
            <Routes>
                <Route path="/" >
                    <Route path="tools" element={<Tools tools={tools} toolsInCart={toolsInCart} toolCheckout={toolCheckout}  />} />
                    <Route path="checkout" element={<Checkout toolsInCart={toolsInCart} getToken={token} />} />
                    <Route path="return" element={<Return />} />
                    <Route path="brands" element={<Brands brands ={brands} />} />
                    <Route path="conduit" element={<Conduit />} />
                    <Route path="materials" element={<Materials materials = {materials} />} />
                    <Route path="signIn" element={<SignIn setToken={setToken} getToken={token} />} />
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

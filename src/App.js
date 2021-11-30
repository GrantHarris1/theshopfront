import React from 'react'
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
// import Product from './components/Product';
// import axios from 'axios'
import Headline from './components/Headline.js';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Checkout from './pages/Checkout';
import Return from './pages/Return';
import Materials from './pages/Materials';

function App() {
    return (
        <Router>
            <Headline />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/return" element={<Return />} />
                <Route path="/materials" element={<Materials />} />


            </Routes>
        </Router>
    );
}

export default App;

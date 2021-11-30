import React,{useState} from 'react'
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

function App() {
    const[token, setToken] = useState('')
    return (
        <Router>
            <Headline token = {token} setToken ={setToken} />
            <Routes>
                <Route path="/" >
                    <Route path="tools" element={<Tools />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="return" element={<Return />} />
                    <Route path="materials" element={<Materials />} />
                    <Route path="signIn" element={<SignIn setToken = {setToken} />} />
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

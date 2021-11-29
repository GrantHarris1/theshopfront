import React, { useState, useEffect } from 'react'
import './App.css';
import Cart from './pages/Cart';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
// import Product from './components/Product';
import axios from 'axios'
import Headline from './components/Headline';
import { Row } from 'react-bootstrap';

function App() {
  return (
    <Router>
    <Headline />
    <Routes>
        {/* <Route path="/home">
<Home />
</Route> */}
        <Route path="/cart">
            {/* <Cart cart={cart} setCart={setCart} cartobj={cartobj} /> */}
        </Route>
        <Route path={["/home", "/",]}>
            <>

                <div className='container'>
                    <h2 className='neonText'>Available Items.</h2>
                    <h4 className='neonText'>Click <i class="bi bi-bag-plus"></i> To Add To <i class="bi bi-cart"></i></h4>
                    <hr />
                    <ul>
                        <Row className="g-4 text-secondary">
                            {/* {data.map((item, index) => <Product key={index} item={item} addToCart={addToCart} cartNum={cart.length} />)} */}
                        </Row>
                    </ul>
                </div>
            </>
        </Route>
    </Routes>
</Router>
  );
}

export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Alerts from './Alerts';
import Products from './Products';
import Dashboard from './Dashboard';
import Staff from './Staff';

// import Settings from './Settings';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/alerts" element={<Alerts />} />
            </Routes>
        </Router>
    );
};

export default App;

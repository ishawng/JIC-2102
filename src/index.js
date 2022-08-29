import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Units from './components/Units';
import UnitPage from './components/UnitPage';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<Units />} />
            <Route path='/unit' element={<UnitPage />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);

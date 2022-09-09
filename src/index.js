import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UnitsListPage from './components/UnitsListPage/UnitsListPage';
import StudyOptionsPage from './components/StudyOptionsPage';
import VocabPage from './components/VocabPage';
import RedLightGreenLightPage from './components/RedLightGreenLightPage';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<UnitsListPage />} />
            <Route path='/study-options-page' element={<StudyOptionsPage />} />
            <Route path='/vocab-page' element={<VocabPage />} />
            <Route path='/red-light-green-light-page' element={<RedLightGreenLightPage />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);

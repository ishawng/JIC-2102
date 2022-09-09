import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Navbar from './components/Navbar/Navbar';
import RedLightGreenLightPage from './components/RedLightGreenLightPage';
import StudyOptionsPage from './components/StudyOptionsPage/StudyOptionsPage';
import TugOfWarPage from './components/TugOfWarPage/TugOfWarPage';
import UnitsListPage from './components/UnitsListPage/UnitsListPage';
import VocabPage from './components/VocabPage';
import { HOME_PATH, RED_LIGHT_GREEN_LIGHT_PATH, STUDY_OPTIONS_PATH, TUG_OF_WAR_PATH, UNITS_LIST_PATH, VOCAB_PATH } from './constants';
import './index.css';

ReactDOM.render(
    <Router>
        <Navbar></Navbar>
        <Routes>
            <Route path={HOME_PATH} element={<Home />} />
            <Route path={UNITS_LIST_PATH} element={<UnitsListPage />} />
            <Route path={STUDY_OPTIONS_PATH} element={<StudyOptionsPage />} />
            <Route path={VOCAB_PATH} element={<VocabPage />} />
            <Route path={RED_LIGHT_GREEN_LIGHT_PATH} element={<RedLightGreenLightPage />} />
            <Route path={TUG_OF_WAR_PATH} element={<TugOfWarPage />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FLASHCARD_STUDY_PATH, RED_LIGHT_GREEN_LIGHT_PATH, TUG_OF_WAR_PATH, UNITS_LIST_PATH } from '../../constants';
import './StudyOptionsPage.css';

function StudyOptionsPage() {
    const location = useLocation();
    const unit = location.state;

    return (
        <div id='study-options-page-container'>
            <h1>{unit.name}</h1>
            <Link to={FLASHCARD_STUDY_PATH} state={unit}>
                <button className='btn btn-primary'>
                    {'Flashcards'}
                </button>
            </Link>

            <Link to={RED_LIGHT_GREEN_LIGHT_PATH} state={unit}>
                <button className='btn btn-primary'>
                    {'Red Light Green Light'}
                </button>
            </Link>
            <Link to={TUG_OF_WAR_PATH} state={unit}>
                <button className='btn btn-primary'>
                    {'Tug of War'}
                </button>
            </Link>
            <Link to={UNITS_LIST_PATH}>
                <button className='btn btn-primary'>
                    {'Back'}
                </button>
            </Link>
        </div>
    );
}

export default StudyOptionsPage;
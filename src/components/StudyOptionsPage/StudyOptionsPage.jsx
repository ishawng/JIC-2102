import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FLASHCARD_STUDY_PATH, RED_LIGHT_GREEN_LIGHT_PATH, TUG_OF_WAR_PATH, UNITS_LIST_PATH } from '../../constants';
import './StudyOptionsPage.css';

function StudyOptionsPage(props) {
    const location = useLocation();
    const unit = location.state;

    return (
        <>
            <h3>{unit.name}</h3>
            <div style={{ alignItems: 'center', display: 'flex' }} className="study-options-page">
                <Link to={UNITS_LIST_PATH}>
                    <button color="#fcb0b6" className="btn btn-primary">
                        {'Return to Units List Page'}
                    </button>
                </Link>
                <Link to={FLASHCARD_STUDY_PATH} state={unit}>
                    <button color="#fcb0b6" className="btn btn-primary">
                        {'Flashcards'}
                    </button>
                </Link>

                <Link to={RED_LIGHT_GREEN_LIGHT_PATH} state={unit}>
                    <button className="btn btn-primary">
                        {'Red Light Green Light Minigame'}
                    </button>
                </Link>
                <Link to={TUG_OF_WAR_PATH} state={unit}>
                    <button className="btn btn-primary">
                        {'Tug of War Minigame'}
                    </button>
                </Link>
            </div>
        </>
    );
}

export default StudyOptionsPage;
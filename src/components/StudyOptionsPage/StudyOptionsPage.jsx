import React from 'react';
import { Link } from 'react-router-dom';
import { RED_LIGHT_GREEN_LIGHT_PATH, TUG_OF_WAR_PATH, UNITS_LIST_PATH, VOCAB_PATH } from '../../constants';

function StudyOptionsPage(props) {
    return (
        <div style={{ alignItems: 'center', display: 'flex' }} className="study-options-page">
            <Link to={UNITS_LIST_PATH}>
                <button color="#fcb0b6" className="btn btn-primary">
                    {'Return to Units List Page'}
                </button>
            </Link>
            <Link to={VOCAB_PATH}>
                <button color="#fcb0b6" className="btn btn-primary">
                    {'Vocab'}
                </button>
            </Link>

            <Link to={RED_LIGHT_GREEN_LIGHT_PATH}>
                <button className="btn btn-primary">
                    {'Red Light Green Light Minigame'}
                </button>
            </Link>
            <Link to={TUG_OF_WAR_PATH}>
                <button className="btn btn-primary">
                    {'Tug of War Minigame'}
                </button>
            </Link>
        </div>
    );
}

export default StudyOptionsPage;
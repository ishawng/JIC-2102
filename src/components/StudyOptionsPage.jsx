import React from 'react';
import { Link } from 'react-router-dom';

function UnitPage(props) {
    return (
        <div className="study-options-page">
            <Link to={'/vocab-page'}>
                <button className="btn btn-primary">
                    {'Vocab'}
                </button>
            </Link>
            <Link to={'/red-light-green-light-page'}>
                <button className="btn btn-primary">
                    {'Red Light Green Light Minigame'}
                </button>
            </Link>
        </div>
    );
}

export default UnitPage;
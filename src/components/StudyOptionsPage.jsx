import React from 'react';
import { Link } from 'react-router-dom';
 

function UnitPage(props) {
    return (
        <div style={{alignItems:'center', display:'flex'}}className="study-options-page">
            <Link to={'/units'}>
                    <button color= "#fcb0b6" className="btn btn-primary">
                        {'Return to Units List Page'}
                    </button>
                </Link>
            <Link to={'/vocab-page'}>
                    <button color= "#fcb0b6" className="btn btn-primary">
                        {'Vocab'}
                    </button>
                </Link>
            
            <Link to={'/red-light-green-light-page'}>
                <button className="btn btn-primary">
                    {'Red Light Green Light Minigame'}
                </button>
            </Link>
            <Link to={'/tug-of-war-page'}>
                <button className="btn btn-primary">
                    {'Tug of War Minigame'}
                </button>
            </Link>
        </div>
    );
}

export default UnitPage;
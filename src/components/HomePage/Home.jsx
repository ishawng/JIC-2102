import React from 'react';
import { Link } from 'react-router-dom';
import { UNITS_LIST_PATH } from '../../constants';
import { Button } from './Button';
import './Home.css';

function Home() {
    return (
        <div className='home-container'>
            {/* image */}
            <h1>KOREAN LANGUAGE GAME</h1>
            <div className="home-play">
                <Link to={UNITS_LIST_PATH}>
                    <Button className='btn' buttonStyle='btn-primary' buttonSize='btn-large'>
                        PLAY
                    </Button>
                </Link>

            </div>
        </div>
    )
}

export default Home;
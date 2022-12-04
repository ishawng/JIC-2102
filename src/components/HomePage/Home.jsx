import React from 'react';
import { Link } from 'react-router-dom';
import { UNITS_LIST_PATH } from '../../constants';
import { Button } from './Button';
import './Home.css';

function Home() {
    return (
        <div className='home-container'>
            <div className='left-home-section'>
                <div className='title'><h1>KOREAN <br/> LANGUAGE <br/> GAME</h1></div>
                <div className='caption'><h5>Whether you're here for class or just for learning the basic Korean language, there's a spot for you in our game.</h5></div>
                <div className="home-play">
                    <Link to={UNITS_LIST_PATH}>
                        <Button className='btn' buttonStyle='btn-primary' buttonSize='btn-large'>
                            PLAY
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="right-home-section">

            </div>
            
        </div>
    )
}

export default Home;
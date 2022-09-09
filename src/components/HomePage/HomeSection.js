import React from 'react';
import { Button } from './Button';
import './HomeSection.css';
import { Link } from 'react-router-dom';


function HomeSection() {
  return (
    <div className='home-container'>
        {/* image */}
        <h1>KOREAN LANGUAGE GAME</h1>
        <div className="home-play">
                <Link to={'/units'}>
                  <Button className='btn' buttonStyle='btn-primary' buttonSize='btn-large'>
                      PLAY
                  </Button>
                </Link>
            
        </div>
    </div>
  )
}

export default HomeSection
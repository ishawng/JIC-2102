import React from 'react';
import './TugOfWarPage.css';

class TugOfWarPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='background'>
                <div id='pregame'>
                    <h1>Tug of War</h1>
                    <button className='btn btn-primary' onClick={startGame}>Start Game</button>
                </div>
                <div id='game'>
                    <h1>Game Started</h1>
                </div>
            </div>
        );
    }
}

function startGame() {
    document.getElementById('pregame').style.display = 'none';
    document.getElementById('game').style.display = 'flex';
}

export default TugOfWarPage;
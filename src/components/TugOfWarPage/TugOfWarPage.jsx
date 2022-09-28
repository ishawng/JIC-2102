import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { shuffleArray } from '../../utils';
import { getVocab } from '../../vocabData';
import TugOfWarImage from './TugOfWar.png';
import { ReactComponent as CircleSvg } from '../../SharedImages/Circle.svg'
import { ReactComponent as FlagSvg } from '../../SharedImages/Flag.svg'
import { ReactComponent as SkullSvg } from '../../SharedImages/Skull.svg'
import './TugOfWarPage.css'

function ScoreView() {
    return (
        <>
            <SkullSvg />
            <CircleSvg />
            <CircleSvg />
            <CircleSvg className='gray' />
            <CircleSvg />
            <CircleSvg />
            <CircleSvg />
            <CircleSvg />
            <FlagSvg />
        </>
    );
}

function TugOfWarPage() {
    const location = useLocation();
    const unit = location.state;
    const [state, setState] = useState({
        questions: getVocab(1),
        currQuestionIndex: 0,
        score: 3,
    });

    function startGame() {
        document.getElementById('pregame').style.display = 'none';
        document.getElementById('postgame').style.display = 'none';
        document.getElementById('win-text').style.display = 'none';
        document.getElementById('lose-text').style.display = 'none';
        const questions = state.questions;
        shuffleArray(questions);
        setState({
            questions: questions,
            currQuestionIndex: 0,
            score: 3,
        });
        for (let i = 0; i < 8; i++) {
            if (i === 3) {
                continue;
            }
            let className = i < 3 ? 'red' : 'green';
            document.getElementById('score').childNodes[i].classList.remove(className);
        }
        document.getElementById('game').style.display = 'flex';
    }

    function submitAnswer() {
        const questions = state.questions;
        const currQuestionIndex = state.currQuestionIndex;
        const currScore = state.score;
        const submission = document.getElementById('answer-input').value;

        if (submission === questions[currQuestionIndex].korean) {
            document.getElementById('answer-input').value = '';

            const newScore = currScore + 1;
            if (newScore === 8) {
                document.getElementById('game').style.display = 'none';
                document.getElementById('postgame').style.display = 'flex';
                document.getElementById('win-text').style.display = 'flex';
            } else if (newScore <= 3) {
                document.getElementById('score').childNodes[newScore - 1].classList.remove('red');
            } else if (newScore > 3) {
                document.getElementById('score').childNodes[newScore].classList.add('green');
            }

            setState({ ...state, currQuestionIndex: (state.currQuestionIndex + 1) % state.questions.length, score: newScore });
        } else {
            document.getElementById('answer-input').value = '';

            const newScore = currScore - 1;
            if (newScore === 0) {
                document.getElementById('game').style.display = 'none';
                document.getElementById('postgame').style.display = 'flex';
                document.getElementById('lose-text').style.display = 'flex';
            } else if (newScore < 3) {
                document.getElementById('score').childNodes[newScore].classList.add('red');
            } else if (newScore >= 3) {
                document.getElementById('score').childNodes[newScore + 1].classList.remove('green');
            }

            setState({ ...state, currQuestionIndex: (state.currQuestionIndex + 1) % state.questions.length, score: newScore });
        }
    }

    console.log(state.questions[state.currQuestionIndex]);

    return (
        <div className='tug-of-war-container'>
            <img className='background' src={TugOfWarImage} alt='Tug of War' />
            <h1>{unit.name}</h1>
            <div id='pregame'>
                <button className='btn btn-primary' onClick={startGame}>Start Game</button>
            </div>
            <div id='game'>
                <div id='score'>
                    <ScoreView />
                </div>
                <div id='question'>
                    <h2>What is <span id="question-text">{state.questions[state.currQuestionIndex].english}</span> in Korean?</h2>
                </div>
                <div id='answer'>
                    <input id='answer-input' type='text' autoComplete='off' />
                    <button className='btn btn-primary' onClick={submitAnswer}>Submit</button>
                </div>
            </div>
            <div id='postgame'>
                <h2 id='win-text'>You win!</h2>
                <h2 id='lose-text'>You lose!</h2>
                <button className='btn btn-primary' onClick={startGame}>Play Again</button>
            </div>
        </div>
    );
}

export default TugOfWarPage;
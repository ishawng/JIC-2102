import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { shuffleArray } from '../../utils';
import { getVocab } from '../../vocabData';
import Score0 from './resources/score0.png';
import Score1 from './resources/score1.png';
import Score2 from './resources/score2.png';
import Score3 from './resources/score3.png';
import Score4 from './resources/score4.png';
import Score5 from './resources/score5.png';
import Score6 from './resources/score6.png';
import Score7 from './resources/score7.png';
import Score8 from './resources/score8.png';
import { ReactComponent as CircleSvg } from '../../SharedImages/Circle.svg'
import { ReactComponent as FlagSvg } from '../../SharedImages/Flag.svg'
import { ReactComponent as SkullSvg } from '../../SharedImages/Skull.svg'
import './TugOfWarPage.css'

const BACKGROUND_IMAGES = [Score0, Score1, Score2, Score3, Score4, Score5, Score6, Score7, Score8];

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
        questions: getVocab(unit.number),
        currQuestionIndex: 0,
        score: 3,
        answerLanguage: 'korean',
    });

    function startGame() {
        const languageRadioButton = document.querySelector('input[name="answer-language"]:checked');
        if (languageRadioButton === null) {
            return;
        }
        const answerLanguage = languageRadioButton.value;

        document.getElementById('pregame').style.display = 'none';
        document.getElementById('postgame').style.display = 'none';
        document.getElementById('win-text').style.display = 'none';
        document.getElementById('lose-text').style.display = 'none';

        const questions = state.questions;
        shuffleArray(questions);

        console.log(answerLanguage);

        setState({
            questions: questions,
            currQuestionIndex: 0,
            score: 3,
            answerLanguage: answerLanguage,
        });

        const scoreChildren = document.getElementById('score').childNodes;
        for (let i = 0; i < scoreChildren.length; i++) {
            scoreChildren[i].classList.remove('red', 'green');
        }

        document.getElementById('score').style.display = 'flex';
        document.getElementById('game').style.display = 'flex';
    }

    function submitAnswer() {
        const questions = state.questions;
        const currQuestionIndex = state.currQuestionIndex;
        const currScore = state.score;
        const answerLanguage = state.answerLanguage;
        const submission = document.getElementById('answer-input').value;

        if (submission === questions[currQuestionIndex][answerLanguage]) {
            document.getElementById('answer-input').value = '';

            const newScore = currScore + 1;
            if (newScore === 8) {
                document.getElementById('score').childNodes[newScore].classList.add('green');
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
                document.getElementById('score').childNodes[newScore].classList.add('red');
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
        <div id='tug-of-war-container'>
            <img className='background' src={BACKGROUND_IMAGES[state.score]} alt='Tug of War' />
            <div id='header'>
                <h1>{unit.name}</h1>
                <div id='score'>
                    <ScoreView />
                </div>
                <div id='pregame'>
                    <div id='settings'>
                        <b>Answer Language:</b>
                        <input type="radio" id="korean" name="answer-language" value="korean"></input>
                        <label for="korean">Korean</label>
                        <input type="radio" id="english" name="answer-language" value="english"></input>
                        <label for="english">English</label>
                    </div>
                    <button className='btn btn-primary' onClick={startGame}>Start Game</button>
                </div>
                <div id='game'>
                    <div id='question'>
                        <h2>What is <span id="question-text">{state.answerLanguage === 'korean' ? state.questions[state.currQuestionIndex].english : state.questions[state.currQuestionIndex].korean}</span> in {state.answerLanguage.charAt(0).toUpperCase() + state.answerLanguage.slice(1)}?</h2>
                    </div>
                    <div id='answer'>
                        <input id='answer-input' type='text' autoComplete='off' onKeyDown={(event) => { if (event.key === 'Enter') submitAnswer(); }} />
                        <button className='btn btn-primary' onClick={submitAnswer}>Submit</button>
                    </div>
                </div>
                <div id='postgame'>
                    <h2 id='win-text'>You win!</h2>
                    <h2 id='lose-text'>You lose!</h2>
                    <button className='btn btn-primary' onClick={startGame}>Play Again</button>
                </div>
            </div>
        </div>
    );
}

export default TugOfWarPage;
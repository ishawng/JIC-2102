import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { shuffleArray } from '../../utils';
import RedLightGreenLightImage from './RedLightGreenLight.png';
import { getVocab } from '../../vocabData'
import { ReactComponent as CircleSvg } from '../../SharedImages/Circle.svg'
import { ReactComponent as SkullSvg } from '../../SharedImages/Skull.svg'
import './RedLightGreenLightPage.css';

function ScoreView() {
    return (
        <>
            <CircleSvg />
            <CircleSvg />
            <SkullSvg />
        </>
    );
}

function RedLightGreenLightPage() {
    const RED = "#B81D13";
    const GREEN = "#008450";
    const QUESTION_RESPONSE_TIME = 5000;
    const location = useLocation();
    const unit = location.state;
    const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
    const [currCorrectScore, setCurrCorrectScore] = useState(-1); // set as -1 so update to 0 in startGame() triggers rerender
    const [currIncorrectScore, setCurrIncorrectScore] = useState(0);
    const questions = getVocab(1);
    var [timeoutId, setTimeoutId] = useState(null);

    function allocateResponseTime(time = QUESTION_RESPONSE_TIME) {
        document.getElementById("light").style.backgroundColor = GREEN;
        clearTimeout(timeoutId); // clear previous time allocation

        const prevScoreTotal = currCorrectScore + currIncorrectScore;
        setTimeoutId(setTimeout(() => {
            document.getElementById("light").style.backgroundColor = RED;
            if (prevScoreTotal === currCorrectScore + currIncorrectScore) {
                    document.getElementById('score-view').childNodes[currIncorrectScore].classList.add('red');
                    setCurrIncorrectScore(currIncorrectScore + 1);
                    if (currIncorrectScore === 2) {
                        document.getElementById("game-div").style.display = "none";
                        document.getElementById("postgame-div").style.display = "flex";
                        document.getElementById("lose-text").style.display = "flex";
                    }
            }
            setCurrQuestionIndex(currQuestionIndex + 1);
        }, time));
    }

    function startGame() {
        shuffleArray(questions);
        setCurrCorrectScore(0);
        setCurrIncorrectScore(0);
        setCurrQuestionIndex(0);
        for (let i = 0; i < 3; i++) {
            document.getElementById("score-view").childNodes[i].classList.remove("red");
        }

        document.getElementById("pregame-div").style.display = "none";
        document.getElementById("postgame-div").style.display = "none";
        document.getElementById("game-div").style.display = "flex";

        allocateResponseTime();
    }

    function submitAnswer() {
        const submission = document.getElementById('answer-input').value;
        document.getElementById('answer-input').value = '';

        if (submission === questions[currQuestionIndex].korean) {
            setCurrCorrectScore(currCorrectScore + 1);
            if (currCorrectScore === 5) {
                document.getElementById("game-div").style.display = "none";
                document.getElementById("postgame-div").style.display = "flex";
                document.getElementById("win-text").style.display = "flex";
            }
        } else {
            document.getElementById('score-view').childNodes[currIncorrectScore].classList.add('red');
            setCurrIncorrectScore(currIncorrectScore + 1);
            if (currIncorrectScore === 2) {
                document.getElementById("game-div").style.display = "none";
                document.getElementById("postgame-div").style.display = "flex";
                document.getElementById("lose-text").style.display = "flex";
            }
        }
        setCurrQuestionIndex((currQuestionIndex + 1) % questions.length);
        allocateResponseTime();

    }

    console.log(questions[currQuestionIndex]);

    return (
        <div className="red-light-green-light-container">
            {console.log("rerender")}
            <img className="background-image" src={RedLightGreenLightImage} alt="Red Light Green Light" />
            <h1>{unit.name}</h1>
            <div id="pregame-div">
                <button className="btn btn-primary" onClick={startGame}>Start Game</button>
            </div>
            <div id="game-div">
                <button id="light"></button>
                <div id="score-view">
                    <ScoreView />
                </div>
                <h4>Question:</h4>
                <h2>What is <span id="question-text">{questions[currQuestionIndex].english}</span> in Korean?</h2>
                <div id='answer'>
                    <input id='answer-input' type='text' autoComplete='off' />
                    <button className='btn btn-primary' onClick={submitAnswer}>Submit</button>
                </div>
            </div>
            <div id='postgame-div'>
                <h2 id='win-text'>You win!</h2>
                <h2 id='lose-text'>You lose!</h2>
                <button className='btn btn-primary' onClick={startGame}>Play Again</button>
            </div>
        </div>
    );

}

export default RedLightGreenLightPage;
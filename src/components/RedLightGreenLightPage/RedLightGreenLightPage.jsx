import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { shuffleArray } from '../../utils';
import RedLightGreenLightImage from './rlglart2.png';
import { getVocab } from '../../vocabData'
import { ReactComponent as CircleSvg } from '../../SharedImages/Circle.svg'
import { ReactComponent as SkullSvg } from '../../SharedImages/Skull.svg'
import './RedLightGreenLightPage.css';
import { useEffect } from 'react';

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
    const EASY_QUESTION_RESPONSE_TIME = 12000;
    const MEDIUM_QUESTION_RESPONSE_TIME = 8000;
    const HARD_QUESTION_RESPONSE_TIME = 5000;
    const RED_LIGHT_PAUSE_TIME = 2000;
    const location = useLocation();
    const unit = location.state;
    const [questionResponseTime, setQuestionResponseTime] = useState(5000);
    const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
    const [currCorrectScore, setCurrCorrectScore] = useState(-1); // set as -1 so update to 1 in startGame() triggers rerender
    const [currIncorrectScore, setCurrIncorrectScore] = useState(0);
    const questions = getVocab(1);

    function startGame() {
        const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
        if (difficulty === "easy") {
            setQuestionResponseTime(EASY_QUESTION_RESPONSE_TIME);
        } else if (difficulty === "medium") {
            setQuestionResponseTime(MEDIUM_QUESTION_RESPONSE_TIME);
        } else {
            setQuestionResponseTime(HARD_QUESTION_RESPONSE_TIME);
        }
        shuffleArray(questions);
        setCurrCorrectScore(1);
        setCurrIncorrectScore(0);
        setCurrQuestionIndex(0);
        for (let i = 0; i < 3; i++) {
            document.getElementById("score-view").childNodes[i].classList.remove("red");
        }

        document.getElementById("pregame-div").style.display = "none";
        document.getElementById("postgame-div").style.display = "none";
        document.getElementById("game-div").style.display = "flex";
    }

    function playAgain() {
        document.getElementById("pregame-div").style.display = "flex";
        document.getElementById("postgame-div").style.display = "none";
    }

    // Hook for repeating questionResponseTime second timer to answer question
    useEffect(() => {
        const prevScoreTotal = currCorrectScore + currIncorrectScore;
        const interval = setInterval(() => {
            if (document.getElementById("game-div").style.display === "flex") { // only execute when game is active
                if (prevScoreTotal === currCorrectScore + currIncorrectScore) {
                    document.getElementById("light").style.backgroundColor = RED;
                    document.getElementById('score-view').childNodes[currIncorrectScore].classList.add('red');
                    document.getElementById("question-div").style.display = "none";
                    setCurrIncorrectScore(currIncorrectScore + 1);
                    if (currIncorrectScore === 2) {
                        document.getElementById("game-div").style.display = "none";
                        document.getElementById("postgame-div").style.display = "flex";
                        document.getElementById("lose-text").style.display = "flex";
                    }
                    // No answer but game not over; pause on red light before next question
                    setTimeout(() => {
                        document.getElementById("light").style.backgroundColor = GREEN;
                        setCurrQuestionIndex((currQuestionIndex + 1) % questions.length);
                        document.getElementById("question-div").style.display = "flex";
                    }, RED_LIGHT_PAUSE_TIME);
                }
            }
        }, questionResponseTime);
        return () => clearInterval(interval);
    }, [currQuestionIndex, currCorrectScore, currIncorrectScore, questionResponseTime, questions.length]); // if one of these changes, then the interval will be reset

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
            setCurrQuestionIndex((currQuestionIndex + 1) % questions.length);
        } else {
            document.getElementById('score-view').childNodes[currIncorrectScore].classList.add('red');
            document.getElementById("light").style.backgroundColor = RED;
            document.getElementById("question-div").style.display = "none";
            setCurrIncorrectScore(currIncorrectScore + 1);
            if (currIncorrectScore === 2) {
                document.getElementById("game-div").style.display = "none";
                document.getElementById("postgame-div").style.display = "flex";
                document.getElementById("lose-text").style.display = "flex";
            }
            // Incorrect answer but game not over; pause on red light before next question
            setTimeout(() => {
                document.getElementById("light").style.backgroundColor = GREEN;
                setCurrQuestionIndex((currQuestionIndex + 1) % questions.length);
                document.getElementById("question-div").style.display = "flex";
            }, RED_LIGHT_PAUSE_TIME);
        }

    }

    console.log(questions[currQuestionIndex]);

    return (
        <div className="rlgl-full-container">
            <div className="empty-div"></div>
            <div className="red-light-green-light-container">
                {/* {console.log("rerender")} */}
                <img className="background-image" src={RedLightGreenLightImage} alt="Red Light Green Light" />
                <div id="header">
                    <h1>{unit.name}</h1>
                    <div id="pregame-div">
                        {/* <button className="btn btn-primary" onClick={() => startGame(EASY_QUESTION_RESPONSE_TIME)}>Easy</button>
                        <button className="btn btn-primary" onClick={() => startGame(MEDIUM_QUESTION_RESPONSE_TIME)}>Medium</button>
                        <button className="btn btn-primary" onClick={() => startGame(HARD_QUESTION_RESPONSE_TIME)}>Hard</button> */}
                        <div id="difficulty-div">
                            <input type="radio" id="easy" name="difficulty" value="easy"></input>
                            <label for="easy">Easy</label>
                            <input type="radio" id="medium" name="difficulty" value="medium"></input>
                            <label for="medium">Medium</label>
                            <input type="radio" id="hard" name="difficulty" value="hard"></input>
                            <label for="hard">Hard</label>
                        </div>
                        <button className="btn btn-primary" onClick={startGame}>Start Game</button>
                    </div>
                    <div id="game-div">
                        <button id="light"></button>
                        <div id="score-view">
                            <ScoreView />
                        </div>
                        <div id="question-div">
                        <h4>Question:</h4>
                            <h2>What is <span id="question-text">{questions[currQuestionIndex].english}</span> in Korean?</h2>
                            <div id='answer'>
                                <input id='answer-input' type='text' autoComplete='off' />
                                <button className='btn btn-primary' onClick={submitAnswer}>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div id='postgame-div'>
                        <h2 id='win-text'>You win!</h2>
                        <h2 id='lose-text'>You lose!</h2>
                        <button className='btn btn-primary' onClick={playAgain}>Play Again</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default RedLightGreenLightPage;
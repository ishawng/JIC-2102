import React, { useState } from 'react';
import { shuffleArray } from '../../utils';
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
    const [nextColor, setNextColor] = useState("#008450");
    const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
    const [currCorrectScore, setCurrCorrectScore] = useState(-1); // set as -1 so update to 0 in startGame() triggers rerender
    const [currIncorrectScore, setCurrIncorrectScore] = useState(-1);
    const questions = getVocab(1);

    function flipLight() {
        document.getElementById("light").style.backgroundColor = nextColor;
        const nextColorUpdate = nextColor === "#008450" ? "#B81D13" : "#008450";
        setNextColor(nextColorUpdate);
    }

    function startGame() {
        shuffleArray(questions);
        setCurrCorrectScore(0);
        setCurrIncorrectScore(0);
        setCurrQuestionIndex(0);
        for (let i = 0; i < 3; i++) {
            document.getElementById("score-view").childNodes[i].classList.remove("red");
        }

        document.getElementById("start-game-button").style.visibility = "hidden";
        document.getElementById("postgame-div").style.visibility = "hidden";
        document.getElementById("question-div").style.visibility = "visible";
    }

    function submitAnswer() {
        const submission = document.getElementById('answer-input').value;
        document.getElementById('answer-input').value = '';

        if (submission === questions[currQuestionIndex].korean) {
            // console.log("CORRECT");

            setCurrCorrectScore(currCorrectScore + 1);
        } else {
            // console.log("Question: " + questions[currQuestionIndex].english + "; Answer: " + questions[currQuestionIndex].korean)
            // console.log("your incorrect answer: " + submission);

            document.getElementById('score-view').childNodes[currIncorrectScore].classList.add('red');
            setCurrIncorrectScore(currIncorrectScore + 1);
            if (currIncorrectScore === 2) {
                document.getElementById("question-div").style.visibility = "hidden";
                document.getElementById("postgame-div").style.visibility = "visible";
                document.getElementById("lose-text").style.visibility = "visible";
            }
        }
        setCurrQuestionIndex((currQuestionIndex + 1) % questions.length);

    }

    console.log(questions[currQuestionIndex]);

    return (
        <div className="Background">
            {console.log("rerender")}
            <button id="light"></button>
            <br></br>
            <button id="start-game-button" onClick={startGame}>Start Game</button>
            <div id="question-div">
                <div id="score-view">
                    <ScoreView />
                </div>
                <h4>Question:</h4>
                <h2>What is <span id="question-text">{questions[currQuestionIndex].english}</span> in Korean?</h2>
                <h4>Answer:</h4>
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
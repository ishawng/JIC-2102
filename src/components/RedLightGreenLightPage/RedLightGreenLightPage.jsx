import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { shuffleArray } from '../../utils';
import './RedLightGreenLightPage.css';

function RedLightGreenLightPage() {
    const [nextColor, setNextColor] = useState("#008450");
    const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
    // const [answerInput, setAnswerInput] = useState('');
    const [questionsList, setQuestionsList] = useState([
        ["What is 1 + 1?", "2"],
        ["What is your favorite language?", "Korean"],
        ["How are you doing?", "good"]
    ]);

    function flipLight() {
        ReactDOM.findDOMNode(document.getElementById("light")).style.backgroundColor = nextColor;
        const nextColorUpdate = nextColor === "#008450" ? "#B81D13" : "#008450";
        setNextColor(nextColorUpdate);
    }

    function startGame() {
        console.log("startGame called")
        shuffleArray(questionsList);

        ReactDOM.findDOMNode(document.getElementById("question-div")).style.visibility = "visible";
        ReactDOM.findDOMNode(document.getElementById("start-game-button")).style.visibility = "hidden";
    }

    function submitAnswer() {
        const submission = document.getElementById('answer-input').value;
        document.getElementById('answer-input').value = '';
        console.log(submission);

        if (submission === questionsList[currQuestionIndex]) {

        } else {

        }


    }

    return (
        <div className="Background">
            <button id="light"></button>
            <br></br>
            <button id="start-game-button" onClick={startGame}>Start Game</button>
            <div id="question-div">
                <h4>Question:</h4>
                <p>{questionsList[currQuestionIndex][0]}</p>
                <h4>Answer:</h4>
                <div id='answer'>
                    <input id='answer-input' type='text' autoComplete='off' />
                    <button className='btn btn-primary' onClick={submitAnswer}>Submit</button>
                </div>
            </div>
        </div>
    );

}

export default RedLightGreenLightPage;
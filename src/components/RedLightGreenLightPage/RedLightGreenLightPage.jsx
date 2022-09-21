import React from 'react';
import ReactDOM from 'react-dom';
import './RedLightGreenLightPage.css';

function RedLightGreenLightPage(props) {
    let nextColor = "#008450";
    const questionsList = [
        ["What is 1 + 1?", "2"],
        ["What is your favorite language?", "Korean"],
        ["How are you doing?", "good"]
    ]
    let currQuestionIndex = 0
    let answerInput = ""

    function flipLight() {
        let element = document.getElementById('light');
        ReactDOM.findDOMNode(element).style.backgroundColor = nextColor;
        nextColor = nextColor === "#008450" ? "#B81D13" : "#008450";
    }

    function startGame() {
        /*
            credit to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
            for shuffleArray function
        */
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(questionsList)
        console.log(questionsList)
    }

    function handleChange(event) {
        answerInput = event.target.value
        console.log(answerInput)
    }

    function handleSubmit(event) {
        alert("The following answer was submitted: " + answerInput)
        event.preventDefault()
    }

    return (
        <div className="RedLightGreenLightPage">
            <div className="PageHeader">
                <h3 className="PageHeaderText">
                    Red Light Green Light Minigame
                </h3>
            </div>
            <button id="light" onClick={flipLight}></button>
            <button onClick={startGame}>Start Game</button>
            <div className="Question">
                <h4>Question:</h4>
                <p>{questionsList[currQuestionIndex][0]}</p>
                <h4>Answer:</h4>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={answerInput} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default RedLightGreenLightPage;
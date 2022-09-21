import React from 'react';
import ReactDOM from 'react-dom';
import './RedLightGreenLightPage.css';

class RedLightGreenLightPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextColor: "#008450",
            currQuestionIndex: 0,
            answerInput: "",
            questionsList: [
                ["What is 1 + 1?", "2"],
                ["What is your favorite language?", "Korean"],
                ["How are you doing?", "good"]
            ]
        };
        this.flipLight = this.flipLight.bind(this);
        this.startGame = this.startGame.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    flipLight() {
        const element = document.getElementById('light');
        ReactDOM.findDOMNode(element).style.backgroundColor = this.state.nextColor;
        const nextColorUpdate = this.state.nextColor === "#008450" ? "#B81D13" : "#008450";
        this.setState({nextColor: nextColorUpdate});
    }

    startGame() {
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
        shuffleArray(this.state.questionsList);
        console.log(this.state.questionsList);
    }

    handleChange(event) {
        this.setState({answerInput: event.target.value});
        console.log(this.state.answerInput);
    }

    handleSubmit(event) {
        alert("The following answer was submitted: " + this.state.answerInput);
        event.preventDefault();
    }

    render() {
        return (
            <div className="RedLightGreenLightPage">
                <div className="PageHeader">
                    <h3 className="PageHeaderText">
                        Red Light Green Light Minigame
                    </h3>
                </div>
                <button id="light" onClick={this.flipLight}></button>
                <button onClick={this.startGame}>Start Game</button>
                <div className="Question">
                    <h4>Question:</h4>
                    <p>{this.state.questionsList[this.state.currQuestionIndex][0]}</p>
                    <h4>Answer:</h4>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" value={this.state.answerInput} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default RedLightGreenLightPage;
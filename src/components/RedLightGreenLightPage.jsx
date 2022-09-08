import React from 'react';
import ReactDOM from 'react-dom';

function RedLightGreenLightPage(props) {
    let nextColor = "#008450";

    function flipLight() {
        let element = document.getElementById('light');
        ReactDOM.findDOMNode(element).style.backgroundColor = nextColor;
        nextColor = nextColor === "#008450" ? "#B81D13" : "#008450";
    }

    return (
        <div className="RedLightGreenLightPage">
            <div className="PageHeader">
                <h3 className="PageHeaderText">
                    Red Light Green Light Minigame
                </h3>
            </div>
            <button id="light" onClick={flipLight}></button>
        </div>
    );
}

export default RedLightGreenLightPage;
import React from 'react';
import { Link } from 'react-router-dom';

class UnitButton extends React.Component {
    render() {
        return (
            <div className="unit-button" >
                <Link to={'/study-options-page'}>
                    <button className="btn btn-primary">
                        {this.props.text}
                    </button>
                </Link>
            </div>
        );
    }
}

function Units(props) {
    return (
        <div className="units">
            <UnitButton text={"Unit 1"} />
            <UnitButton text={"Unit 2"} />
        </div>
    );
}

export default Units;

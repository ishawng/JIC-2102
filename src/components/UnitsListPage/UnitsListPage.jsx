import React from 'react';
import { Link } from 'react-router-dom';
import './UnitsListPage.css';

class UnitButton extends React.Component {
    render() {
        return (
            <div>
                <Link to={'/study-options-page'}>
                    <button className="unit-button">
                        {this.props.text}
                    </button>
                </Link>
            </div>
        );
    }
}

function UnitsListPage(props) {
    return (
        <div className="units">
            <h2>Units</h2>
            <UnitButton text={"Unit 1 이름이 참 예뻐요."} />
            <UnitButton text={"Unit 2 남자친구가 있어요?"} />
            <UnitButton text={"Unit 3 같이 저녁을 먹을까요?"} />
            <UnitButton text={"Unit 4 마트에 가요."} />
            <UnitButton text={"Unit 5 눈꽃빙수를 먹어 볼게요."} />
            <UnitButton text={"Unit 6 주말에 같이 놀러 갈래요?"} />
        </div>
    );
}

export default UnitsListPage;

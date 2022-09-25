import React from 'react';
import { Link } from 'react-router-dom';
import { STUDY_OPTIONS_PATH } from '../../constants';
import { getUnit } from '../../unitData';
import './UnitsListPage.css';

function UnitButton(props) {
    const unit = props.unit;

    return (
        <div>
            <Link to={STUDY_OPTIONS_PATH} state={unit}>
                <button className="unit-button">
                    {unit.name}
                </button>
            </Link>
        </div>
    );
}

function UnitsListPage() {
    return (
        <>
            <div className="header">
                <h3 className="header-text">
                    Units
                </h3>
            </div>
            <div className="units">
                <UnitButton unit={getUnit(1)} />
                <UnitButton unit={getUnit(2)} />
                <UnitButton unit={getUnit(3)} />
                <UnitButton unit={getUnit(4)} />
                <UnitButton unit={getUnit(5)} />
                <UnitButton unit={getUnit(6)} />
            </div>
        </>
    );
}

export default UnitsListPage;

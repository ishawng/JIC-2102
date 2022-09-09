import React from 'react';
import { Link } from 'react-router-dom';
import { UNITS_LIST_PATH } from '../../constants';
import './Button.css';

const STYLES = ['btn-primary', 'btn-outline'];

const SIZES = ['btn-med', 'btn-large'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to={UNITS_LIST_PATH} className='btn-web'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}
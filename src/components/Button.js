import React from "react";
import PropTypes from 'prop-types';
import Arrow from '../components/assets/arrow-white.svg'

function Button(props) {
    return(
        <button className={props.className} >
            <p className="button-text">{props.label}</p>
            <img src={Arrow} className={props.arrowClass}></img>
        </button>
    )
}

export default Button;

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    arrowClass: PropTypes.string
};
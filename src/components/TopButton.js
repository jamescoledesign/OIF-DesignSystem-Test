import React from "react";
import PropTypes from 'prop-types';
import Chevron from '../components/assets/chevron.svg'

export function TopButton() {
    return(
        <button className="top-button" >
            <img src={Chevron} className="chevron-icon"></img>
        </button>
    )
}


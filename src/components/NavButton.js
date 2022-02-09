import React from "react";
import PropTypes from 'prop-types';
import Arrow from '../components/assets/arrow-white.svg'

function NavButton(props) {
    return(
        <button className="nav-button" >
            {props.label}
        </button>
    )
}

export default NavButton;

NavButton.propTypes = {
    label: PropTypes.string
};
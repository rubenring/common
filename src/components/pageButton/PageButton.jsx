import React from 'react';
import PropTypes from 'prop-types';
import './pagebutton.scss';
import { LasteSpinner } from '../spinners/lastespinner';

const PageButton = ({childClass, onClick, text, name, children, ariaLabel, disabled, id, tittel, visLastespinner}) => {

    return (
        <button
            id={id}
            disabled={disabled}
            name={name} 
            className={`hovedknapp ${disabled ? 'hovedknapp-disabled' : ''} ${ childClass ? childClass : ''}`} 
            onClick={onClick} 
            aria-label={ariaLabel}
            title={tittel}
        >
            {children && !visLastespinner ? children : null}
            <span className='hovedknapp-tekst'>
                { visLastespinner ? <LasteSpinner /> : text}
            </span> 
        </button>
    );
};

PageButton.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    childClass: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node,
    name: PropTypes.string,
    ariaLabel: PropTypes.string,
    disabled: PropTypes.bool,
    tittel: PropTypes.string,
    visLastespinner: PropTypes.bool
};

export default PageButton;
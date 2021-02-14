import React from 'react'
import './styles.scss';

const GradientButton = ({legend, handleClick, type='button'}) => {

return <input type={type} className="gradient-button" value={legend} onClick={handleClick} />
}

export default GradientButton;
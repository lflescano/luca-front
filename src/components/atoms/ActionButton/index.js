import React from 'react'
import './styles.scss';

const ActionButton = ({legend, handleClick, type='button'}) => {

return <input type={type} className="action-button" value={legend} onClick={handleClick} />
}

export default ActionButton;
import React, { useState, useEffect } from 'react'
import './styles.scss';
import { isMobile } from '../../../helpers/Mobile';
import { useHistory } from 'react-router-dom';
import useRequest from '../../../hooks/useRequest';

import { AuthService } from '../../../services/AuthService';

const Burger = ({ open, setOpen }) => {

    const history = useHistory();

    const {
        submitted, success, message,
        beforeSubmit, afterSubmit, showSuccess, showError,
        dealWithError
    } = useRequest();

    return <div className={open ? 'burger open' : 'burger close'} onClick={() => setOpen(!open)}>
        <div className="burger-item" />
        <div className="burger-item" />
        <div className="burger-item" />
    </div>
}

export default Burger;
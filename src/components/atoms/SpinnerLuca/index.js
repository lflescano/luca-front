import React, { useState } from "react";

import useRequest from 'hooks/useRequest';

import Spinner from 'react-bootstrap/Spinner';

import "./styles.scss";

const SpinnerLuca = ({ children }) => {
    const {
        loadingSpinner
    } = useRequest();
    
    return <div id="spinner-container" className={loadingSpinner ? 'spinner-container show' : 'spinner-container hide'}>
        <Spinner animation="border" role="status">
        </Spinner>
    </div>
}

export default SpinnerLuca;















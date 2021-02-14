import React from 'react'
import './styles.scss';
import { isMobile } from '../../../helpers/Mobile';
import { useHistory } from 'react-router-dom';
import useRequest from '../../../hooks/useRequest';

import { AuthService } from '../../../services/AuthService';
import Icon from "../Icon";

const Box = ({ header = 'Titulo', body = 'Cuerpo' }) => {
    return <div className="box">
                <div className="box-header">
                    {header}
                </div>
                <div className="box-body">
                    {body}
                </div>
    </div>
}

export default Box;
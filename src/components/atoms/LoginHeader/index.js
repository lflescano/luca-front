import React from 'react'
import logo from '../../../assets/images/logo.png';
import './styles.scss';
import { isMobile } from '../../../helpers/Mobile';
import { Link } from 'react-router-dom';

const LoginHeader = () => {

return <div className="login-header-container">
   <div className="login-header-logo">
        <Link to="/home">
            <svg width="102" height="32" viewBox="0 0 102 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.4286 25.4271H6.14089V0.35733H0V31.1719H22.4286V25.4271Z" fill="#3843D0" />
                <path d="M44.2707 9.8438H38.548V21.5753C38.548 24.9869 36.6551 26.3736 34.19 26.3736C31.7028 26.3736 29.8319 24.9869 29.8319 21.5753V9.8438H24.0872V22.0816C24.0872 28.8167 28.8415 31.7221 34.19 31.7221C39.5165 31.7221 44.2707 28.8167 44.2707 22.0816V9.8438Z" fill="#3843D0" />
                <path d="M58.2738 9.27153C51.4725 9.27153 46.9164 14.0478 46.9164 20.4968C46.9164 26.9679 51.4725 31.7221 58.2738 31.7221C61.8394 31.7221 64.8328 30.2914 66.8358 27.7162L62.7419 24.2166C61.5313 25.5372 59.9465 26.3736 58.0977 26.3736C55.1263 26.3736 52.7712 24.0625 52.7712 20.4968C52.7712 16.9532 55.1483 14.6201 58.1197 14.6201C59.9906 14.6201 61.3772 15.3684 62.6758 16.7551L66.8138 13.2994C64.8549 10.7242 61.8394 9.27153 58.2738 9.27153Z" fill="#3843D0" />
                <path d="M89.5215 9.8438H83.9088V12.1989C82.5001 10.4601 80.4532 9.27153 77.5258 9.27153C71.649 9.27153 67.2029 14.0918 67.2029 20.4968C67.2029 26.9018 71.649 31.7221 77.5258 31.7221C80.4532 31.7221 82.5222 30.5336 83.9088 28.8167V31.1719H89.5215V9.8438ZM78.5823 14.6201C81.8618 14.6201 84.0849 17.1292 84.0849 20.4968C84.0849 23.8644 81.8618 26.3736 78.5823 26.3736C75.2147 26.3736 73.0797 23.7544 73.0797 20.4968C73.0797 17.2393 75.2147 14.6201 78.5823 14.6201Z" fill="#3843D0" />
                <path d="M96.7613 23.182C94.4722 23.182 92.4692 25.141 92.4692 27.43C92.4692 29.7411 94.4722 31.7221 96.7613 31.7221C99.0283 31.7221 101.009 29.7411 101.009 27.43C101.009 25.141 99.0283 23.182 96.7613 23.182Z" fill="#F96654" />
            </svg>
        </Link>
   </div>
   {!isMobile &&
   <div className="login-header-title">
       <h1 className="login-header-title-text">Oficina Virtual</h1>
        <div className="login-header-title-line"></div>
   </div>
    }
    {!isMobile && 
    <div className="login-header-contact-info">
        <div className="login-header-contact-info-item"> 
            <div className="login-header-contact-info-item-title"> ASISTENCIA TÉCNICA</div>
            <div className="login-header-contact-info-item-number"> 0800 999 2272</div>
        </div>
        <div className="login-header-contact-info-item"> 
            <div className="login-header-contact-info-item-title">GESTIÓN COMERCIAL</div>
            <div className="login-header-contact-info-item-number"> 0810 999 2272</div>
        </div>
    </div>
    }
</div>
}

export default LoginHeader;
import React from 'react'
import casa from '../../../assets/images/casa.png';
import './styles.scss';

const FooterMobile = () => {

return <div className="footer-mobile-container">
        <div className="footer-mobile-contact-info">
            <div className="footer-mobile-contact-info-item"> 
                <div className="footer-mobile-contact-info-item-title"> ASISTENCIA TÉCNICA</div>
                <div className="footer-mobile-contact-info-item-number"> 0800 999 2272</div>

            </div>
            <div className="footer-mobile-contact-info-item footer-mobile-logo">
                <img src={casa} alt="Casa Logo" />
            </div>
            <div className="footer-mobile-contact-info-item"> 
                <div className="footer-mobile-contact-info-item-title">GESTIÓN COMERCIAL</div>
                <div className="footer-mobile-contact-info-item-number"> 0810 999 2272</div>
            </div>
        </div>
</div>
}

export default FooterMobile;
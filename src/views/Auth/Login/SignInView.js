import React, {useState} from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { AuthService } from 'services/AuthService';
import useRequest from 'hooks/useRequest';
import { isMobile } from 'helpers/Mobile';

import LoginHeader from 'components/atoms/LoginHeader';
import InputText from 'components/atoms/InputText';
import InputCheckbox from 'components/atoms/InputCheckbox';
import ActionButton from 'components/atoms/ActionButton';
import GradientButton from 'components/atoms/GradientButton';
import Icon from 'components/atoms/Icon';


import './styles.scss';

const SignInView = (props) => {
    const history = useHistory();

    const {
        submitted, success, message, errors,
        beforeSubmit, afterSubmit, showError,
        dealWithError
    } = useRequest();

    const [email, setEmail] = useState("");
    const [clave, setClave] = useState("");
    const [showPass, setshowPass] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        beforeSubmit();
        AuthService.login(email, clave)
            .then(data => {
                AuthService.loadUser().then(data => {
                    afterSubmit();
                    // The event in App.js push to /home
                    history.push('/home');
                    console.log('login');
                }).catch(error => {
                    showError('El usuario no existe');
                });
            }).catch((error) => {
                console.log(error.status);
                dealWithError(error, '');
                console.log(errors);
            });
    }

    const registrar = (e) => {
        e.preventDefault();
        history.push('/registrar');
    }

    const pedirPassword = (e) => {
        e.preventDefault();
        history.push('/olvide_password');
    }

    return (
        <div className="signin-container">
            {!isMobile && <LoginHeader></LoginHeader>}

            <div className="signin-content">
                <form  className="signin-form" onSubmit={handleSubmit}>
                    <h1 className="signin-title">Iniciar Sesión</h1>
                    <div className="signin-input-group">
                        <div className="signin-input-icon-container">
                            <Icon name="email" width={26} height={17} fill={isMobile ? '#ffffff' : '#1F3BA3'} />
                        </div>
                        <div className="signin-input-container">
                            <InputText id="email" label="" placeholder="Ingresá tu email"
                                handleChange={(event) => { setEmail(event.target.value) }} error={errors.email}/>
                        </div>
                    </div>
                    <div className="signin-input-group">
                        <div className="signin-input-icon-container">
                            <Icon name="lock"width={26} height={17} fill={isMobile ? '#ffffff' : '#1F3BA3'}  />
                        </div>
                        <div className="signin-input-container">
                            <InputText id="password" label="" placeholder="Ingresá tu contraseña"
                                handleChange={(event) => {setClave(event.target.value)}}
                                type={showPass ? 'text' : 'password'} error={errors.password}/>
                            <div className={showPass ? 'register-eye show' : 'register-eye hide'} onClick={() => { setshowPass(false) }}>
                                <Icon name="eye" width={26} height={17} fill={isMobile ? '#ffffff' : '#1F3BA3'} />
                            </div>
                            <div className={showPass ? 'register-eye-closed hide' : 'register-eye show'} onClick={() => { setshowPass(true) }}>
                                <Icon name="eye-closed" width={26} height={17} fill={isMobile ? '#ffffff' : '#1F3BA3'} />
                            </div>
                        </div>
                    </div>
                    { (success === false && message) &&
                        <p className="error-messages">{message}</p>
                    }
                    <div  className="signin-button">
                        <GradientButton legend={'INGRESAR'} disabled={submitted}
                            handleClick={handleSubmit} type={'submit'} />
                    </div>
                    <div className="signin-olvide">
                        <a onClick={pedirPassword}>Olvidé mi contraseña</a>
                    </div>
                    <div className="signin-bottom-content">
                        <p className="signin-bottom-legend">¿Todavía no te registraste?</p>
                        <div className="signin-bottom-button">
                            <ActionButton legend="REGISTRARME" handleClick={registrar}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default withTranslation()(SignInView);
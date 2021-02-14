import React, { useState } from "react";

import { isMobile } from 'helpers/Mobile';

import useRequest from 'hooks/useRequest';
import { useHistory } from 'react-router-dom';

import MainLayout from 'components/organisms/MainLayout';

import "./styles.scss";
import ActionButton from "components/atoms/ActionButton";
import InputText from "components/atoms/InputText";
import CancelButton from "components/atoms/CancelButton";

const CommunityForm = ({ handleSubmit, title, setTitle, description, setDescription, message,  errors = {} }) => {
    const history = useHistory();
    
    return <MainLayout showHeader={!isMobile}>
        <div className="community-form-header">
            <h1>Haz una pregunta</h1>
            {!isMobile && <ActionButton legend="CANCELAR" className="button-cancel" handleClick={() => history.push("/comunidad")}></ActionButton>}
            {isMobile && <CancelButton url="/comunidad"></CancelButton>}
        </div>
        <div className="community-form-content">
            {!message && <form className="community-form" onSubmit={handleSubmit}>
                <InputText id="title" label="Título de la publicación" type="text" placeholder="Escribe tu título aquí"
                    handleChange={(event) => { setTitle(event.target.value) }} error={errors.title} />
                <InputText id="description" as="textarea" label="Publicación" rows="5" placeholder="Escribe tu publicación aquí"
                    handleChange={(event) => { setDescription(event.target.value) }} error={errors.description} />
                <ActionButton legend="PUBLICAR" className="community-form-button-submit" handleClick={handleSubmit}></ActionButton>
            </form>}
            {message && <h3>{message}</h3>}
        </div>
    </MainLayout>
}

export default CommunityForm;






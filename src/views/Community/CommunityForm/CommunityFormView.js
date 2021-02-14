import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { QuestionService } from 'services/QuestionService';
import useRequest from 'hooks/useRequest';

import { isMobile } from 'helpers/Mobile';

import CommunityForm from 'components/templates/CommunityForm';
import Question from "models/Question";

import './styles.scss';

const CommunityFormView = (props) => {
    const {
        beforeSubmit, afterSubmit, errors, message,
        showSuccess, setMessage, 
        dealWithError
    } = useRequest();

    const history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        beforeSubmit();
        const data = {
            title: title,
            description: description
        }
        QuestionService.createQuestion(data)
            .then(data => {
                showSuccess('¡Se ha publicado tu pregunta!');
            }).catch((error) => {
                console.log('Muere');
                dealWithError(error, '');
                console.log(errors);
        });
    }

    return <CommunityForm handleSubmit={handleSubmit} message={message} title={title} setTitle={setTitle} description={description} setDescription={setDescription} errors={errors}></CommunityForm>
}

export default withTranslation()(CommunityFormView);
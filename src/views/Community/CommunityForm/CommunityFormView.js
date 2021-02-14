import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { AuthService } from 'services/AuthService';
import { QuestionService } from 'services/QuestionService';
import useRequest from 'hooks/useRequest';

import { isMobile } from 'helpers/Mobile';

import CommunityList from 'components/templates/CommunityList';
import Question from "models/Question";

import './styles.scss';

const CommunityFormView = (props) => {
    const {
        beforeSubmit, afterSubmit,
        dealWithError
    } = useRequest();

    const [questions, setQuestions] = useState();
    const [hasMore, setHasMore] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        beforeSubmit();
        QuestionService.questions(currentPage).then(data => {
            console.log(data.data);
            setCurrentPage(data.current_page);
            setLastPage(data.last_page);
            setCurrentPage(currentPage + 1);

            setQuestions(data.data.map(i => new Question(i)));
            afterSubmit();
        }).catch((error) => {
            afterSubmit();
            dealWithError(error, '');
        });
    }, []);

    const fetchMoreData = () => {
        console.log('fetchMoreData');
        console.log('currentPage');
        console.log(currentPage);
        console.log('lastPage');
        console.log(lastPage);

        setTimeout(() => {
            if (currentPage > lastPage) {
                setHasMore(false);
                return;
            }
        }, 1500);

        setCurrentPage(currentPage + 1);

        setTimeout(() => {
            beforeSubmit();
            QuestionService.questions(currentPage, 5).then(data => {
                console.log(data.data);

                setQuestions(questions.concat(data.data.map(i => new Question(i))));
                afterSubmit();
            }).catch((error) => {
                afterSubmit();
                dealWithError(error, '');
            });
        }, 1500);
    };

    return <CommunityList elements={questions} hasMore={hasMore} fetchMoreData={fetchMoreData}></CommunityList>
}

export default withTranslation()(CommunityFormView);
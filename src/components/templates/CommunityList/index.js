import React, { useState } from "react";

import { isMobile } from 'helpers/Mobile';

import useRequest from 'hooks/useRequest';
import { useHistory } from 'react-router-dom';

import MainLayout from 'components/organisms/MainLayout';
import Tabs from "components/organisms/Tabs";

import "./styles.scss";
import ActionButton from "components/atoms/ActionButton";
import CreateButton from "components/atoms/CreateButton";

const CommunityList = ({ elements, hasMore, fetchMoreData }) => {
    const {
        loadingSpinner
    } = useRequest();

    const history = useHistory();

    return <MainLayout>
        <div className="community-list-header">
            <h1>Comunidad Luca</h1>
            {!isMobile && <ActionButton legend="NUEVA PREGUNTA" handleClick={() => history.push("/crear_pregunta")}></ActionButton>}
            {isMobile && <CreateButton url="/crear_pregunta"></CreateButton>}
        </div>
        <Tabs elements={elements} hasMore={hasMore} fetchMoreData={fetchMoreData}></Tabs>
    </MainLayout>
}

export default CommunityList;






import React, { useState } from "react";

import { isMobile } from 'helpers/Mobile';

import useRequest from 'hooks/useRequest';

import MainLayout from 'components/organisms/MainLayout';
import Tabs from "components/organisms/Tabs";

import "./styles.scss";

const CommunityList = ({ elements, hasMore, fetchMoreData }) => {
    const {
        loadingSpinner
    } = useRequest();

    return <MainLayout>
        <Tabs ></Tabs>
    </MainLayout>
}

export default CommunityList;






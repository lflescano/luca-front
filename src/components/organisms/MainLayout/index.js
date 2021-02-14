import React, { useState } from "react";

import Sidebar from "components/molecules/Sidebar";
import BaseHeader from "components/atoms/BaseHeader";

import { isMobile } from 'helpers/Mobile';

import useRequest from 'hooks/useRequest';

import "./styles.scss";

const MainLayout = ({ showHeader = true, children }) => {
    const {
        loadingSpinner
    } = useRequest();
    
    return <div className="desktop-main-layout-container">
        <Sidebar >
        </Sidebar>
        
        <div className='right-layout-container'>
            {showHeader && <BaseHeader></BaseHeader>}
            <div className="right-layout-content" id="right-layout-content">
                {children}
            </div>
        </div>
    </div>
}

export default MainLayout;






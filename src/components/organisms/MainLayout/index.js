import React, { useState } from "react";

import Sidebar from "components/molecules/Sidebar";
import BaseHeader from "components/atoms/BaseHeader";

import { isMobile } from 'helpers/Mobile';

import useRequest from 'hooks/useRequest';

import SpinnerLuca from 'components/atoms/SpinnerLuca';

import "./styles.scss";

const MainLayout = ({ children }) => {
    const {
        loadingSpinner
    } = useRequest();

    const [open, setOpen] = useState(false);
    
    return <div className="desktop-main-layout-container">
        {!isMobile &&
            <Sidebar open={true} setOpen={setOpen}>
            </Sidebar>
        }
        
        <div className='right-layout-container'>
            <BaseHeader username={'Juan Perez'}></BaseHeader>
            <div className="right-layout-content">
                {children}
            </div>
        </div>
        <SpinnerLuca></SpinnerLuca>
    </div>
}

export default MainLayout;






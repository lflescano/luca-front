
import React from 'react'
import './styles.scss';

import TabsBootstrap from 'react-bootstrap/Tabs';
import TabBoostrap from 'react-bootstrap/Tabs';

import Table from "components/molecules/Table";
import InfiniteScroll from 'components/molecules/InfiniteScroll';

const Tabs = ({ elements, hasMore, fetchMoreData }) => {
    return <div className="tabs-scroll">
        <TabsBootstrap defaultActiveKey="populares" id="uncontrolled-tab-example">
            <TabBoostrap eventKey="populares" title="Populares">
                <InfiniteScroll elements={elements} hasMore={hasMore} fetchMoreData={fetchMoreData} />
            </TabBoostrap>
            <TabBoostrap eventKey="nuevos" title="Nuevos">
                <InfiniteScroll elements={elements} hasMore={hasMore} fetchMoreData={fetchMoreData} />
            </TabBoostrap>
            <TabBoostrap eventKey="seguidos" title="Seguidos">
                <InfiniteScroll elements={elements} hasMore={hasMore} fetchMoreData={fetchMoreData} />
            </TabBoostrap>
        </TabsBootstrap>
    </div>
}

export default Tabs;



import React, { useState } from "react";

import { Link } from "react-router-dom";
import InfiniteScrollComponent from "react-infinite-scroll-component";

import ItemInfiniteScroll from "components/atoms/ItemInfiniteScroll";
import { isMobile } from 'helpers/Mobile';

import "./styles.scss";

const InfiniteScroll = ({ elements, hasMore, fetchMoreData }) => {

  return <div>
        <InfiniteScrollComponent
          dataLength={elements.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Cargando...</h4>}
          endMessage={<h4>No hay mas preguntas</h4>}
        >
          {elements.map((i, index) => (
            <div key={index}>
              <ItemInfiniteScroll title={i.title} description={i.description} user={i.user} subject={i.subject} />
            </div>
          ))}
        </InfiniteScrollComponent>
      </div>
    
}

export default InfiniteScroll;

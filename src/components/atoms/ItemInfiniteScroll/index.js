import React, { useState, useEffect } from "react";
import TableBootstrap from 'react-bootstrap/Table'

import "./styles.scss";
import { isMobile } from "helpers/Mobile";

const ItemInfiniteScroll = ({ title = "Default", description = "Default", user = "default", subject="Default", comments = Math.floor(Math.random() * 100 ) }) => {
    const [index, setIndex] = useState();

    useEffect(() => {
        var randomNum = Math.floor(Math.random() * 4);
        setIndex(randomNum);
    });

    return <div className="item-infinite-scroll-container">
        <div className="item-infinite-scroll-header">
            <div className="item-infinite-scroll-photo">
                {index === 0 && <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="28" fill="#3843D0" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.57561 46.0281C7.42279 40.7103 12.1705 36.2244 18.7545 34.0255C21.1619 36.4601 24.377 37.9864 28.0468 37.9864C31.6928 37.9864 34.8901 36.4798 37.2923 34.0727C43.8419 36.3011 48.5452 40.8006 49.3458 46.1214C44.2098 52.1651 36.5528 55.9997 28.0001 55.9997C19.4036 55.9997 11.7119 52.1256 6.57561 46.0281ZM38.9201 22.5864C38.9201 27.0398 36.8659 30.9455 33.7801 33.1359C32.1156 34.3173 30.151 34.9997 28.0468 34.9997C25.9825 34.9997 24.0526 34.343 22.4086 33.2026C19.27 31.0254 17.1735 27.0854 17.1735 22.5864C17.1735 15.7307 22.0416 10.173 28.0468 10.173C34.052 10.173 38.9201 15.7307 38.9201 22.5864Z" fill="#FBFEFF" />
                </svg>}
                {index === 1 && <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="28" fill="#FFD704" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.57561 46.0281C7.42279 40.7103 12.1705 36.2244 18.7545 34.0255C21.1619 36.4601 24.377 37.9863 28.0468 37.9863C31.6928 37.9863 34.8901 36.4798 37.2923 34.0727C43.8419 36.3011 48.5452 40.8006 49.3458 46.1214C44.2098 52.1651 36.5528 55.9997 28.0001 55.9997C19.4036 55.9997 11.7119 52.1256 6.57561 46.0281ZM38.9201 22.5863C38.9201 27.0398 36.8659 30.9455 33.7801 33.1358C32.1156 34.3173 30.151 34.9997 28.0468 34.9997C25.9825 34.9997 24.0526 34.343 22.4086 33.2026C19.27 31.0254 17.1735 27.0854 17.1735 22.5863C17.1735 15.7307 22.0416 10.173 28.0468 10.173C34.052 10.173 38.9201 15.7307 38.9201 22.5863Z" fill="#FBFEFF" />
                </svg>}
                {index === 2 && <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="28" fill="#F96654" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.57561 46.0281C7.42279 40.7103 12.1705 36.2244 18.7545 34.0255C21.1619 36.4601 24.377 37.9863 28.0468 37.9863C31.6928 37.9863 34.8901 36.4798 37.2923 34.0727C43.8419 36.3011 48.5452 40.8006 49.3458 46.1214C44.2098 52.1651 36.5528 55.9997 28.0001 55.9997C19.4036 55.9997 11.7119 52.1256 6.57561 46.0281ZM38.9201 22.5863C38.9201 27.0398 36.8659 30.9455 33.7801 33.1358C32.1156 34.3173 30.151 34.9997 28.0468 34.9997C25.9825 34.9997 24.0526 34.343 22.4086 33.2026C19.27 31.0254 17.1735 27.0854 17.1735 22.5863C17.1735 15.7307 22.0416 10.173 28.0468 10.173C34.052 10.173 38.9201 15.7307 38.9201 22.5863Z" fill="#FBFEFF" />
                </svg>}
                {index === 3 && <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="28" fill="#FC9CFE" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.57561 46.0281C7.42279 40.7103 12.1705 36.2244 18.7545 34.0255C21.1619 36.4601 24.377 37.9864 28.0468 37.9864C31.6928 37.9864 34.8901 36.4798 37.2923 34.0727C43.8419 36.3011 48.5452 40.8006 49.3458 46.1214C44.2098 52.1651 36.5528 55.9997 28.0001 55.9997C19.4036 55.9997 11.7119 52.1256 6.57561 46.0281ZM38.9201 22.5864C38.9201 27.0398 36.8659 30.9455 33.7801 33.1359C32.1156 34.3173 30.151 34.9997 28.0468 34.9997C25.9825 34.9997 24.0526 34.343 22.4086 33.2026C19.27 31.0254 17.1735 27.0854 17.1735 22.5864C17.1735 15.7307 22.0416 10.173 28.0468 10.173C34.052 10.173 38.9201 15.7307 38.9201 22.5864Z" fill="#FBFEFF" />
                </svg>}
            </div>
            <div className="item-infinite-scroll-info">
                <h2>{title}</h2>
                <p>{description}</p>   
            </div>
            {!isMobile &&<div className="item-infinite-scroll-comments">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7117 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92176 4.44061 8.37485 5.27072 7.03255C6.10083 5.69025 7.28825 4.60557 8.7 3.9C9.87812 3.30493 11.1801 2.99656 12.5 3H13C15.0843 3.11499 17.053 3.99476 18.5291 5.47086C20.0052 6.94695 20.885 8.91565 21 11V11.5Z" stroke="#C4C6D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>{comments}</p>
            </div>}
        </div>
        <div className="item-infinite-scroll-footer">
            <div className="item-infinite-scroll-likes">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#9A9CB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H19.67C20.236 1.98999 20.7859 2.18814 21.2154 2.55682C21.6449 2.9255 21.9241 3.43906 22 4V11C21.9241 11.5609 21.6449 12.0745 21.2154 12.4432C20.7859 12.8119 20.236 13.01 19.67 13H17M10 15V19C10 19.7957 10.3161 20.5587 10.8787 21.1213C11.4413 21.6839 12.2044 22 13 22L17 13V2H5.72C5.23767 1.99455 4.76962 2.16359 4.40209 2.47599C4.03457 2.78839 3.79232 3.22309 3.72 3.7L2.34 12.7C2.29649 12.9866 2.31583 13.2793 2.39666 13.5577C2.47749 13.8362 2.6179 14.0937 2.80814 14.3125C2.99839 14.5313 3.23392 14.7061 3.49843 14.8248C3.76294 14.9435 4.05009 15.0033 4.34 15H10Z" stroke="#9A9CB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="item-infinite-scroll-meta">
                <p>{!isMobile && <>Pregunta</>} {user} en <strong>{subject}</strong></p>
            </div>
            <div className="item-infinite-scroll-share">
                {isMobile && <> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7117 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92176 4.44061 8.37485 5.27072 7.03255C6.10083 5.69025 7.28825 4.60557 8.7 3.9C9.87812 3.30493 11.1801 2.99656 12.5 3H13C15.0843 3.11499 17.053 3.99476 18.5291 5.47086C20.0052 6.94695 20.885 8.91565 21 11V11.5Z" stroke="#C4C6D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>{comments}</p></>}
                {!isMobile && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#9A9CB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#9A9CB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#9A9CB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.59 13.51L15.42 17.49" stroke="#9A9CB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.41 6.50999L8.59 10.49" stroke="#9A9CB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}
                {Math.floor(Math.random() * 4) % 2 === 0 ?
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#9A9CB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    :
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD704" stroke="#FFD704" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                }
            </div>
        </div>
    </div>
}

export default ItemInfiniteScroll;
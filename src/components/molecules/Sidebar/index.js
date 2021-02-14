import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginHeader from "components/atoms/LoginHeader";
import { isMobile } from 'helpers/Mobile';

import "./styles.scss";

const Sidebar = () => {
    return <div className="sidebar-container" >
            {!isMobile && 
            <LoginHeader></LoginHeader>
            }
            <React.Fragment>
                    <div className="menu-items">
                        <Link className="item" activeclassname="active-item" to="#" >
                            <div className="item-icon">
                                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3492 1.55782L12.6984 0.798565L13.3492 1.55782ZM14.6508 1.55782L15.3016 0.798565L14.6508 1.55782ZM21 14V22H23V14H21ZM7 22V14H5V22H7ZM11 22H7V24H11V22ZM21 22H17V24H21V22ZM11 16V22H13V16H11ZM17 22V16H15V22H17ZM15 14H13V16H15V14ZM5 12H2.70326V14H5V12ZM2.70326 12L14 2.31708L12.6984 0.798565L1.40167 10.4815L2.70326 12ZM14 2.31708L25.2967 12L26.5983 10.4815L15.3016 0.798565L14 2.31708ZM25.2967 12H23V14H25.2967V12ZM25.2967 12V14C27.1536 14 28.0081 11.6899 26.5983 10.4815L25.2967 12ZM2.70326 12H2.70326L1.40167 10.4815C-0.00812217 11.6899 0.846444 14 2.70326 14V12ZM14 2.31708V2.31708L15.3016 0.798565C14.5526 0.156582 13.4474 0.156583 12.6984 0.798565L14 2.31708ZM17 16C17 14.8954 16.1046 14 15 14V16H17ZM13 16V14C11.8954 14 11 14.8954 11 16H13ZM17 22H15C15 23.1046 15.8954 24 17 24V22ZM11 24C12.1046 24 13 23.1046 13 22H11V24ZM5 22C5 23.1046 5.89543 24 7 24V22H5ZM21 22V24C22.1046 24 23 23.1046 23 22H21ZM23 14V12C21.8954 12 21 12.8954 21 14H23ZM7 14C7 12.8954 6.10457 12 5 12V14H7Z" fill="#9A9CB5" />
                            </svg>
                            </div>
                            <div className="item-title">Inicio</div>
                        </Link>
                        <Link className="item" activeclassname="active-item" to="#">
                            <div className="item-icon">
                                <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="24" height="20" rx="3" stroke="#9A9CB5" strokeWidth="2" />
                                    <path d="M16.5161 9.67625C17.5755 10.2408 17.5755 11.7592 16.5161 12.3237L11.4555 15.0208C10.4563 15.5533 9.25 14.8292 9.25 13.697L9.25 8.30298C9.25 7.1708 10.4563 6.44675 11.4555 6.97923L16.5161 9.67625Z" fill="#9A9CB5" />
                                </svg>
                            </div>
                            <div className="item-title">Mis cursos</div>
                        </Link>
                        <Link className="item" activeclassname="active-item" to="#">
                            <div className="item-icon">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1109 8H13.1111L12.2222 10H12.222L13.1109 8ZM9.82798 8H6C4.34315 8 3 9.34315 3 11V21C3 22.6569 4.34315 24 6 24H7.53491L8.26218 22H6C5.44772 22 5 21.5523 5 21V11C5 10.4477 5.44772 10 6 10H8.93909L9.82798 8ZM11.4544 22L10.7271 24H10.7273L11.4545 22H11.4544ZM18.2425 22L16.2425 24H26C27.6569 24 29 22.6569 29 21V16V11C29 9.34315 27.6569 8 26 8H25.3122L24.1694 10H26C26.5523 10 27 10.4477 27 11V16V21C27 21.5523 26.5523 22 26 22H18.2425Z" fill="#9A9CB5" />
                                    <path d="M10.5554 13.5254L13.4946 6.25076C13.8001 5.49486 14.5337 5 15.349 5H21.3536C22.1038 5 22.5869 5.7953 22.241 6.46099L19.1518 12.4078C19.0826 12.5409 19.1792 12.7 19.3293 12.7H21.8697C22.3038 12.7 22.5317 13.2152 22.2397 13.5363L11.5836 25.258C11.2204 25.6575 10.5695 25.2774 10.7389 24.7647L13.5657 16.2139C13.7796 15.5668 13.2977 14.9 12.6162 14.9H11.4826C10.7736 14.9 10.2898 14.1827 10.5554 13.5254Z" stroke="#9A9CB5" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="item-title">Quizzes</div>
                        </Link>
                        <Link className="item" activeclassname="active-item" to="#">
                            <div className="item-icon">
                                <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 15L8 12" stroke="#9A9CB5" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M15 13L18 18" stroke="#9A9CB5" strokeWidth="2" strokeLinecap="round" />
                                    <circle cx="4" cy="18" r="3" stroke="#9A9CB5" strokeWidth="2" />
                                    <circle cx="12" cy="7" r="6" stroke="#9A9CB5" strokeWidth="2" />
                                    <circle cx="20" cy="22" r="4" stroke="#9A9CB5" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="item-title">Mi plan de estudios</div>
                        </Link>
                        <Link className="item active-item" activeclassname="active-item" to="/comunidad">
                            <div className="item-icon">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.4422 23.518C13.2345 23.8291 14.0973 24 15 24H16.1236C17.0598 24 17.9577 24.3719 18.6197 25.0339L19.8552 26.2695C21.6309 28.0452 24.4016 26.1097 23.6795 23.9674C27.2266 23.6258 30 20.6368 30 17C30 14.1667 28.3167 11.7266 25.8956 10.6251C25.9643 11.0734 26 11.5325 26 12C26 12.325 25.9828 12.6459 25.9492 12.962C27.1925 13.8716 28 15.3415 28 17C28 19.7614 25.7614 22 23 22H22.0814C21.2683 22 20.766 22.8871 21.1844 23.5844L21.7308 24.495C21.7964 24.6043 21.7896 24.6687 21.7813 24.7043C21.7693 24.7554 21.7318 24.8227 21.6594 24.8792C21.587 24.9357 21.5127 24.9558 21.4602 24.955C21.4237 24.9544 21.3596 24.9454 21.2695 24.8553L20.0339 23.6197C18.9968 22.5826 17.5902 22 16.1236 22H15C14.7598 22 14.5235 21.9831 14.2923 21.9503L13.5589 22.6837C13.2045 23.0381 12.8288 23.3136 12.4422 23.518Z" fill="#FF9200" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9 5C5.13401 5 2 8.13401 2 12C2 15.6368 4.77337 18.6258 8.32052 18.9674C7.59835 21.1097 10.3691 23.0452 12.1447 21.2695L13.3803 20.0339C14.0423 19.3719 14.9402 19 15.8764 19H17C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5H9ZM4 12C4 9.23858 6.23858 7 9 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H15.8764C14.4097 17 13.0032 17.5826 11.9661 18.6197L10.7305 19.8553C10.6404 19.9454 10.5763 19.9544 10.5398 19.955C10.4873 19.9558 10.4129 19.9357 10.3406 19.8792C10.2682 19.8226 10.2306 19.7554 10.2187 19.7043C10.2104 19.6687 10.2036 19.6043 10.2692 19.495L10.8156 18.5843C11.2339 17.8871 10.7317 17 9.91854 17H9C6.23858 17 4 14.7614 4 12ZM8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13ZM14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12ZM18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13Z" fill="#E8366C" />
                                </svg>
                            </div>
                            <div className="item-title">Comunidad</div>
                        </Link>
                        <Link className="item" activeclassname="active-item" to="#">
                            <div className="item-icon">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="11" stroke="#9A9CB5" strokeWidth="2" />
                                    <circle cx="16" cy="16" r="4" stroke="#9A9CB5" strokeWidth="2" />
                                    <path d="M19 13L24 8" stroke="#9A9CB5" strokeWidth="2" />
                                    <path d="M8 24L13 19" stroke="#9A9CB5" strokeWidth="2" />
                                    <path d="M24 24L19 19" stroke="#9A9CB5" strokeWidth="2" />
                                    <path d="M13 13L8 8" stroke="#9A9CB5" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="item-title">Centro de ayuda</div>
                        </Link>
                    </div>
            </React.Fragment>
            </div>
}

export default Sidebar;

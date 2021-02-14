import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Router, Route, Redirect } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import './App.css';

import {Context, ContextPersist} from "./store/context"
import { AuthService } from './services/AuthService';

import SignInView from './views/Auth/Login/SignInView';
import CommunityListView from './views/Community/CommunityList/CommunityListView';
import CommunityFormView from './views/Community/CommunityForm/CommunityFormView';

function App() {
    const history = useHistory();

    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        AuthService.loadUser()
            .then(user => {
                setUser(user);
                setLoad(true);
            }).catch(error => {
                setLoad(true);
            }
        );

        const currentUserObserver = AuthService.currentUser.subscribe(user_event => {
            if (user != null && user_event === null) {
                history.push('/login');
            }
            // Obligo a renderizar entonces refresca bien los permisos
            setUser(user_event);
        });

        return function cleanup() {
            currentUserObserver.unsubscribe();
        }
    }, []);

    return (
        <ContextPersist><Context>

        <main>
            <Switch>
                <React.Fragment>
                        {/* { (load && !user) &&
                        <div>
                            <Route path='/login' component={SignInView} />
                        </div>
                        }
                        { (load && user) && */}
                        <div>
                            <Route path='/comunidad' component={CommunityListView} />
                            <Route path='/crear_pregunta' component={CommunityFormView} />
                            <Route exact path="/">
                                <Redirect to="/comunidad" />
                            </Route>
                        </div>
                        {/* } */}
                </React.Fragment>
            </Switch>
        </main>
        </Context></ContextPersist>

    );
}

export default App;

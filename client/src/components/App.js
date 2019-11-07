import React from 'react';
import { BrowserRouter , Link , Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import CreateGame from './Games/createGame';
import ReduxToastr from 'react-redux-toastr';
import GamesList from './Games/GamesList';
import Game from './Games/Game';
import Login from './Users/login';
import Secret from './Users/secret';
import withAuth from './Users/withAuth';

class App extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-left"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick/>
                <BrowserRouter>
                    <Header/>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/games/create-game" component={CreateGame} />
                    <Route exact path="/games" component={GamesList} />
                    <Route exact path="/users/authenticate" component={Login} />
                    <Route exact path="/users/secret" component={withAuth(Secret)} />
                    <Route exact path="/games/:id/show" component={Game}/>
                </BrowserRouter>
            </div>
        )
    }
};

export default App;

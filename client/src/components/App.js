import React from 'react';
import { BrowserRouter , Link , Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import CreateGame from './Games/createGame';
import ReduxToastr from 'react-redux-toastr';

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
                <Header/>
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/games/create-game" component={CreateGame} />
                </BrowserRouter>
            </div>
        )
    }
};

export default App;

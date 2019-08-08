import React from 'react';
import { BrowserRouter , Link , Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

class App extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <Header/>
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                </BrowserRouter>
            </div>
        )
    }
};

export default App;

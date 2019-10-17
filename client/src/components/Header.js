import React from 'react';
import { Navbar, Nav , NavDropdown} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { logout } from '../actions/usersActions';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

class Header extends React.Component {

    state = {
        isLoggedIn: false
    }

    componentDidMount() {
        const token = Cookies.get('token');
        if(token){
            this.setState({
                isLoggedIn: true
            });
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.loggedIn !== this.props.loggedIn){
            const token = Cookies.get('token');
            if(token){
                this.setState({
                    isLoggedIn: true
                });
            }else{
                this.setState({
                    isLoggedIn: false
                })
            }
        }
    }

    render(){
        const {isLoggedIn} = this.state;
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to={`/`}>
                    <Navbar.Brand className="logo-text">GamersGrid</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features" className="nav-items">Top Picks</Nav.Link>
                        <Nav.Link href="#pricing" className="nav-items">Dank Memes</Nav.Link>
                        <NavDropdown title="Consoles" className="nav-items" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" className="nav-items">PS4</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className="nav-items">Xbox One</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className="nav-items">Nintendo Switch</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" className="nav-items">Mobile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" className="nav-items">Community</Nav.Link>
                        <a href="/api/secret" className="nav-items nav-link">Check</a>
                        { isLoggedIn ?
                                <a href="#" className="nav-items nav-link" onClick={() => this.props.logout()}>Logout</a>
                                :
                                <Link to="/users/authenticate">
                                    <Nav.Link eventKey={2} href="#memes" className="nav-items">Login</Nav.Link>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn
    }
}

export default connect(mapStateToProps,{logout})( Header );

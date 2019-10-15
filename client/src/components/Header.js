import React from 'react';
import { Navbar, Nav , NavDropdown} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { logout } from '../actions/usersActions';
import { connect } from 'react-redux';

class Header extends React.Component {
    render(){
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
                        <a href="/api/secret">Check</a>
                        <Link to="/users/authenticate">
                            <Nav.Link eventKey={2} href="#memes" className="nav-items">Login</Nav.Link>
                        </Link>
                        <a onClick={this.props.logout}>Logout</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default connect(null,{logout})( Header );

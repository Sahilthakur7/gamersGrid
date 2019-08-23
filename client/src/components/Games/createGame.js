import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import {saveGame} from '../../actions/gamesActions';

class CreateGame extends React.Component {
    state = {
        title: '',
        genre: '',
        message: ''
    };

    valueChangeHandler = (e,field) => {
        switch(field){
            case 'title':
                this.setState({
                    title: e.target.value
                });
                break;
            case 'genre':
                this.setState({
                    genre: e.target.value
                });
                break;
        }
    }

    submitCreateGame = (e) => {
        e.preventDefault();
        const { title, genre } = this.state;

        const gameObj = {
            title: title,
            genre: genre
        };

    }

    render(){
        const { state } = this;

        return(
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={state.title} onChange={(e) => this.valueChangeHandler(e,"title")} type="text" placeholder="Enter the title" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control value={state.genre} onChange={(e) => this.valueChangeHandler(e,"genre")} type="text" placeholder="Enter the genre" />
                    </Form.Group>
                </Form.Row>


                <Button variant="primary" type="submit" onClick={this.submitCreateGame}>
                    Submit
                </Button>
            </Form>
        );
    }
}

function mapStateToProps(state){
    const {game} = state;
}

export default connect(mapStateToProps, { saveGame })( CreateGame );

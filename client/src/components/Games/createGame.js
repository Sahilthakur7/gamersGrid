import React from 'react';
import _isEmpty from 'lodash';
import { connect } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import {saveGame} from '../../actions/gamesActions';

class CreateGame extends React.Component {
    state = {
        title: '',
        genre: ''
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

        this.setState({
            title: '',
            genre: ''
        },() => this.props.saveGame(gameObj));
    }

    renderCreationMessage = () => {
        const { message } = this.props.games;

        if(message){
            return(
                <div>
                    {message}
                </div>
            )
        }
    }

    render(){
        const { state , props} = this;
        console.log("props",this.props);

        return(
            <div>
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
            {this.renderCreationMessage()}
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
         games : state.games
    }
}

export default connect(mapStateToProps, { saveGame })( CreateGame );

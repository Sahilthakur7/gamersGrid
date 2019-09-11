import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import {saveGame} from '../../actions/gamesActions';
import {toastr} from 'react-redux-toastr';


class CreateGame extends React.Component {
    state = {
        title: '',
        genre: ''
    };

    valueChangeHandler = (e,field) => {
        this.setState({
            [field]: e.target.value
        })
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
            toastr.success('Success', `${message}`);
            return(
                <div>
                </div>
            )
        }
    }

    render(){
        const { state , props} = this;

        return(
            <div className="mt-50">
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

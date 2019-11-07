import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import {saveGame} from '../../actions/gamesActions';
import {toastr} from 'react-redux-toastr';
import { uploadImageMulter } from '../../services/imageService';


class CreateGame extends React.Component {
    state = {
        title: '',
        genre: '',
        state: ''
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

    uploadImage = (e) => {
        let imageFormObj = new FormData();

// imageFormObj.append("imageName", "multer-image-" + Date.now());
        imageFormObj.append("imageData", e.target.files[0]);

        this.setState({
            image: URL.createObjectURL(e.target.files[0])
        })

        uploadImageMulter(imageFormObj);
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
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Attached Image</Form.Label>
                            <Form.Control
                                onChange={(e) => this.uploadImage(e)} type="file" placeholder="Enter the image" />
                            <img src={this.state.image} alt="game-image"/>
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

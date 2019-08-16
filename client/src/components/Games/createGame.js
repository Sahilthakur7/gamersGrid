import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class CreateGame extends React.Component {
    state = {
    }

    render(){
        return(
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter the title" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control type="text" placeholder="Enter the genre" />
                    </Form.Group>
                </Form.Row>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default CreateGame;

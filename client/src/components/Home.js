import React from 'react';
import HomeCarousel from './HomeCarousel';
import { CardDeck , Card , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    renderCardGroup = () => {
        return(
            <div className="home-cards">
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title>Can't Find Your Game?</Card.Title>
                            <Card.Text>Create your own record for the game, fill in a few details and your game will get fetaured on GamersGrid.</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><Link to={"games/create-game"}><Button variant="dark">Create A Game Entry</Button></Link></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Check the latest news</Card.Title>
                            <Card.Text>
                                Check the latest and best from the world of gaming.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><Link to={"games"}><Button variant="dark">Check latest news</Button></Link></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Power Rankings</Card.Title>
                            <Card.Text>
                                See all the popular picks from the past one year with our power rankings.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><Button variant="dark">Power Rankings</Button></small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        )
    }

    render(){
        return(
            <div>
                <HomeCarousel />
                {this.renderCardGroup()}
            </div>
        )
    }
};

export default Home;

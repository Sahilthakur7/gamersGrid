import React,{Fragment} from 'react';
import { connect } from 'react-redux';
import { fetchAllGames } from '../../actions/gamesActions';

class GamesList extends React.Component {
    state = {
        games: []
    };

    componentDidMount(){
        this.props.fetchAllGames();
    }

    componentDidUpdate(prevProps){
        if(prevProps.games.length !== this.props.games.length){
            this.setState({
                games: this.props.games
            })
        }
    }

    renderEmptyGamesList = () => {
        return(
            <div>
                Your games list is empty right now. You can create a game from the home screen.
            </div>
        )
    }

    renderGames = () => {
        const { games } = this.state;
        let gamesList;
        if(games){
            gamesList = games.map((game) => {
                return(
                    <tr className="row100 body">
                        <td className="cell100 column1">{game.title}</td>
                        <td className="cell100 column2">{game.genre}</td>
                        <td className="cell100 column3">9:00 AM - 11:00 AM</td>
                        <td className="cell100 column4">Aaron Chapman</td>
                        <td className="cell100 column5">10</td>
                    </tr>
                )
            })
        }
        return(
            gamesList
        );
    }

    renderGamesList = () => {
        return(
            <div className="table100 ver3 m-b-110 games-table">
                <div className="table100-head">
                    <table>
                        <thead>
                            <tr className="row100 head">
                                <th className="cell100 column1">Title</th>
                                <th className="cell100 column2">Genre</th>
                                <th className="cell100 column3">Hours</th>
                                <th className="cell100 column4">Trainer</th>
                                <th className="cell100 column5">Spots</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className="table100-body js-pscroll">
                    <table>
                        <tbody>
                            {this.renderGames()}
                        </tbody>
                    </table>
                </div>
            </div>


        )
    }

    render(){
        const {games} = this.props;
        return(
            <Fragment>
                {
                    games.length > 0 ?
                        this.renderGamesList() :
                        this.renderEmptyGamesList()
                }
            </Fragment>
        )
    }

};

function mapStateToProps(state){
    return{
        games: state.games.games
    };
}

export default connect(mapStateToProps, { fetchAllGames })( GamesList );

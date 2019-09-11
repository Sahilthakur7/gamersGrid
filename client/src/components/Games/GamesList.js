import React from 'react';
import { connect } from 'react-redux';
import { fetchAllGames } from '../../actions/gamesActions';

class GamesList extends React.Component {
    state = {

    };

    componentDidMount(){
        this.props.fetchAllGames();
    }

    render(){
        return(
            <div>
            </div>
        )
    }

};

function mapStateToProps(state){
    return{
        games: state.games
    };
}

export default connect(mapStateToProps, { fetchAllGames })( GamesList );

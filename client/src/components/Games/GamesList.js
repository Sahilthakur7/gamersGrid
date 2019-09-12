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

    renderGamesList = () => {
        return(
            <div class="table100 ver3 m-b-110">
                <div class="table100-head">
                    <table>
                        <thead>
                            <tr class="row100 head">
                                <th class="cell100 column1">Class name</th>
                                <th class="cell100 column2">Type</th>
                                <th class="cell100 column3">Hours</th>
                                <th class="cell100 column4">Trainer</th>
                                <th class="cell100 column5">Spots</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div class="table100-body js-pscroll">
                    <table>
                        <tbody>
                            <tr class="row100 body">
                                <td class="cell100 column1">Like a butterfly</td>
                                <td class="cell100 column2">Boxing</td>
                                <td class="cell100 column3">9:00 AM - 11:00 AM</td>
                                <td class="cell100 column4">Aaron Chapman</td>
                                <td class="cell100 column5">10</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Mind & Body</td>
                                <td class="cell100 column2">Yoga</td>
                                <td class="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td class="cell100 column4">Adam Stewart</td>
                                <td class="cell100 column5">15</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Crit Cardio</td>
                                <td class="cell100 column2">Gym</td>
                                <td class="cell100 column3">9:00 AM - 10:00 AM</td>
                                <td class="cell100 column4">Aaron Chapman</td>
                                <td class="cell100 column5">10</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Wheel Pose Full Posture</td>
                                <td class="cell100 column2">Yoga</td>
                                <td class="cell100 column3">7:00 AM - 8:30 AM</td>
                                <td class="cell100 column4">Donna Wilson</td>
                                <td class="cell100 column5">15</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Playful Dancer's Flow</td>
                                <td class="cell100 column2">Yoga</td>
                                <td class="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td class="cell100 column4">Donna Wilson</td>
                                <td class="cell100 column5">10</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Zumba Dance</td>
                                <td class="cell100 column2">Dance</td>
                                <td class="cell100 column3">5:00 PM - 7:00 PM</td>
                                <td class="cell100 column4">Donna Wilson</td>
                                <td class="cell100 column5">20</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Cardio Blast</td>
                                <td class="cell100 column2">Gym</td>
                                <td class="cell100 column3">5:00 PM - 7:00 PM</td>
                                <td class="cell100 column4">Randy Porter</td>
                                <td class="cell100 column5">10</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Pilates Reformer</td>
                                <td class="cell100 column2">Gym</td>
                                <td class="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td class="cell100 column4">Randy Porter</td>
                                <td class="cell100 column5">10</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Supple Spine and Shoulders</td>
                                <td class="cell100 column2">Yoga</td>
                                <td class="cell100 column3">6:30 AM - 8:00 AM</td>
                                <td class="cell100 column4">Randy Porter</td>
                                <td class="cell100 column5">15</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Yoga for Divas</td>
                                <td class="cell100 column2">Yoga</td>
                                <td class="cell100 column3">9:00 AM - 11:00 AM</td>
                                <td class="cell100 column4">Donna Wilson</td>
                                <td class="cell100 column5">20</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Virtual Cycle</td>
                                <td class="cell100 column2">Gym</td>
                                <td class="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td class="cell100 column4">Randy Porter</td>
                                <td class="cell100 column5">20</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Like a butterfly</td>
                                <td class="cell100 column2">Boxing</td>
                                <td class="cell100 column3">9:00 AM - 11:00 AM</td>
                                <td class="cell100 column4">Aaron Chapman</td>
                                <td class="cell100 column5">10</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Mind & Body</td>
                                <td class="cell100 column2">Yoga</td>
                                <td class="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td class="cell100 column4">Adam Stewart</td>
                                <td class="cell100 column5">15</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Crit Cardio</td>
                                <td class="cell100 column2">Gym</td>
                                <td class="cell100 column3">9:00 AM - 10:00 AM</td>
                                <td class="cell100 column4">Aaron Chapman</td>
                                <td class="cell100 column5">10</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Wheel Pose Full Posture</td>
                                <td class="cell100 column2">Yoga</td>
                                <td class="cell100 column3">7:00 AM - 8:30 AM</td>
                                <td class="cell100 column4">Donna Wilson</td>
                                <td class="cell100 column5">15</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Playful Dancer's Flow</td>
                                <td class="cell100 column2">Yoga</td>
                                <td class="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td class="cell100 column4">Donna Wilson</td>
                                <td class="cell100 column5">10</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Zumba Dance</td>
                                <td class="cell100 column2">Dance</td>
                                <td class="cell100 column3">5:00 PM - 7:00 PM</td>
                                <td class="cell100 column4">Donna Wilson</td>
                                <td class="cell100 column5">20</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Cardio Blast</td>
                                <td class="cell100 column2">Gym</td>
                                <td class="cell100 column3">5:00 PM - 7:00 PM</td>
                                <td class="cell100 column4">Randy Porter</td>
                                <td class="cell100 column5">10</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Pilates Reformer</td>
                                <td class="cell100 column2">Gym</td>
                                <td class="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td class="cell100 column4">Randy Porter</td>
                                <td class="cell100 column5">10</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Supple Spine and Shoulders</td>
                                <td class="cell100 column2">Yoga</td>
                                <td class="cell100 column3">6:30 AM - 8:00 AM</td>
                                <td class="cell100 column4">Randy Porter</td>
                                <td class="cell100 column5">15</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Yoga for Divas</td>
                                <td class="cell100 column2">Yoga</td>
                                <td class="cell100 column3">9:00 AM - 11:00 AM</td>
                                <td class="cell100 column4">Donna Wilson</td>
                                <td class="cell100 column5">20</td>
                            </tr>

                            <tr class="row100 body">
                                <td class="cell100 column1">Virtual Cycle</td>
                                <td class="cell100 column2">Gym</td>
                                <td class="cell100 column3">8:00 AM - 9:00 AM</td>
                                <td class="cell100 column4">Randy Porter</td>
                                <td class="cell100 column5">20</td>
                            </tr>
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

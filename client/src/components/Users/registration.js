import React from 'react';
import {connect} from 'react-redux';
import { authenticate } from '../../actions/usersActions';

class Registration extends React.Component {
    state = {
        email: '',
        password: ''
    };

    onFieldChange = (e,field) => {
        this.setState({
            [field]: e.target.value
        });
    }

    onSubmit =(e) => {
        const {email,password} = this.state;
        if(e){
            e.preventDefault();
        }
        const userObj = {
            email,
            password
        };

        this.setState({
            email: '',
            password: ''
        },() => this.props.authenticate(userObj));
    }

    render(){
        const {email,password} = this.state;

        return(
            <form onSubmit ={ this.onSubmit }>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => this.onFieldChange(e,"email")}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => this.onFieldChange(e,"password")}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
};

export default connect(null, {authenticate})( Registration );

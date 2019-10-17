import React from 'react';
import {connect} from 'react-redux';
import { authenticate, clearErrors } from '../../actions/usersActions';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        redirect: false
    };

    onFieldChange = (e,field) => {
        if(this.props.error){
            this.props.clearErrors();
        }
        this.setState({
            [field]: e.target.value
        });
    }

    componentDidMount(){
        const token = Cookies.get('token');
        if(token){
            this.setState({
                redirect: true
            })
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.message !== this.props.message){
            if(this.props.message.indexOf('successfully') > -1){
                this.props.history.push('/');
            }
        }
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
        this.props.authenticate(userObj);
    }

    showError = () => {
        const {error} = this.props;
        const {email,password} = this.state;

        if(email && password && error){
            return(
                <div className="red">
                    {error}
                </div>
            )
        }
    }

    render(){
        const {email,password,redirect} = this.state;
        const {message,error} = this.props;

        if(redirect){
            return <Redirect to="/" />
        }else{
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
                    {this.showError()}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            );
        }
    }
};

const mapStateToProps = (state) => {
    return{
        error: state.user.error,
        message: state.user.message,
        user: state.user.user
    }
}

export default connect(mapStateToProps, {authenticate,clearErrors})( Login );

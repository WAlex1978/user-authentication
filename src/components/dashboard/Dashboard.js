import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Text } from '../styled-components';
import { verify } from '../../services/auth';
import decode from 'jwt-decode';
import Spinner from '../Spinner';

class Dashboard extends Component {
    componentWillMount = async () => {
        if (this.props.token) {
            const res = await verify(this.props.token);
            
            if (res.data.error === true) {
                this.logOut();
            }
        }

        else {
            this.props.history.push('/login');
        }
    }

    logOut = (e) => {
            this.props.logOut();
            this.props.history.push('/login');
    }

    render() { 
        return (
            <div>
                {this.props.token ? 
                <Fragment>
                    <Text size="1.8rem" top="5px" bottom="10px" align="center">Welcome {decode(this.props.token).username}</Text>

                    <Text onClick={this.logOut} align="center" style={{cursor: "pointer", color: "rgb(254, 44, 66)"}}>Log Out</Text>
                </Fragment> : <Spinner /> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { token: state.token }
}

const mapDispatchToProps = (dispatch) => {
    return { logOut: () => { dispatch({ type: "LOG_OUT" }) } }
}
 
export default connect (mapStateToProps, mapDispatchToProps) (Dashboard);
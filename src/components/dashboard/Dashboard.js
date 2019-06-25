import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Text } from '../styled-components';
import decode from 'jwt-decode';
import Spinner from '../Spinner';

class Dashboard extends Component {
    componentWillMount = () => {
        if (!this.props.token) {
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
                    <Text size="1.8rem" bottom="30px" align="center">Hello {decode(this.props.token).username}</Text>

                    <Text onClick={this.logOut} align="center">Log Out</Text>
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
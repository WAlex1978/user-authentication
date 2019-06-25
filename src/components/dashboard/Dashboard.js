import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

class Dashboard extends Component {
    render() { 
        if (!this.props.token) {
            return (
                <Redirect to="/login" />
            )
        } 

        return (
            <center>
                Hello {decode(this.props.token).username}
            </center>
        );
    }
}

const mapStateToProps = (state) => {
    return { token: state.token }
}
 
export default connect (mapStateToProps) (Dashboard);
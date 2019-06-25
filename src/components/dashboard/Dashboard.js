import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() { 
        if (!this.props.token) {
            return (
                <Redirect to="/login" />
            )
        } 

        return (
            <div>
                Dashboard
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { token: state.token }
}
 
export default connect (mapStateToProps) (Dashboard);
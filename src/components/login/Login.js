import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Flex } from '../styled-components';

const Login = (props) => {
    if (props.token) {
        props.history.push('/');
    }

    return (
        <Flex>
            <div style={{flex: 1, backgroundColor: "rgb(254, 74, 86)"}}></div>
            <LoginForm />
        </Flex>
    )
}

const mapStateToProps = (state) => {
    return { token: state.token }
}

export default withRouter (connect (mapStateToProps) (Login));
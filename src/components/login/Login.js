import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Flex } from '../styled-components';
import styled from 'styled-components';
import image from './login-background.jpg';

const Background = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`

const Login = (props) => {
    if (props.token) {
        props.history.push('/');
    }

    return (
        <Flex>
            <Background />
            <LoginForm />
        </Flex>
    )
}

const mapStateToProps = (state) => {
    return { token: state.token }
}

export default withRouter (connect (mapStateToProps) (Login));
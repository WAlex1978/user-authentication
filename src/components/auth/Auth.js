import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Flex } from '../styled-components';
import styled from 'styled-components';
import image from './auth-background.jpg';

const Background = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`
class Auth extends Component {
    componentWillMount = () => {
        if (this.props.token) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <Flex>
                <Background />
                {this.props.history.location.pathname === '/login' ? <LoginForm /> : <RegisterForm />}
            </Flex>
        )
    }
}

const mapStateToProps = (state) => {
    return { token: state.token }
}

export default withRouter (connect (mapStateToProps) (Auth));
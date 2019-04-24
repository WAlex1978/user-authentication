import React from 'react';
import LoginForm from './LoginForm';
import { Flex } from '../styled-components';

const Login = () => {
    return (
        <Flex>
            <div style={{flex: 1, backgroundColor: "rgb(254, 74, 86)"}}></div>
            <LoginForm />
        </Flex>
    )
}

export default Login;
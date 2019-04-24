import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Flex, Text, Wrapper } from '../styled-components';

const Base = styled.div`
    flex: 1;
    height: 100vh;
`

const styles = theme => ({
    underline: {
        '&:after': {
            borderBottom:'2px solid rgb(254, 74, 86)',
        },
    },
});

const LoginForm = (props) => {
    const { classes } = props;

    return (
        <Base>
            <Wrapper>
                <Flex direction="column" justify="center">
                    <Text size="1.8rem" bottom="10px">Login</Text>
                    <Text bottom="60px">Don't have an account? Register a new account.</Text>
                    <form>
                        <Input placeholder="Username" fullWidth style={{marginBottom: "25px"}} classes={{underline: classes.underline}} />
                        <Input placeholder="Password" fullWidth type="password" style={{marginBottom: "60px"}} classes={{underline: classes.underline}}/>
                        
                        <Button variant="contained" style={{width: "50%", float: "right", backgroundColor: "rgb(254, 74, 86)", color: "white"}}>
                            Login
                        </Button>
                    </form>
                </Flex>
            </Wrapper>
        </Base>
    )
};

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles (styles) (LoginForm);
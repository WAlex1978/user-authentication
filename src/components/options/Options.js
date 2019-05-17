import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import decode from 'jwt-decode';
import { Wrapper, Flex } from '../styled-components';
import { getUser } from '../../services/user';
import OptionsList from './OptionsList';
import ContentList from './ContentList';

const Content = styled.div`
    flex: 1;
    margin: 30px 0 0 20px;
`

class Options extends Component {
    state = {
        selected: 0,
        user: null,
        error: null,
    }

    // Get current user
    componentWillMount = async () => {
        if (!this.props.token) {
            this.props.history.goBack();
        }

        const username = decode(this.props.token).username;
        const user = await getUser(username);

        if (user && !user.data) {
            this.setState({error: user.message});
            return;
        }

        if (user.data && user.data.error) {
            this.setState({error: user.data.message});
            return;
        }

        if (user.data && user.data._id) {
            this.setState({user: user.data});
        }
    }

    setSelected = (i) => {
        this.setState({selected: i});
    }
    
    render() { 
        return (
            <Wrapper>
                <Flex>
                    <OptionsList selected={this.state.selected} select={this.setSelected} />
                    <Content>
                        {this.state.user ? <ContentList selected={this.state.selected} user={this.state.user} /> : null}
                    </Content>
                </Flex>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return { token: state.token }
}
 
export default withRouter (connect (mapStateToProps) (Options));
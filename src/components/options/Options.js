import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import decode from 'jwt-decode';
import { Wrapper, Flex } from '../styled-components';
import { getUser } from '../../services/user';
import OptionsList from './OptionsList';
import UserSettings from './UserSettings';
import ProfileSettings from './ProfileSettings';
import ProfilePicture from './ProfilePicture';

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

    updateAvatar = (picture) => {
        this.setState({user: {data: {
            avatar: picture
        }}});
    }

    // Display the selected content
    getSelected = () => {
        switch (this.state.selected) {
            case 0: 
                return <UserSettings />;

            case 1: 
                return <ProfileSettings />;

            case 2: 
                return <ProfilePicture picture={this.state.user.avatar} />;

            case 3: 
                return null;
                
            default: 
                return null;
        }
    }
    
    render() { 
        return (
            <Wrapper>
                <Flex>
                    <OptionsList selected={this.state.selected} select={this.setSelected} />
                    <Content>
                        {this.state.user ? this.getSelected() : null}
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
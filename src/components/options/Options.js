import React, { Component } from 'react';
import styled from 'styled-components';
import { Wrapper, Flex } from '../styled-components';
import OptionsList from './OptionsList';
import ProfilePicture from './ProfilePicture';

const Content = styled.div`
    flex: 1;
    margin: 30px 0 0 20px;
`

class Options extends Component {
    state = {
        selected: 0,
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
                        <ProfilePicture />
                    </Content>
                </Flex>
            </Wrapper>
        );
    }
}
 
export default Options;
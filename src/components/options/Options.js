import React, { Component } from 'react';
import styled from 'styled-components';
import { Wrapper, Flex } from '../styled-components';
import OptionsList from './OptionsList';
import ContentList from './ContentList'

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
                        <ContentList selected={this.state.selected} />
                    </Content>
                </Flex>
            </Wrapper>
        );
    }
}
 
export default Options;
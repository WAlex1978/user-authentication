import styled from 'styled-components';

export const Text = styled.div`
    font-size: ${props => props.size ? props.size : "1rem"};
    font-family: 'Roboto', sans-serif;
    color: ${props => props.color ? props.color : "black"};
    margin: ${props => props.margin ? props.margin : null};
    margin-bottom: ${props => props.bottom ? props.bottom : null};
    text-align: ${props => props.align ? props.align : null};
    visibility: ${props => props.visibility ? props.visibility : "visible"};
`
export const Flex = styled.div`
    flex: 1;
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : "row"};
    align-items: ${props => props.align ? props.align : null};
    justify-content: ${props => props.justify ? props.justify : null};
    width: 100%;
    height: 100%;
`

export const Wrapper = styled.div`
    width: ${props => props.width ? props.width : "70%"};
    margin: auto;
    height: 100%;
`
import React from 'react';
import styled from 'styled-components';
import image from './default-avatar.png';

const Image = styled.div`
    background-image: url(${props => props.image});
    background-size: contain;
    background-position: center;
    height: 220px;
    width: 220px;
`

const Avatar = (props) => {
    return (
        <Image image={props.image ? props.image : image} />
    )
}

export default Avatar;
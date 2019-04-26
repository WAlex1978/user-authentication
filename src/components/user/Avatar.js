import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Image from './default-avatar.png';

const styles = {
    Avatar: {
        margin: 10,
        width: 200,
        height: 200,
    },
};

const ImageAvatar = (props) => {
    const { classes } = props;

    return (
        <Avatar src={props.image ? props.image : Image} className={classes.Avatar} />
    );
}

ImageAvatar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles (styles) (ImageAvatar);
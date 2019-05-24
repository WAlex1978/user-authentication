import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Text } from '../styled-components';
import { uploadAvatar } from '../../services/settings';

const styles = () => ({
    Upload: {
        margin: "5px",
        backgroundColor: "rgb(254, 74, 86)",
        '&:hover': {
            backgroundColor: "rgb(254, 44, 66)",
        }
    },
    Submit: {
        margin: "5px",
        marginTop: "10px",
    },
    Icon: {
        marginRight: "5px",
        color: "white",
    },
    Filename: {
        marginLeft: "5px",
    }
});

const ProfilePicture = (props) => {
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState('No file chosen');
    const [error, setError] = useState(null);
    const { classes } = props;

    const onChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            setFilename(e.target.files[0].name);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', file);

        const res = await uploadAvatar(formData, props.token);

        if (res && !res.data) {
            setError(res.message);
            return;
        }

        if (res.data && res.data.error) {
            setError(res.data.message);
            return;
        }

        if (res.data && res.data.url) {
            setFile(null);
            setFilename('No file chosen');
        }
    }

    return (
        <div>
            <Text bottom="10px">Current Picture</Text>
            <Divider />
            <Text top="10px" bottom="20px" size=".9rem">Remove</Text>
            <Text top="10px" bottom="10px">Upload a Picture</Text>
            <Divider />
            <Text top="10px" bottom="20px" size=".9rem">Must be of jpg or png format. Maximum 400 KB filesize (image resized automatically).</Text>
            <form onSubmit={onSubmit}>
                <input accept="image/*" id="profile-picture" type="file" onChange={onChange} style={{display: "none"}} />
                <label htmlFor="profile-picture">
                    <Button variant="contained" component="span" size="small" className={classes.Upload}>
                        <CloudUploadIcon className={classes.Icon} /><Text size=".9rem" color="white">Choose File</Text>
                    </Button>
                    <span className={classes.Filename}>{filename}</span>
                    <br />
                    <Button variant="contained" type="submit" size="small" className={classes.Submit} disabled={file === null}>
                        <Text size=".9rem">Submit</Text>
                    </Button>
                </label>
            </form>
            <Text size=".9rem" top="20px" align="center" color="rgb(254, 44, 66)" visibility={error ? "visible" : "hidden"}>
                {error ? error : "error"}
            </Text>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default withStyles (styles) (connect (mapStateToProps) (ProfilePicture))
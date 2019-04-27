import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Text } from '../styled-components';

const styles = () => ({
    Button: {
        margin: "5px",
        backgroundColor: "rgb(254, 74, 86)",
        '&:hover': {
            backgroundColor: "rgb(254, 44, 66)",
        }
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
    const { classes } = props;

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    return (
        <div>
            <Text bottom="10px">Upload a Picture</Text>
            <Divider />
            <Text top="10px" bottom="20px" size=".9rem">Must be of jpg or png format. Maximum 400 KB filesize (image resized automatically).</Text>
            <form>
                <input accept="image/*" id="profile-picture" type="file" onChange={onChange} style={{display: "none"}} />
                <label htmlFor="profile-picture">
                    <Button theme="primary" component="span" size="small" className={classes.Button}>
                        <CloudUploadIcon className={classes.Icon} /><Text size=".9rem" color="white">Choose File</Text>
                    </Button>
                    <span className={classes.Filename}>{filename}</span>
                    <br />
                    <Button type="submit" size="small" className={classes.Button} disabled={file === null}>
                        <Text size=".9rem">Submit</Text>
                    </Button>
                </label>
            </form>
        </div>
    )
}

export default withStyles (styles) (ProfilePicture)
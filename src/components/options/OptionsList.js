import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import { Text } from '../styled-components';

const styles = () => ({
    List: {
        width: "20%",
        marginTop: "30px",
    },
    classList: {
        borderRight: "3px solid rgb(200, 200, 200)",
        "&:hover": {
            backgroundColor: "white !important"
        }
    },
    Selected: {
        borderRight: "3px solid rgb(254, 74, 86) !important",
        backgroundColor: "white !important",
    }
});

const OptionsList = (props) => {
    const { classes } = props;

    return (
        <List className={classes.List}>
            <ListItem button selected={props.selected===0} onClick={() => props.select(0)} className={classes.classList} classes={{selected: classes.Selected}}>
                <Text color="inherit">User Settings</Text>
            </ListItem>
            <ListItem button selected={props.selected===1} onClick={() => props.select(1)} className={classes.classList} classes={{selected: classes.Selected}}>
                <Text color="inherit">Profile Settings</Text>
            </ListItem>
            <ListItem button selected={props.selected===2} onClick={() => props.select(2)} className={classes.classList} classes={{selected: classes.Selected}}>
                <Text color="inherit">Profile Picture</Text>
            </ListItem>
            <ListItem button selected={props.selected===3} onClick={() => props.select(3)} className={classes.classList} classes={{selected: classes.Selected}}>
                <Text color="inherit">Following</Text>
            </ListItem>
        </List>
    )
}

export default withStyles (styles) (OptionsList);
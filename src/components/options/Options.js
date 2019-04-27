import React, { Component } from 'react';
import { Wrapper, Flex, Text } from '../styled-components';
import ProfilePicture from './ProfilePicture';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    Content: {
        flex: 1,
        margin: "30px 0 0 20px",
    },
    List: {
        width: "20%",
        marginTop: "30px",
    },
    classList: {
        "&:hover": {
            backgroundColor: "rgb(254, 174, 186)",
        }
    },
    Selected: {
        backgroundColor: "rgb(254, 74, 86) !important",
        color: "white",
    }
});

class Options extends Component {
    state = {
        selected: 0,
    }

    handleClick = (index) => {
        this.setState({selected: index});
    }
    
    render() { 
        const { classes } = this.props;

        return (
            <Wrapper>
                <Flex>
                    <List className={classes.List}>
                        <ListItem button selected={this.state.selected===0} onClick={() => this.handleClick(0)} className={classes.classList} classes={{selected: classes.Selected}}>
                            <Text color="inherit">User Settings</Text>
                        </ListItem>
                        <ListItem button selected={this.state.selected===1} onClick={() => this.handleClick(1)} className={classes.classList} classes={{selected: classes.Selected}}>
                            <Text color="inherit">Profile Settings</Text>
                        </ListItem>
                        <ListItem button selected={this.state.selected===2} onClick={() => this.handleClick(2)} className={classes.classList} classes={{selected: classes.Selected}}>
                            <Text color="inherit">Profile Picture</Text>
                        </ListItem>
                        <ListItem button selected={this.state.selected===3} onClick={() => this.handleClick(3)} className={classes.classList} classes={{selected: classes.Selected}}>
                            <Text color="inherit">Following</Text>
                        </ListItem>
                    </List>
                    <div className={classes.Content}>
                        <ProfilePicture />
                    </div>
                </Flex>
            </Wrapper>
        );
    }
}

Options.propTypes = {
    classes: PropTypes.object.isRequired,
};
 
export default withStyles (styles) (Options);
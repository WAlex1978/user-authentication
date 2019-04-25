import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../services/user';

class User extends Component {
    state = {
        user: null,
        error: null,
    }

    componentWillMount = () => {
        this.fetchUser();
    }

    fetchUser = async () => {
        const res = await getUser(this.props.history.location.pathname.slice(6));
        
        if (!res) {
            this.setState({error: "Server error"});
            return;
        }

        if (res.data && res.data.error) {
            this.setState({error: res.data.message});
            return;
        }

        if (res.data && res.data._id) {
            this.setState({user: res.data});
            return;
        }
    }

    render() { 
        return (
            <div>
                User
            </div>
        );
    }
}
 
export default withRouter (User);
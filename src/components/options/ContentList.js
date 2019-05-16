import React from 'react';
import UserSettings from './UserSettings';
import ProfilePicture from './ProfilePicture';

const ContentList = (props) => {
    switch (props.selected) {
        case 0: 
            return <UserSettings />;

        case 1: 
            return null;

        case 2: 
            return <ProfilePicture />;

        case 3: 
            return null;
            
        default: 
            return null;
    }
}

export default ContentList;
import React from 'react';
import UserProfile from './UserProfile';

const containerStyle = {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateRows: 'minmax(500px, 1fr)'
};

export default [
  {
    story: 'For publishing',
    renderStory: () => {
      return (
        <div style={containerStyle}>
          <div>
            <UserProfile data={{
              "displayName": null,
              "email": "test@gmail.com",
              "emailVerified": false,
              "isAnonymous": false,
              "phoneNumber": null,
              "photoURL": null,
              "uid": "FXlpf0cQ8paDPP0APv465VyWeoQ2",
              "providerId": "firebase"
            }} />
          </div>
        </div>
      );
    },
  }
];
import React from 'react';
import SignInForm from './SignInForm';

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
            <SignInForm />
          </div>
        </div>
      );
    },
  }
];
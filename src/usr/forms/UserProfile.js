import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const rootStyle = {
  padding: '2em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

/*
  UserProfile displays the user account details in JSON format
 */
class UserProfile extends React.Component {
  static propTypes = {
    // user account data
    data: PropTypes.object,
    // used to indicate the loading process while the data is fetching
    isLoading: PropTypes.bool,
    // fired when the component is mounted first time on the page
    onMount: PropTypes.func,
  };

  static defaultProps = {
    data: null,
    isLoading: false,
    onMount: () => {},
  };

  componentDidMount () {
    this.props.onMount();
  }

  render() {
    const { data, isLoading } = this.props;
    return (
      <div style={rootStyle}>
        {isLoading
          ? (
            <Typography align="center" variant="subtitle2">Loading...</Typography>
          )
          : (
            <div>
              <Typography align="center" variant="h4">User Profile</Typography>
              <pre>
                <code>{JSON.stringify(data, null, 4)}</code>
              </pre>
            </div>
          )
        }
      </div>
    );
  }
}

export default UserProfile;

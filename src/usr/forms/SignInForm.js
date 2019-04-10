import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import s from './SignInForm.module.css';

/*

SignInForm provides email and password input for the user.

***Does not provide the entered values checking.***

 */
class SignInForm extends React.Component {

  constructor (props) {
    super(props);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  handleSubmit = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onSubmit({
      email: this.emailInput.current.value,
      password: this.passwordInput.current.value
    });
  };

  handleCreateNew = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onCreateNew();
  };

  render () {
    const {inputErrors, error, isLoading} = this.props;
    return (
      <form className={s.root}>
        <div className={s.cell}>
          <Typography variant="h4">Sign In</Typography>
        </div>
        {error && !isLoading && (
          <Typography align="center" variant="subtitle2" color="error">{error}</Typography>
        )}
        {isLoading && (
          <Typography align="center" variant="subtitle2">Loading...</Typography>
        )}
        <div className={s.cell}>
          <TextField
            inputRef={this.emailInput}
            variant="outlined"
            fullWidth={true}
            label="Email"
            type="text"
            disabled={isLoading}
            helperText="Enter a valid email address. Should be not empty."
            error={inputErrors && inputErrors['email']}
          />
        </div>
        <div className={s.cell}>
          <TextField
            inputRef={this.passwordInput}
            variant="outlined"
            fullWidth={true}
            label="Password"
            disabled={isLoading}
            type="password"
            helperText="Password must be more than 6 characters. Should be not empty."
            error={inputErrors && inputErrors['password']}
          />
        </div>
        <div className={s.cell}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </div>
        <div className={s.cell}>
          <Button
            fullWidth={false}
            variant="text"
            size="small"
            onClick={this.handleCreateNew}
            disabled={isLoading}
          >
            Create new account
          </Button>
        </div>
      </form>
    );
  }
}

SignInForm.propTypes = {
  // used for indicating the input values errors
  inputErrors: PropTypes.object,
  // used for indicating of loading process
  isLoading: PropTypes.bool,
  // displays a global error text in top of the form
  error: PropTypes.string,
  // fires when the user clicks on the `Submit` buttom
  onSubmit: PropTypes.func,
  // fires when the user clicks on the `Create new account` button
  onCreateNew: PropTypes.func,
};

SignInForm.defaultProps = {
  inputErrors: {},
  isLoading: false,
  error: '',
  onSubmit: () => {},
  onCreateNew: () => {},
};

export default SignInForm;

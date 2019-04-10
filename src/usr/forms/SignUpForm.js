import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import s from './SignUpForm.module.css';

/*

SignUpForm provides email and password input for the user.

***Does not provide the entered values checking.***

 */
class SignUpForm extends React.Component {

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

  render () {
    const {inputErrors, error, isLoading} = this.props;
    return (
      <form className={s.root}>
        <div className={s.cell}>
          <Typography variant="h4">Sign Up</Typography>
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
            type="password"
            disabled={isLoading}
            helperText="Password must be more than 6 characters. Should be not empty."
            error={inputErrors && inputErrors['password']}
          />
        </div>
        <div className={s.cell}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
            disabled={isLoading}
          >
            Create Account
          </Button>
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  // used for indicating the input values errors
  inputErrors: PropTypes.object,
  // used for indicating of loading process
  isLoading: PropTypes.bool,
  // displays a global error text in top of the form
  error: PropTypes.string,
  // fires when the user clicks on the `Submit` buttom
  onSubmit: PropTypes.func,
};

SignUpForm.defaultProps = {
  inputErrors: {},
  isLoading: false,
  error: '',
  onSubmit: () => {},
};

export default SignUpForm;

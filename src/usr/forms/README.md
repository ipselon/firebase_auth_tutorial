## Forms and view for the authentication in Firebase

### SignInForm

SignInForm provides email and password input for the user.

Does not provide the entered values checking. 

***Properties:***
* `inputErrors` - used for indicating the input values errors
* `isLoading` - used for indicating of loading process
* `error` - displays a global error text in top of the form
* `onSubmit` - fires when the user clicks on the `Submit` buttom
* `onCreateNew` - fires when the user clicks on the `Create new account` button

***Usage:***

Connect `onSubmit` event to `authUser` function. 
And the outputs of the `authUser` function connect to the corresponding props in `SignInForm` 

### SignUpForm

SignUpForm provides email and password input for the user.

Does not provide the entered values checking.

***Properties:***
* `inputErrors` - used for indicating the input values errors
* `isLoading` - used for indicating of loading process
* `error` - displays a global error text in top of the form
* `onSubmit` - fires when the user clicks on the `Create Account` button

***Usage:***

Connect `onSubmit` event to `createUser` function. 
And the outputs of the `createUser` function connect to the corresponding props in `SignUpForm` 

### UserProfile

UserProfile displays the user account details in JSON format

***Properties:***
* `data` - user account data
* `isLoading` - used to indicate the loading process while the data is fetching
* `onMount` - fired when the component is mounted first time on the page

***Usage:***

Connect `onMount` event to `checkUserProfile` function. 
And the `authenticated` output of the `checkUserProfile` function connect to the `data` prop in `UserProfile` 

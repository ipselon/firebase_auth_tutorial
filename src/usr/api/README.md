## A list of functions tailored for the authentication flow in Firebase application

### initApplication

Init Firebase connection. No input parameters. No dispatches.

### checkUserProfile

  Checks if the local state has been initialized with user profile data fetched during the authentication process
  
  Dispatching:
 * **authenticated** - the userProfile object
 * **notAuthenticated** - fires when there is no userProfile object initialized. No value is dispatched.
 
### authUser

  Invokes the Firebase function with email and password to get the user profile

  Parameters:
 * **object** - object that holds `email` and `password` fields

  Dispatching:
 * **isLoading** - the boolean flag, `true` - the request is processed, `false` - the request is finished
 * **inputErrors** - the input errors indicators: `email`, `password`
 * **error** - the error text from the request
 * **userProfile** - fires when the request finished successfully, dispatches userProfile object
 * **success** - fires when the request finished successfully, no data dispatched

### createUser

  Invokes the Firebase function that creates user account with email and password.

  Parameters:
 * **object** - object that holds `email` and `password` fields

  Dispatching:
 * **isLoading** - the boolean flag, `true` - the request is processed, `false` - the request is finished
 * **inputErrors** - the input errors indicators: `email`, `password`
 * **userProfile** - fires when the request finished successfully, dispatches userProfile object
 * **success** - fires when the request finished successfully, no data dispatched
 
import pick from 'lodash/pick';
import firebase from 'firebase';

let localState = {
  userProfile: null
};

function getUserProfileDetails (credentialData) {
  let result = {};
  if (credentialData) {
    const {user} = credentialData;
    result = pick(user, [
      'displayName', 'email',
      'emailVerified', 'isAnonymous',
      'phoneNumber', 'photoURL',
      'uid', 'providerId',
    ]);
  }
  return result;
}

/*

  Init Firebase connection.

 */
export const initApplication = () => dispatch => {
  // Initialize Firebase
  let config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SEND_ID"
  };
  firebase.initializeApp(config);
};

/*
  Checks if the local state has been initialized with user profile data fetched during the authentication process
  
  Dispatching:
 * **authenticated** - the userProfile object
 * **notAuthenticated** - fires when there is no userProfile object initialized. No value is dispatched.

 */
export const checkUserProfile = () => dispatch => {
  if (!localState.userProfile) {
    dispatch('notAuthenticated');
  } else {
    dispatch('authenticated', localState.userProfile);
  }
};

/*
  Invokes the Firebase function with email and password to get the user profile

  Parameters:
 * **object** - object that holds `email` and `password` fields

  Dispatching:
 * **isLoading** - the boolean flag, `true` - the request is processed, `false` - the request is finished
 * **inputErrors** - the input errors indicators: `email`, `password`
 * **error** - the error text from the request
 * **userProfile** - fires when the request finished successfully, dispatches userProfile object
 * **success** - fires when the request finished successfully, no data dispatched

 */
export const authUser = ({email, password}) => async dispatch => {
  const inputErrors = {};
  if (!email || email.length === 0) {
    inputErrors.email = true;
  } if (!password || password.length === 0) {
    inputErrors.password = true;
  }
  if (!inputErrors.email && !inputErrors.password) {
    dispatch('isLoading', true);
    try {
      const credentialData = await firebase.auth().signInWithEmailAndPassword(email, password);
      localState.userProfile = getUserProfileDetails(credentialData);
      dispatch('userProfile', localState.userProfile);
      dispatch('success');
    } catch (error) {
      dispatch('error', error.message);
    }
    dispatch('isLoading', false);
  } else {
    dispatch('inputErrors', inputErrors);
  }
};

/*
  Invokes the Firebase function that creates user account with email and password.

  Parameters:
 * **object** - object that holds `email` and `password` fields

  Dispatching:
 * **isLoading** - the boolean flag, `true` - the request is processed, `false` - the request is finished
 * **inputErrors** - the input errors indicators: `email`, `password`
 * **userProfile** - fires when the request finished successfully, dispatches userProfile object
 * **success** - fires when the request finished successfully, no data dispatched

 */
export const createUser = ({email, password}) => async dispatch => {
  const inputErrors = {};
  if (!email || email.length === 0) {
    inputErrors.email = true;
  } if (!password || password.length === 0) {
    inputErrors.password = true;
  }
  if (!inputErrors.email && !inputErrors.password) {
    dispatch('isLoading', true);
    try {
      const credentialData = await firebase.auth().createUserWithEmailAndPassword(email, password);
      localState.userProfile = getUserProfileDetails(credentialData);
      dispatch('userProfile', localState.userProfile);
      dispatch('success');
    } catch (error) {
      dispatch('error', error.message);
    }
    dispatch('isLoading', false);
  } else {
    dispatch('inputErrors', inputErrors);
  }
};


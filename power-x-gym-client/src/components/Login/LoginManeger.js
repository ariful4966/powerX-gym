// import { initializeApp } from 'firebase/app';
import {initializeApp} from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import firebaseConfig from './firebase.config';

export const firebaseInitilization = () => {
   initializeApp(firebaseConfig)
}

export const handleGoogleSign = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            sessionStorage.setItem('userInfo', result.user.accessToken)
            return result.user
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            return error
            // ...
        });
}

export const haldleLogout = () => {

    const auth = getAuth();
    return signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

}

export function PrivateRoute({ children, ...rest }) {
    const user = useSelector(state=>state.authReducer);

    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.isLogin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
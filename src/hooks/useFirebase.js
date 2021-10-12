import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const auth = getAuth();

    // google signin
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        // .catch(error => {
        //     setError(error.message)
        // })
    }

    // twitter signin
    const signInUsignTwitter = () => {
        signInWithPopup(auth, twitterProvider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }

    // sign out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
    }

    // observe the state change or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
        return unsubscribe;
    }, [])

    return {
        user,
        signInUsingGoogle,
        signInUsignTwitter,
        logOut
    }
}

export default useFirebase;
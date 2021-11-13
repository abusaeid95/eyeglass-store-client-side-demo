import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

// initialize firebase app
initializeAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setisAdminLoading] = useState(false);



  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();
  // Registration Action
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        history.replace("/");
        saveUser(email,name,"POST")
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
}

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));
}

  // onAuthStateChanged
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // logout Action

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
      // save user
      const saveUser = (email, displayName, method) => {
        const users = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        }).then(res => res.json())
            .then(data => console.log(data))
    }

    
    // is Admin
    useEffect(() => {
      fetch(`http://localhost:5000/users/${user?.email}`)
          .then(res => res.json())
          .then(data => {
             
            
              setIsAdmin(data.admin)
              setisAdminLoading(false)
          })
  }, [user?.email])

  return {
    user,
    isAdminLoading,
    registerUser,
    loginUser,
    logout,
    isLoading,
    isAdmin,
    authError,
    signInWithGoogle
  };
};
export default useFirebase;

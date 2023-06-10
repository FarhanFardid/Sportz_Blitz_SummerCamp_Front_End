import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userUpdate = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    return signOut(auth);
  };

  const google = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // if(currentUser){
      //     axios.post('http://localhost:5000/jwt', {email: currentUser.email})
      //     .then (data =>{
      //         // console.log(data.data.token);
      //         localStorage.setItem('access-token', data.data.token)
      //         setLoading(false);
      //     })
      // }
      // else{
      //     localStorage.removeItem('access-token')
      // }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  const authInfo = {
    createUser,
    userSignIn,
    userUpdate,
    logOut,
    user,
    loading,
    google,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

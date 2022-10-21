import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { startEditingYoga, startLoadingSchedule } from "../store/activities/thunks";
import { login, logout } from "../store/auth/authSlice";
import { startLoadingActivities } from "../store/auth/thunks";
import { startLoadingUserData } from "../store/users/thunks";


export const useCheckAuth = () => {



  const { status, errorMessage } = useSelector(state => state.auth);

  
  const dispatch = useDispatch();

  useEffect(() => {

    onAuthStateChanged( FirebaseAuth, async( user ) => {
      if (!user) return dispatch(logout( {errorMessage}));

      const { uid, email, displayName, photoURL} = user;

      dispatch( login({uid, email, displayName, photoURL}));

      dispatch(startLoadingActivities());

      dispatch(startLoadingSchedule());

      dispatch(startLoadingUserData())

      dispatch(startEditingYoga());
  
      
    } )
    
  }, [])

  return {
    status
  }
};

import { doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { loadingUserDataFirebase } from '../../helpers/loadingUserDataFirebase';
import { setNewActivity, setUserData, suscribingUser, unSuscribingUser } from './usersSlice';


export const startSuscribingUser = () =>{
    return async(dispatch, getState) => {
        
        const { uid, displayName } = getState().auth;

        const newUser = {
            suscripted: true,
            activities: [],
            numberOfActivities: 0

        }
        const newDoc = doc( FirebaseDB, `usuarios/${uid}/userData`, displayName);
        await setDoc(newDoc, newUser);

        newUser.id = newDoc.id

        dispatch(suscribingUser(newUser))
    }
};

export const StartunSuscribingUser = () =>{
    return async(dispatch, getState) => {
        
        const { uid, displayName } = getState().auth;

        const unSuscribed = {
            suscripted: false,
            activities: [],
            numberOfActivities: 0

        }
        const newDoc = doc( FirebaseDB, `usuarios/${uid}/userData`, displayName);
        await setDoc(newDoc, unSuscribed);

        unSuscribed.id = newDoc.id

        dispatch(unSuscribingUser(unSuscribed))
    }

}

export const startLoadingUserData = () =>{
    return async(dispatch, getState) => {
        
        const { uid, displayName } = getState().auth;

       const userData = await loadingUserDataFirebase( uid );
        if(userData !== undefined){
            userData.id = displayName
            dispatch(setUserData(userData))
        }
       
    }
};

export const startSettingNewActivity = (item) =>{
    return async(dispatch, getState) =>{

        dispatch(setNewActivity(item));
        
        const { displayName, uid } = getState().auth;
        const { userData } = getState().users;


        const activitiesData = {

            activities: userData.activities,
            numberOfActivities: userData.numberOfActivities,
            suscripted: userData.suscripted,

        }

        const newDoc = doc(FirebaseDB,`usuarios/${uid}/userData`, displayName )
        const docRef = await setDoc(newDoc, activitiesData);

    }
};
export const startEditingActivtiesList = () =>{
    return async (dispatch, getState ) =>{

        
        const { displayName, uid } = getState().auth;
        const { userData } = getState().users;
        console.log(userData.activities);


        const activitiesData = {

            activities: userData.activities,
            numberOfActivities: userData.numberOfActivities,
            suscripted: userData.suscripted,

        }

        const newDoc = doc(FirebaseDB,`usuarios/${uid}/userData`, displayName )
        const docRef = await setDoc(newDoc, activitiesData);

    }
};




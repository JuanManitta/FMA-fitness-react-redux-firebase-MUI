import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { loadingUserDataFirebase } from '../../helpers/loadingUserDataFirebase';
import { setNewActivity, setUserData, suscribingUser } from './usersSlice';


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


        const newActivity = {

            activities: userData.activities,
            numberOfActivities: userData.numberOfActivities,
            suscripted: userData.suscripted,

        }

        const newDoc = doc(FirebaseDB,`usuarios/${uid}/userData`, displayName )
        const docRef = await setDoc(newDoc, newActivity);

        


        
    }
}

import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { loadingUserDataFirebase } from '../../helpers/loadingUserDataFirebase';
import { startEditingSchedule } from '../activities/thunks';
import { addNewActivity, loadingUserData, loadingUserData2} from './usersSlice'



export const startSchedule = () =>
{
    return async( dispatch, getState) => {

        const  { uid } = getState().auth;
        const  { crossfit } = getState().activities;

       

        if( crossfit[0].avalible <= 0) return;
        // if( numberOfActivities >= 2 ) return;

        //Cargar a Firebase la nueva actividad asiganda

        const newActivity = {
            name: 'crossfit',
            days: 'Lunes, Miercoles, Viernes',
            time: '9:00am'
        };

        
        const newDoc = doc( collection( FirebaseDB, `${uid}/activities/activity`) );
        const resp = await setDoc(newDoc, newActivity);

        newActivity.id = newDoc.id

        dispatch(addNewActivity( newActivity ));
        dispatch(startEditingSchedule());
    }
};

export const startLoadingUserData = () =>{

    return async(dispatch, getState) =>{

        const { uid } = getState().auth
        const {numberOfActivities, suscripted} = await loadingUserDataFirebase(uid);

        dispatch(loadingUserData(numberOfActivities));
        dispatch(loadingUserData2(suscripted));
    }
};

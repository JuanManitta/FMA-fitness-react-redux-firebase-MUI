import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import {addNewActivity} from './usersSlice'

export const startSchedule = () =>
{
    return async( dispatch, getState) => {

        const {uid} = getState().auth;


        const newActivity = {
            name: 'crossfit',
            days: 'Lunes, Miercoles, Viernes',
            time: '9:00am'
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/activities/activity`) );
        const resp = await setDoc(newDoc, newActivity);

        newActivity.id = newDoc.id
        dispatch(addNewActivity( newActivity ))
        
    }
}
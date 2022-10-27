import { collection, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadSchedule } from "../../helpers/loadSchedule";
import { editSchedule, setSchedule } from "./activitiesSlice";


export const startSetingSchedule = () =>{

    return async(dispatch, getState) =>{

        const { activities } = getState().activities
        const Id = 'activities'
        const editedActivities = { activities }

        const newDoc = doc(FirebaseDB,"schedule", Id)
        const docRef = await setDoc(newDoc, editedActivities)
  
    }
}

export const startEditingSchedule = (item) =>{
    return async(dispatch) =>{

        dispatch(editSchedule(item))
        dispatch(startSetingSchedule(item))
   
    }
};

export const startLoadingSchedule = () =>{
    return async(dispatch) =>{

        const schedule = await loadSchedule();
        
        schedule.forEach(item =>{
            
            dispatch(setSchedule(item))

        })

    }
}


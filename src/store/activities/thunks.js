import { collection, doc, setDoc } from "firebase/firestore/lite";
import { useEffect } from "react";
import { FirebaseDB } from "../../firebase/config";
import { loadActivitiesSchedule } from "../../helpers/loadActivities"
import { editCrossfitSchedule, loadingSchedule, setNewSchedule, setYoga } from "./activitiesSlice"

export const startLoadingSchedule = () => {

    return async(dispatch) => {

        const schedule = await loadActivitiesSchedule();

        dispatch(loadingSchedule(schedule));
    }

};

export const startEditingSchedule = () =>{

    return async(dispatch, getState ) =>{

        dispatch(editCrossfitSchedule());



        const { crossfit } = getState().activities;
        const newScheduleCrossfit = crossfit[0]

        
        const newSchedule = doc( FirebaseDB, `/Activities/crossfit/lunMierVier/8am`);
        const respSchedule = await setDoc(newSchedule, newScheduleCrossfit );


        dispatch(setNewSchedule(newScheduleCrossfit))
    }
};

export const startEditingYoga = () =>{
    return async(dispatch) =>{

        const data =
            {
                time: '8am',
                capacity: 10,
                avalible: 10
            }
    

        const newDoc = doc(collection( FirebaseDB, `/Activities/yoga/lunMierVier` ));
        const resp = await setDoc( newDoc, data );
        

    }

}


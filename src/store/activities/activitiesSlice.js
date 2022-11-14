import { createSlice } from '@reduxjs/toolkit';
import {schedule} from '../../data/schedule'


export const activitiesSlice = createSlice({
    name: 'activities',
    initialState: {
        activities: [],
        isLoading: false,
    },

    reducers: {
        setSchedule: ( state, action ) =>{
            state.activities.push(action.payload)

        },

        editSchedule: ( state, action ) =>{
            const activitySelected = action.payload;
            const id = activitySelected.id
            
            const editActivity = state.activities.filter(item => item.id === id);
            if ( editActivity[0].capacity >= 0)
            editActivity[0].capacity--
        },
        deleteActivity: ( state, action ) =>{
            const activitySelected = action.payload;
            const id = activitySelected.id
            
            const editActivity = state.activities.filter(item => item.id === id);
            if ( editActivity[0].capacity >= 10 ) return;

            editActivity[0].capacity++
        },
        cleanActivitiesData: (state, action ) =>{
            state.activities = [],
            state.isLoading  = false
        }
       
    }
});


export const { 
    editSchedule,
    deleteActivity,
    setSchedule,
    cleanActivitiesData,
    

} = activitiesSlice.actions;
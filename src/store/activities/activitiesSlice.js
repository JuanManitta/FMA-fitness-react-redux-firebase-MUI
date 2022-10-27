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
            editActivity[0].capacity--
        }
       
    }
});


export const { 
    editSchedule,
    setSchedule
    

} = activitiesSlice.actions;
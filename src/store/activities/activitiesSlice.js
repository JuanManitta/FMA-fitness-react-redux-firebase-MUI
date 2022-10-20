import { createSlice } from '@reduxjs/toolkit';
export const activitiesSlice = createSlice({
    name: 'activities',
    initialState: {
        
    },

    reducers: {
        loadingSchedule: (state, action) => {
            state.crossfit = (action.payload)

        },
        editCrossfitSchedule: (state, action ) => {
           state.crossfit[0].avalible = state.crossfit[0].avalible -1
        },
        setNewSchedule: (state, action) => {
            state.crossfit[0] = (action.payload)
        },
       
    }
});


// Action creators are generated for each case reducer function
export const { 
    loadingSchedule,
    editCrossfitSchedule,
    setNewSchedule,

} = activitiesSlice.actions;
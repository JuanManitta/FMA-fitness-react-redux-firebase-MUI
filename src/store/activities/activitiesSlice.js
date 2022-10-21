import { createSlice } from '@reduxjs/toolkit';
export const activitiesSlice = createSlice({
    name: 'activities',
    initialState: {
        yoga: []
        
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
        setYoga: (state, action) =>{
            state.yoga.push(action.payload)
        }
       
    }
});


// Action creators are generated for each case reducer function
export const { 
    loadingSchedule,
    editCrossfitSchedule,
    setNewSchedule,
    setYoga

} = activitiesSlice.actions;
import { createSlice } from '@reduxjs/toolkit';
export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isSaving: false,
        suscripted: false,
        activities: [],
        numberOfActivities: null,
        
    },
    reducers: {
        addNewActivity: (state, action  ) => {
            state.activities.push( action.payload )
        },
        setActivities: (state, action ) =>{
            state.activities = (action.payload)
        },
        loadingUserData: (state, action) =>{
            state.numberOfActivities = (action.payload)
        },
        loadingUserData2: (state, action) =>{
            state.suscripted = (action.payload)
        }
        
    }

    
});


export const { 
    addNewActivity,
    setActivities,
    loadingUserData,
    loadingUserData2

 } = usersSlice.actions;
import { createSlice } from '@reduxjs/toolkit';
export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isSaving: false,
        suscripted: false,
        activities: [],
        activity: null
    },
    reducers: {
        addNewActivity: (state, action  ) => {
            state.activities.push( action.payload )
        },
        
    }

    
});


// Action creators are generated for each case reducer function
export const { addNewActivity } = usersSlice.actions;
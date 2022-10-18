import { createSlice } from '@reduxjs/toolkit';
export const activitiesSlice = createSlice({
    name: 'activities',
    initialState: {
        crossfit: [
            {
                days: {}
            }
        ]
        
    },
    reducers: {
        increment: (state, /* action */ ) => {
           
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = activitiesSlice.actions;
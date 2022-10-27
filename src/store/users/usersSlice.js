import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    
    name: 'users',
    initialState: {
        userData: {
            suscripted: false,
            numberOfActivities: 0
        },
       
    },
    reducers: {
        suscribingUser: (state, action) =>{
            state.userData = (action.payload)
        },
        setUserData: (state, action ) =>{
            const data = action.payload
            state.userData = data
    
        },
        cleanUserData : (state, action) =>{
            state.userData = { suscripted: false}
        },
        setNewActivity: (state, action) =>{

            const activity = action.payload
            const newActivity = {
                id: activity.id,
                days: activity.days,
                time: activity.time
            }
            
            state.userData.activities.push(newActivity)
            state.userData.numberOfActivities++


        }
    }

    
});


export const {
    suscribingUser,
    setUserData,
    cleanUserData,
    setNewActivity
    

 } = usersSlice.actions;
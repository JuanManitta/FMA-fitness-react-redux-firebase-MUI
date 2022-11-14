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
        unSuscribingUser: (state, action) =>{
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
                name: activity.name,
                days: activity.days,
                time: activity.time
            }
            state.userData.activities.push(newActivity)
            state.userData.numberOfActivities++
        },
        deleteActivityUser: (state, action) =>{
            const newActivities = action.payload
            const id = newActivities.id

            state.userData.activities = state.userData.activities.filter( item => item.id !== id)
            state.userData.numberOfActivities--
        
        },
        
        cleanUserData: (state, action) =>{
            state.userData = {
                suscripted: false,
                numberOfActivities: 0
            }
        }
    }

    
});


export const {
    suscribingUser,
    setUserData,
    setNewActivity,
    cleanUserData,
    unSuscribingUser,
    deleteActivityUser
    

 } = usersSlice.actions;
import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadSchedule = async() =>{

    const collectionRef = collection (FirebaseDB, `schedule` );
    const snapshots = await getDocs(collectionRef);
    
    const scheduleData = []

    snapshots.forEach(snap => {
        scheduleData.push({...snap.data()})
    });

    const[data] = scheduleData
    const {activities} = data

    

    return activities;

}; 

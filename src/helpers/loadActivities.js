import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async(uid = '') => {

    if (!uid) throw new Error('El UID del usuario no existe');

    const collectionRef = collection(FirebaseDB, `${uid}/activities/activity` );
    const docs = await getDocs(collectionRef);

    const activities = [];
    docs.forEach( doc => {
        activities.push({id: doc.id, ...doc.data()});
    });

    return activities;

};


export const loadActivitiesSchedule = async() =>{

    const docRef = collection(FirebaseDB,`/Activities/crossfit/lunMierVier` );
    const docs = await getDocs(docRef);
    
    const schedule = []
    docs.forEach( doc =>{
        schedule.push({id: doc.id,...doc.data()})
    })

    return schedule
 
} 
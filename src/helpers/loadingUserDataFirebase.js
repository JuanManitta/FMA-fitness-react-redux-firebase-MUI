import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";




export const loadingUserDataFirebase = async( uid = '') =>{



    const docRef = collection(FirebaseDB,`${uid}` );
    const docs = await getDocs(docRef);
    
    
const data = []
docs.forEach(doc => {
    data.push({...doc.data() })
    
})

const [ number, suscription ] = data;

const { numberOfActivities } = number;
const { suscripted } = suscription

return {numberOfActivities, suscripted}
    
 
}; 

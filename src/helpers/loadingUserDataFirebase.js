import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadingUserDataFirebase = async( uid = '') =>{

    const collectionRef = collection (FirebaseDB, `usuarios/${ uid }/userData` );
    const docs = await getDocs(collectionRef);
    
    const userData = []

    docs.forEach( doc =>{
        userData.push({ suscripted: false,...doc.data()})
    });

    const [data] = userData

   return data
 
}; 

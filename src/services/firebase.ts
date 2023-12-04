import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getAllUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    const users = snapshot.docs.map((doc) => doc.data());

    return users;
}

export const getAllProfessionalsUsers = async () => {
    
    const users = await getAllUsers();
    const professionalsUsers = users.filter((user) => user.isProfessional);
    console.log('professionalsUsers', professionalsUsers)
    return professionalsUsers
}
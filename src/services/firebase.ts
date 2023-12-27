import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useUser } from "../stores/User";

export const getAllUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    const users = snapshot.docs.map((doc) => doc.data());

    return users;
}

export const getAllProfessionalsUsers = async () => {
    
    const users = await getAllUsers();
    const professionalsUsers = users.filter((user) => user.isProfessional);
    return professionalsUsers
}

export const getUserByDB = async () => {
    const {setUid, setUser, user} = useUser.getState()
    const querySnapshot = await getDocs(collection(db, "users"));
    console.log('querySnapshot.docs', querySnapshot.docs[0].data())
    const userByDb = querySnapshot.docs?.find((doc) => doc.data().uid === user.uid);
    console.log('userByDb', userByDb?.data())
    console.log('userByDb?.data()', userByDb?.data().id)
    setUid(userByDb?.data().uid)
    setUser(userByDb?.data())
  }
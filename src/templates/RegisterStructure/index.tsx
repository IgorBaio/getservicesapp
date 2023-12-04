import React, { useEffect, useState } from "react";
import { PageContainer } from "../../Molecules/PageContainer";
import { ButtonRegister, ButtonRegisterContainer, InputContainer, InputRegister, LoginLink, LoginLinkContainer, LoginText, RegisterText, TitleContainer, TitlePage } from "./styles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getUserStorage } from "../../functions/getUser";
import { colors } from "../../Styles/theme";
import { db, firebaseConfig } from "../../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { MaterialIcons } from '@expo/vector-icons';
import { useUser } from "../../stores/User";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { UserModel } from "../../stores/User/types";

export const RegisterStructure = ({ navigation }: any) => {
    const [user, setUserState] = useState();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [messageError, setMessageError] = useState<string>();

    const { setUser } = useUser(state => state)

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const onAuthStateChanged = async () => {
        if (email !== "" && password !== "") {
            setMessageError("");
            createUserWithEmailAndPassword(auth, email, password)
              .then( async (userCredential) => {
                // Signed in 
                
                const user = userCredential.user;
                console.log('userCredential', userCredential)
                console.log('user', user)
                const userModel: UserModel = {
                    email: user.email || "",
                    displayName: "",
                    photoURL: "",
                    phoneNumber: "",
                    uid: user.uid,
                    services: [],
                    country: "",
                    description: "",
                    isProfessional: false,
                    id: "",

                }
                console.log('userModel', userModel)
                AsyncStorage.setItem('@user', JSON.stringify(userModel))
                try {
                    const docRef = await addDoc(collection(db, "users"), userModel);
                    userModel.id = docRef.id
                    try {
      
                        const docRefUpdate = await updateDoc(doc(db, "users", userModel.id), userModel);
                        console.log("Document updated with ID: ", docRefUpdate);
                      } catch (e) {
                        console.error("Error updating document: ", e);
                      }
                    setUser(userModel)
                    console.log("Document written with ID: ", docRef.id);
                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });


           
        } else {
            setMessageError("Preencha os campos");
        }
    };

    useEffect(() => {
        AsyncStorage.removeItem('@user')
    }, [])


    return (
        <PageContainer>
            <>
                <TitleContainer>
                    <TitlePage>Register.</TitlePage>
                </TitleContainer>
                <InputContainer>
                    <InputRegister placeholder="Email" 
                        value={email}
                        onChangeText={(text: string) => setEmail(text)}
                    />
                    <InputRegister
                        placeholder="Password"
                        secureTextEntry={true}
                        marginTop={'2%'}
                        value={password}
                        onChangeText={(text: string) => setPassword(text)}

                    />

                </InputContainer>
                <LoginLinkContainer>
                    <LoginLink onPress={() => navigation.navigate('LoginScreen')}>
                        <LoginText>Sign in</LoginText>
                    </LoginLink>
                </LoginLinkContainer>
                <ButtonRegisterContainer>
                    <ButtonRegister onPress={onAuthStateChanged} >
                        <RegisterText>Register </RegisterText>
                        <MaterialIcons name="login" size={24} color={colors.whitePrimary} />
                    </ButtonRegister>
                </ButtonRegisterContainer>
            </>
        </PageContainer>
    )
}
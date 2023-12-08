import React, { useEffect, useState } from "react";
import { PageContainer } from "../../Molecules/PageContainer";
import { ButtonLogin, ButtonLoginContainer, InputContainer, InputLogin, LoginText, RegisterLink, RegisterLinkContainer, RegisterText, TitleContainer, TitlePage } from "./styles";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { getUserStorage } from "../../functions/getUser";
import { colors } from "../../Styles/theme";
import { firebaseConfig } from "../../../firebaseConfig";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { MaterialIcons } from '@expo/vector-icons';
import { useUser } from "../../stores/User";
import { GenericButton } from "../../Molecules/GenericButton";
import { GenericInput } from "../../Molecules/GenericInput";

export const LoginStructure = ({ navigation }: any) => {
    const [user, setUserState] = useState();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [messageError, setMessageError] = useState<string>();

    const { setUser } = useUser(state => state)

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const onAuthStateChanged = async () => {
        if (email !== "" && password !== "") {
            setMessageError("");
            const userAccount = await signInWithEmailAndPassword(auth, email, password)
                .catch((error) => {
                    if (error.code === "auth/user-not-found") {
                        Alert.alert("Atenção", "Usuário não encontrado");
                    }

                    if (error.code === "auth/invalid-email") {
                        Alert.alert("Atenção", "Este endereço de email é inválido!");
                    }
                });
            if (userAccount === undefined || userAccount === null) return;


            const user = {
                ...userAccount.user
            }

            AsyncStorage.setItem('@user', JSON.stringify(user))
            console.log('user.auth.displayName', user?.displayName)
            setUser(user)
            // user.displayName = "Igor"
            // updateCurrentUser(auth, user)
            //   dispatch({ type: "page", page: 0 });
            //   NavigationService.dispatch(() => {
            //     return CommonActions.navigate("AuthedStack", {
            //       screen: ROUTES.Home,
            //     });
            //   });
        } else {
            setMessageError("Preencha os campos");
        }
    };

    const googleLogin = async () => {
        const provider = new GoogleAuthProvider();

        const teste = await signInWithRedirect(auth, provider).then((result) => {
            console.log('result', result)
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            // const user = result.user;
            // console.log('user', user)
            // console.log('token', token)
            // // setUserState(user)
            // AsyncStorage.setItem('@user', JSON.stringify(user))
            // ...
        }
        ).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            console.log('error', error)
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }


    //todo call 
    const getUserData = async () => {
        const userData = await getUserStorage();
        console.log('userData', userData)
    }

    useEffect(() => {
        getUserData()
        // setUserState( getUserStorage());
    }, [])


    return (
        <PageContainer>
            <>
                <TitleContainer>
                    <TitlePage>Entrar.</TitlePage>
                </TitleContainer>
                <InputContainer>
                    
                    <GenericInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(text: string) => setEmail(text)}

                    />

                    <GenericInput
                        placeholder="Password"
                        secureTextEntry={true}
                        marginTop={'8%'}
                        value={password}
                        onChangeText={(text: string) => setPassword(text)}

                    />

                </InputContainer>
                <RegisterLinkContainer>
                    <RegisterLink onPress={() => navigation.navigate('RegisterScreen')}>
                        <RegisterText>Sign up</RegisterText>
                    </RegisterLink>
                </RegisterLinkContainer>

                <GenericButton onPress={onAuthStateChanged}>
                    <>
                        <LoginText>Entrar </LoginText>
                        <MaterialIcons name="login" size={24} color={colors.whitePrimary} />
                    </>
                </GenericButton>

            </>
        </PageContainer>
    )
}
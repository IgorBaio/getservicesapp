import React, { useState } from "react";
import { PageContainer } from "../../Molecules/PageContainer";
import { InputContainer, LoginButtonContainer, LoginText, RegisterLink, RegisterLinkContainer, RegisterText, TitleContainer, TitlePage } from "./styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { colors } from "../../Styles/theme";
import { firebaseConfig } from "../../../firebaseConfig";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { MaterialIcons } from '@expo/vector-icons';
import { useUser } from "../../stores/User";
import { GenericButton } from "../../Molecules/GenericButton";
import { GenericInput } from "../../Molecules/GenericInput";
import { AlertModal } from "../../Molecules/alert-modal";

export const LoginStructure = ({ navigation }: any) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [messageError, setMessageError] = useState<string>('');

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

        } else {
            setMessageError("Preencha os campos");
        }
    };


    return (
        <PageContainer>
            <>
                <TitleContainer>
                    <TitlePage>Entrar.</TitlePage>
                </TitleContainer>
                <InputContainer>

                    <GenericInput
                        placeholder="Email"
                        marginTop={'20%'}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(text: string) => setEmail(text)}

                    />

                    <GenericInput
                        placeholder="Password"
                        secureTextEntry={true}
                        marginTop={'5%'}
                        value={password}
                        onChangeText={(text: string) => setPassword(text)}

                    />

                </InputContainer>
                <RegisterLinkContainer>
                    <RegisterLink onPress={() => navigation.navigate('RegisterScreen')}>
                        <RegisterText>Registrar conta</RegisterText>
                    </RegisterLink>
                </RegisterLinkContainer>
                <LoginButtonContainer>
                    <GenericButton onPress={onAuthStateChanged}>
                        <>
                            <LoginText>Entrar </LoginText>
                            <MaterialIcons name="login" size={24} color={colors.whitePrimary} />
                        </>
                    </GenericButton>
                </LoginButtonContainer>

                <AlertModal
                    visible={!!messageError}
                    title={messageError}
                    onCancel={() => setMessageError("")}
                    confirmText="Ok"
                    onConfirm={() => setMessageError("")}
                    onSwipeCancel={() => setMessageError("")}
                />
            </>
        </PageContainer>
    )
}
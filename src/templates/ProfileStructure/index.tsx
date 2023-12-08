import React, { memo, useEffect, useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import {
  ButtonSave,
  ButtonSaveContainer,
  CellphoneTitle,
  CheckBoxContainer,
  ContentContainer,
  CountriesList,
  CountryButtonSelect,
  CountryContainer,
  CountryItem,
  CountryTitle,
  DataContainer,
  DescripitionInput,
  DescripitionText,
  DescriptionContainer,
  EditImageButton,
  EditProfileDataButton,
  ExitButton,
  ExitButtonContainer,
  ExitText,
  ImageContainer,
  ImageProfile,
  InputCellphone,
  InputCountry,
  InputName,
  LabelContainer,
  LabelText,
  NameEditContainer,
  NameTitle,
  SaveText,
  SectionSeparator,
  ServiceBadge,
  ServiceBadgeInput,
  ServiceBadgeInputText,
  ServicesBadgesContainer,
  ServicesMultiValueInput,
} from "./styles";
import { PageContainer } from "../../Molecules/PageContainer";
import { Platform } from "react-native";
import { useUser } from "../../stores/User";
import { SimpleLineIcons } from '@expo/vector-icons';
import { colors } from "../../Styles/theme";
import { CheckboxArea } from "../../Molecules/CheckboxArea";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { setPhotoURL } from "../../functions/setPhoto";
import { UserModel } from "../../stores/User/types";

const COUNTRIES = ['Brasil', 'Argentina', 'Chile', 'Colombia', 'Uruguai', 'Paraguai']

const suggestions = COUNTRIES.map(country => {
  return {
    id: country,
    text: country
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function ProfileStructure({ navigation }: any) {
  const services = ['servico 1', 'servico 2', 'servico 3', 'servico 1', 'servico 2', 'servico 3', 'servico 1', 'servico 2', 'servico 3']
  const [modalNameVisibility, setModalNameVisibility] = React.useState(false);

  const { user, setUser } = useUser(state => state)
  console.log('user ProfileStructure', user)

  const [state, setState] = useState({
    displayName: user.displayName || " - ",
    phoneNumber: user.phoneNumber || " - ",
    country: user.country || " - ",
    description: user.description || " - ",
    services: user.services || [],
    isProfessional: user.isProfessional || false,
    photoURL: user.photoURL || "",
    email: user.email || "",
    uid: user.uid || "",
  });
  console.log('state', state)

  const [isEditing, setIsEditing] = useState(false);
  const [searchingCountry, setSearchingCountry] = useState(false);
  const [servicesAutoFocus, setServicesAutoFocus] = useState(false);
  const [servicesList, setServicesList] = useState<string[]>(user.services || []);
  const [serviceInput, setServiceInput] = useState<string>('');

  const setServices =
    () => {
      const newServices: string[] = [...servicesList, serviceInput]
      setServicesList(newServices);
      setServiceInput('')
      setServicesAutoFocus(true)
      setState({ ...state, services: newServices })
    }

  const onRemoveService = (service: string) => {
    const newServices = servicesList.filter(item => item !== service)
    setServicesList(servicesList.filter(item => item !== service))
    setState({ ...state, services: newServices })
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });

    if (!result.canceled) {
      let image = ""
      // if(result.assets[0].base64) image = "data:image/jpeg;base64,"+ result.assets[0].base64
      // const newState = { ...state, photoURL: image }
      const newState = { ...state, photoURL: result.assets[0].uri }
      console.log('newState', newState)
      setState(newState);
      // setTimeout(() => {
      //   saveUser()
      // }
      // , 1000);
      // await AsyncStorage.setItem("uriProfile", result.uri);
    }
  };

  const saveUser = async () => {
    try {

      const docRef = await updateDoc(doc(db, "users", user.id), state);
      console.log("Document updated with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    finally {
      setIsEditing(false)
    }
  }

  useEffect(() => {
    if (state.photoURL) saveUser()
  }
    , [state.photoURL])

  useEffect(() => {
    setState({
      displayName: user.displayName || " - ",
      phoneNumber: user.phoneNumber || " - ",
      country: user.country || " - ",
      description: user.description || " - ",
      services: user.services || [],
      isProfessional: user.isProfessional || false,
      photoURL: user.photoURL || "",
      email: user.email || "",
      uid: user.uid || "",
    })
  }, [user])
  return (
    <PageContainer>
      <>
        <ContentContainer >
          <ImageContainer>
            <ImageProfile source={setPhotoURL(state as UserModel)} />
            <EditImageButton onPress={pickImage}>
              <MaterialIcons name="mode-edit" size={24} color="black" />
            </EditImageButton>
          </ImageContainer>
          <SectionSeparator />
          {!isEditing ?
            <DataContainer>
              <LabelContainer>
                <LabelText>Name:</LabelText>
              </LabelContainer>
              <NameEditContainer>

                <NameTitle>{state.displayName}</NameTitle>
                <EditProfileDataButton onPress={() => setIsEditing(true)}>
                  <MaterialIcons name="mode-edit" size={24} color="black" />
                </EditProfileDataButton>
              </NameEditContainer>
              <LabelContainer>
                <LabelText>Phone:</LabelText>
              </LabelContainer>
              <CellphoneTitle>{state.phoneNumber}</CellphoneTitle>
              <LabelContainer>
                <LabelText>Country:</LabelText>
              </LabelContainer>
              <CountryTitle>{state.country}</CountryTitle>
              <LabelContainer>
                <LabelText>Services:</LabelText>
              </LabelContainer>
              <ServicesBadgesContainer>
                {state.services.map((service, index) => {
                  return <ServiceBadge key={index}>{service}</ServiceBadge>
                })
                }
              </ServicesBadgesContainer>
              <DescriptionContainer>
                <LabelContainer>
                  <LabelText>Description:</LabelText>
                </LabelContainer>
                <DescripitionText>{state.description}</DescripitionText>
              </DescriptionContainer>

              <ExitButtonContainer>
                <ExitButton onPress={() => {
                  setUser({})
                  AsyncStorage.multiRemove(['@user', '@uid'])
                }}>
                  <ExitText>Exit</ExitText>
                  <MaterialIcons name="logout" size={24} color={colors.whitePrimary} />
                </ExitButton>
              </ExitButtonContainer>
            </DataContainer>
            : (
              <DataContainer>
                <InputName
                  placeholder="Name"
                  onChangeText={(text: string) => setState({ ...state, displayName: text })}
                  value={state.displayName === ' - ' ? '' : state.displayName}
                />

                <InputCellphone
                  placeholder="Cellphone"
                  keyboardType={'numeric'}
                  onChangeText={(text: string) => setState({ ...state, phoneNumber: text })}
                  value={state.phoneNumber === ' - ' ? '' : state.phoneNumber}
                />

                <CountryContainer>

                  <InputCountry
                    placeholder="Country"
                    onChangeText={(text: string) => setState({ ...state, country: text })}
                    value={state.country === ' - ' ? '' : state.country}
                    onFocus={() => setSearchingCountry(true)}
                    onBlur={() => Platform.OS === 'ios' ? setSearchingCountry(false) : {}}
                  />

                  {searchingCountry ? <CountriesList
                    height={COUNTRIES.filter(country => country?.toLowerCase().includes(state.country?.toLowerCase())).length}
                    data={[]}
                    keyExtractor={(item: string) => item}
                    ListHeaderComponent={() => {
                      return ['Brasil', 'Argentina', 'Chile', 'Colombia', 'Uruguai', 'Paraguai'].filter(country => country.toLowerCase().includes(state.country.toLowerCase())).map((country, index) => {
                        return <CountryButtonSelect onPress={() => {
                          setState({ ...state, country });
                          console.log('country', country)
                          setSearchingCountry(false)
                        }} >

                          <CountryItem key={index}>{country}</CountryItem>
                        </CountryButtonSelect>
                      }
                      )
                    }}
                    ListHeaderComponentStyle={{ marginVertical: 20 }}

                    renderItem={() => <></>}
                  /> :
                    (
                      <>
                        <ServicesMultiValueInput
                          key={servicesList.length}
                          placeholder="Services"
                          onChangeText={(text: string) => setServiceInput(text)}
                          value={serviceInput}
                          onSubmitEditing={() => setServices()}
                          autoFocus={servicesAutoFocus}
                        />

                        <ServicesBadgesContainer>
                          {servicesList.map((service, index) => {
                            return <ServiceBadgeInput key={index}
                              onPress={() => onRemoveService(service)
                              }
                            >
                              <ServiceBadgeInputText>
                                {service}
                              </ServiceBadgeInputText>
                              <SimpleLineIcons name="close" size={18} color={colors.whitePrimary} />
                            </ServiceBadgeInput>
                          })}
                        </ServicesBadgesContainer>

                        <DescripitionInput
                          placeholder="Description"
                          onChangeText={(text: string) => setState({ ...state, description: text })}
                          value={state.description === ' - ' ? '' : state.description}
                          multiline
                        />

                        <CheckBoxContainer>

                          <CheckboxArea isSelected={state.isProfessional} onPress={() => setState({ ...state, isProfessional: !state.isProfessional })} labelContent="I am a Professional" />
                        </CheckBoxContainer>

                        <ButtonSaveContainer>
                          <ButtonSave onPress={saveUser}>
                            <SaveText>Save</SaveText>
                            <MaterialIcons name="save" size={24} color={colors.whitePrimary} />
                          </ButtonSave>
                        </ButtonSaveContainer>

                      </>
                    )}
                </CountryContainer>
              </DataContainer>
            )}
        </ContentContainer>
      </>
    </PageContainer>
  );
}

export default memo(ProfileStructure);
import React, { useEffect } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  FeedContainer,
  GalleryContainer,
  SearchContainer,
  ScrollSearch,
  InputContainer,
  InputSearch,
  InputCheckBox,
  InputCheckBoxContainer,
  InputCheckBoxLabel,
} from "./styles";
import { Gallery } from "../../Organisms/Gallery";
import { useFilters } from "../../stores/Filters";
import { colors } from "../../Styles/theme";
import { MaterialIcons } from '@expo/vector-icons';
import { useUser } from "../../stores/User";
import { GenericInput } from "../../Molecules/GenericInput";


export function SearchStructure({ navigation }: any) {
  const { users } = useUser((state) => state);
  const [search, setSearch] = React.useState<string>("");
  const [searchResult, setSearchResult] = React.useState<any[]>(users.filter((user, index) => index < 10) || []);
  const { user, setUser } = useUser(state => state)
  const [nationality, setNationality] = React.useState<string>(user?.country || "");
  console.log('nationality', nationality)

  const getFilter = () => {
    let usersAux = users.filter((userList, index) =>
    (userList.displayName.toLowerCase().includes(search.toLowerCase()) ||
      userList.services.join().toLowerCase().includes(search.toLowerCase()))
    )
    if (!!nationality) usersAux = usersAux.filter(userList => userList.country === nationality)
    usersAux = usersAux.filter((userList, index) => index < 10)
    setSearchResult(usersAux);
  }

  useEffect(() => {
    getFilter()
  }, [search, nationality])

  useEffect(() => {
    setNationality(user.country)
  }, [user])

  return (
    <SearchContainer>
      <InputContainer>
        <GenericInput placeholder="Buscar" onChangeText={(e: string) => setSearch(e)} value={search} />
        <InputCheckBoxContainer onPress={() => {
          if (!!nationality) setNationality("")
          else setNationality(user.country)
        }}>
          <InputCheckBox isSelected={nationality}  >
            {nationality && <MaterialIcons name="done" size={18} color={colors.whitePrimary} />}
          </InputCheckBox>

          <InputCheckBoxLabel>Mesma nacionalidade</InputCheckBoxLabel>
        </InputCheckBoxContainer>
      </InputContainer>
      <FeedContainer>
        <GalleryContainer >
          <Gallery items={searchResult} navigation={navigation} />
        </GalleryContainer>
      </FeedContainer>
    </SearchContainer>
  );
}

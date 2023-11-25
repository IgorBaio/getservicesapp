import React from "react";
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
import { DATA_CATALOGO } from "../HomeStructure/components/data";
import { Checkbox } from "react-native-paper";
import { useFilters } from "../../stores/Filters";
import { colors } from "../../Styles/theme";
import { MaterialIcons } from '@expo/vector-icons';


export function SearchStructure({ navigation }: any) {
  const { nationality, setNationality } = useFilters(state => state);

  return (
    <SearchContainer>
      <InputContainer>
        <InputSearch placeholder="Buscar" />
        <InputCheckBoxContainer onPress={() => {
          setNationality(!nationality)
        }}>
          <InputCheckBox isSelected={nationality}  >
            {nationality && <MaterialIcons name="done" size={18} color={colors.whitePrimary} />}
          </InputCheckBox>

          <InputCheckBoxLabel>Mesma nacionalidade</InputCheckBoxLabel>
        </InputCheckBoxContainer>
      </InputContainer>
      <FeedContainer>
        <GalleryContainer>
          <Gallery items={DATA_CATALOGO || []} navigation={navigation} />
        </GalleryContainer>
      </FeedContainer>
    </SearchContainer>
  );
}

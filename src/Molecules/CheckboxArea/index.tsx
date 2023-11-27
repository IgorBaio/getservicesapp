import React from "react";
import { CheckboxAreaProps } from "./types";
import { InputCheckBox, InputCheckBoxContainer, InputCheckBoxLabel } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from "../../Styles/theme";

export function CheckboxArea({ labelContent, isSelected, onPress }: CheckboxAreaProps) {
  return (
    <InputCheckBoxContainer onPress={onPress}>
      <InputCheckBox isSelected={isSelected}  >
        {isSelected && <MaterialIcons name="done" size={18} color={colors.whitePrimary} />}
      </InputCheckBox>

      <InputCheckBoxLabel>{labelContent}</InputCheckBoxLabel>
    </InputCheckBoxContainer>
  );
}

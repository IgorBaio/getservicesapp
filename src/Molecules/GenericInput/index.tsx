import React from "react";
import { colors } from "../../Styles/theme";
import { InputGeneric, InputGenericContainer } from "./styles";
import { GenericInputProps } from "./types";

export const GenericInput = ({ placeholder, placeholderTextColor, onChangeText, value, secureTextEntry, marginTop, keyboardType = 'default' }: GenericInputProps) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <InputGenericContainer>
            <InputGeneric
                placeholder={placeholder} 
                value={value} 
                keyboardType={keyboardType}
                onChangeText={onChangeText} 
                placeholderTextColor={placeholderTextColor || colors.whitePrimary}
                isFocused={isFocused}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={secureTextEntry}
                marginTop={marginTop}
            />


        </InputGenericContainer>
    )
}
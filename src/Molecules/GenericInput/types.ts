import { ReactElement } from "react";

export interface GenericInputProps {
    placeholder?: string
    value?: string
    placeholderTextColor?: string
    onChangeText?: (text: string) => void
    secureTextEntry?: boolean
    marginTop?: string
    keyboardType?: string
}

export interface InputProps {
    marginTop?: string;
    isFocused?: boolean;
}

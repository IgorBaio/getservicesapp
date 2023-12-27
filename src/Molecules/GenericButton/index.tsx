import React from "react";
import { ButtonGeneric, ButtonGenericContainer, GenericText } from "./styles";
import { GenericButtonProps } from "./types";
import { colors } from "../../Styles/theme";

export const GenericButton = ({ children, content, onPress }: GenericButtonProps) => {

    return (
        <ButtonGenericContainer>
            <ButtonGeneric onPress={onPress} >
                {children || <GenericText>{content}</GenericText>}
            </ButtonGeneric>
        </ButtonGenericContainer>
    )
}
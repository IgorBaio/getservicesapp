import React from "react";
import { ServicesProps } from "./types";
import {
  ServicesText,
  ServicesContainer,
} from "./styles";
import { getEllipsisArrayText } from "../../functions/getEllipsisArrayText";

export const Services = ({
  services,
  limit
}: ServicesProps) => {
  return (
    <ServicesContainer>
      <ServicesText>{getEllipsisArrayText(services, limit)}</ServicesText>
    </ServicesContainer>
  );
};

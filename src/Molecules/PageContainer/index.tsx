import React from "react";
import { PageContainerProps } from "./types";
import { Container } from "./styles";

export function PageContainer({ children }: PageContainerProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}

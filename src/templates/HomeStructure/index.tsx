import React from "react";
import {
  FeedContainer,
  GalleryContainer,
  HomeContainer,
} from "./styles";
import { Gallery } from "../../Organisms/Gallery";
import { useUser } from "../../stores/User";

export function HomeStructure({ navigation }: any) {
  const { users } = useUser((state) => state);
  
  return (
    <HomeContainer>
      <FeedContainer>
        <GalleryContainer>
          <Gallery items={users || []} navigation={navigation} />
        </GalleryContainer>
      </FeedContainer>
    </HomeContainer>
  );
}

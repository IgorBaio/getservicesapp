import React from "react";
import {
  FeedContainer,
  GalleryContainer,
  HomeContainer,
} from "./styles";
import { Gallery } from "../../Organisms/Gallery";
import { useUser } from "../../stores/User";
import { useLoading } from "../../stores/Loading";
import { LoadingComponent } from "../../Organisms/LoadingComponent";

export function HomeStructure({ navigation }: any) {
  const { isLoading } = useLoading(state => state);
  const { users } = useUser((state) => state);

  return (
    <HomeContainer>
      <FeedContainer>
        <GalleryContainer>
          {isLoading ? <LoadingComponent /> :
            <Gallery items={users || []} navigation={navigation} />
          }
        </GalleryContainer>
      </FeedContainer>
    </HomeContainer>
  );
}

import React from "react";
import { HelmetTags } from "../../components/HelmetTags";
import { StoryLine } from "../../components/StoryLine";
import { Container } from "./styled";

export default function Story() {
  return (
    <Container>
      <HelmetTags page="story" />
      <StoryLine />
    </Container>
  );
}

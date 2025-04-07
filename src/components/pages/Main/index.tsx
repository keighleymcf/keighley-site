import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Text } from "../../ui/Text";

const HeroContainer = styled.div`
  height: 400px;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 320px;
  }
`;

const MainContentContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const adjectiveList: string[] = [
  "spark",
  "vision",
  "attention to detail",
  "empathy",
  "precision",
  "an open mind",
  "efficiency",
  "humor",
  "a user-centric approach",
  "ambition",
  "design sense",
  "structure",
];

const Main: React.FC = () => {
  const [adjIndex, setAdjIndex] = useState<number>(0);

  useEffect(() => {
    const incrementAdjective = () => {
      if (adjIndex < adjectiveList.length - 1) {
        setAdjIndex(adjIndex + 1);
      } else setAdjIndex(0);
    };

    const interval = setInterval(incrementAdjective, 800);
    return () => clearInterval(interval);
  }, [adjIndex]);

  return (
    <div id="main">
      <HeroContainer>
        <Text variant="h1">
          Full-stack web development with <br />
          {adjectiveList[adjIndex]}
        </Text>
      </HeroContainer>

      <MainContentContainer id="description-main">
        <Text variant="p">
          I am a senior web developer specialised in AI applications based in
          Vienna
        </Text>
        <Text variant="p">
          I am passionate about tech leadership and generative AI
        </Text>
        <Text variant="p">Let's work together! 💪</Text>
      </MainContentContainer>
    </div>
  );
};

export default Main;

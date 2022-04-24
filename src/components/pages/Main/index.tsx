import React, { useState, useEffect } from "react";

import { Text } from "../../ui/Text";

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
    <div className="Main">
      <Text variant="h4">
        Full-stack web development with {adjectiveList[adjIndex]}
      </Text>
      <section className="description-main">
        <Text variant="p">
          I am a full-stack web developer specialised in Javascript, React,
          Typescript, and Node.js based in Vienna
        </Text>
        <Text variant="p">
          In my previous life, I was a project manager and science
          communications specialist
        </Text>
        <Text variant="p">
          I love building high-quality, memorable digital products that make
          users' and clients' lives better
        </Text>
      </section>
    </div>
  );
};

export default Main;

import React from "react";

import {
  Section,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: 2020,
    text: "Baccalauréat Sciences de l'ingénieur mention bien",
  },
  { number: '2021-2022', text: "Réalisation d'un livequizz pour la société Prevn" },

  { number: '2020-2022', text: "BTS SIO option SLAM (En cours)" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle></SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

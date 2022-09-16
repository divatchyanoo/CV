import React, { useState, useRef, useEffect } from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const About = () => {
  return (
    <Section id="about">
      <SectionDivider style={{ marginBottom: "3%" }} />
      <SectionTitle>À propos de moi</SectionTitle>
      <SectionText>
        La recherche de nouveaux challenges, la résolution de problèmes complexes,
        l'infinité de connaissances à acquérir sont les raisons qui depuis mon adolescence, font de l'informatique ma passion. <br/>
        Actuellement étudiant en pré MSC à Epitech
        l'année prochaine je poursuivrai mes études en Msc-Pro cybersécurité avec pour objectif de devenir un nouvel acteur de la sécurité en ligne.

      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default About;

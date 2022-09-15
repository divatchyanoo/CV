import React, {  useEffect, useRef } from "react";
import { init } from "ityped";
import {
  Section,
  SectionTitle,
  SectionText2,
} from "../../styles/GlobalComponents";
import {BsDownload} from "react-icons/bs"
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Span, Span2, SpanCrochet} from "./HeroStyles";

function Hero() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 120,
      backSpeed: 30,
      loop: true,
      strings: ["Front-End", "Back-End", "FullStack"],
    });
  }, []);
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenue sur mon portfolio !
        </SectionTitle>
        <br />
        <br />
        <br />
        <br/>
        <br/>
        <br/>
        <SectionTitle style={{fontFamily: "Space Grotesk, sans serif"}}>
          <SpanCrochet>{'{'}</SpanCrochet><Span>David Grondin</Span><SpanCrochet>{'}'}</SpanCrochet><br />
        </SectionTitle>
        <SectionTitle style={{fontFamily: "serif"}}>
          Développeur web
          <Span2 style={{ marginLeft: "2rem" }} ref={textRef}></Span2>
        </SectionTitle>
        <SectionText2>
          Etudiant passionné d'informatique,
        </SectionText2>
        <SectionText2>
            je me suis spécialisé dans les technologies du web  
          tout en me formant parallèlement au réseau.

        </SectionText2>
        <SectionText2>
          Mon prochain objectif est de m'orienter dans 
          la cybersécurité et l'IA ! &nbsp;&nbsp;<span style={{color: 'red', fontSize: '24px', fontFamily: 'cursive'}}>&lt;3</span>
        </SectionText2>
        <br/>
        <br/>
      </LeftSection>
    </Section>
  );
}

export default Hero;

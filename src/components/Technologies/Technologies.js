import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from "react-icons/di";
import {FaNetworkWired} from "react-icons/fa";
import { GiPirateFlag } from "react-icons/gi";
import {RiCodeSSlashLine} from "react-icons/ri"
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SectionTitle3,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider style={{ marginBottom: "3%" }} />
    <SectionTitle>Technologies</SectionTitle>
    <SectionTitle3>En entreprise</SectionTitle3>
    <SectionText>
      J'ai pu développer pour l'entreprise Prevn un livequizz multijoueur reliant Web et mobile.
      Pour le frontEnd j'ai utilisé React permettant de créer et maintenir ses composants,
      ainsi que Redux pour gérer l'état de la page.
      Pour le backEnd, j'ai utilisé l'api Adonis un framework basé sur Node.JS où j'ai pu expérimenter diverses technologies 
      telles que les webSocket ou encore Redis.
      J'ai également utilisé React-Native pour le développement mobile. 
    </SectionText>
    <SectionTitle3>Formation théorique</SectionTitle3>
    <SectionText>
      Ma formation théorique m'a permis d'acquérir des connaissances dans différents domaines : <br/>
      - Cybersécurité ( Méthodes pour
      protéger son site et son SI )  <br/>
      - Réseau ( Gestion des divers éléments d'interconnexion et 
      configuration des postes ) <br/> - Développement ( OOP [Java, C#], web [Javascript, HTML, CSS, PHP],
      mobile [Swift], algorithmie [Python] )
    </SectionText>
    <SectionTitle3>Prochain objectif</SectionTitle3>
    <SectionText>
      Je souhaite découvrir de façon plus approfondie le monde de l'IA et de la cybersécurité ainsi que l'ensemble des possibilités qu'elles offrent.
    </SectionText>
    <List>
      <ListItem>
        <DiReact
          style={{
            marginBottom: '3%',
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <span
              style={{
                fontWeight: "bolder",
                fontStyle: "italic",
              }}
            >
              Compétences
            </span>{" "}
            <br />
            <br /> React.js <br /> HTML 5 <br /> CSS 3<br /> JavaScript <br />{" "}
            Redux <br /> 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall
          style={{
            marginBottom: '3%',
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Compétences
            </span>{" "}
            <br /> <br /> Node.js <br /> PHP <br /> Laravel <br /> Adonis <br /> webSocket <br /> GraphQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase
          style={{
            marginBottom: '3%',
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>DataBase</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Compétences
            </span>{" "}
            <br /> <br /> MariaDB <br /> Redis
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem style={{marginTop: "10%"}}>
        <FaNetworkWired
          style={{
            marginLeft: "14%",
            marginBottom: '3%',
          }}
          size="3rem"
        />

        <ListContainer>
          <ListTitle>Réseau</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Compétences
            </span>{" "}
            <br /> <br /> Protocoles <br /> Sauvegarde <br /> Load-balancing 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem style={{marginTop: "10%"}}>
        <GiPirateFlag
          style={{
            marginLeft: "28%",
            marginBottom: '3%',
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>Cybersécurité</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Compétences
            </span>{" "}
            <br /> <br /> Chiffrement <br /> Protection Web <br /> RGPD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem style={{marginTop: "10%"}}>
        <RiCodeSSlashLine
          style={{
            marginBottom: '3%',
            marginLeft: '10%'
            
          }}
          size="3rem"
        />
        <ListContainer style ={{marginBottom: '20%'}}>
          <ListTitle>Autres</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              Compétences
            </span>{" "}
            <br /> <br /> OOP <br /> Algorithmie <br /> Développement mobile <br /> 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    
  </Section>
);

export default Technologies;

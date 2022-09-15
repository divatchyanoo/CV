import React from "react";
import Header from "../components/Header/Header";
import { Container } from "../layout/LayoutStyles";
import { articles} from "../constants/constants";
import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    TitleContent,
    UtilityList,
    Img,
  } from "../components/Projects/ProjectsStyles";
import { Section2, SectionTitle4, SectionText, Section, SectionText4, SectionTitle3, SectionDivider2 } from "../styles/GlobalComponents";
const Veille = () => (
    <>
        <Container>
            <Header />
        </Container>
        <Section2 >
            <SectionTitle4 main>Stratégie de veille</SectionTitle4>
            <SectionText4 style={{alignSelf: 'center'}}>Ma stratégie de veille se concentre sur 4 sujets majeurs, le développement, l'intelligence artificielle,
                le réseau et enfin ce qui me semble le plus important, la cybersécurité.
            </SectionText4>
            <SectionTitle3>Développement</SectionTitle3>
            <SectionText>Dans le milieu de la programmation où les normes et les langages
            changent si vite, suivre les derniers articles en développement est indispensable, grâce à cela on peut découvrir des conseils pour
            produire un code de meilleure qualité, les derniers framework populaires, les mises à jours et leurs nouveautés. 
             </SectionText>
             <SectionTitle3>Réseaux</SectionTitle3>
             <SectionText>Le réseau est la colonne vertébrale de nos nouveaux moyens de communication, rester informés sur les derniers protocoles et les derniers
                 équipements est essentiel pour proposer une rapidité de communication optimale et comprendre de quelle façon les données transitent.
             </SectionText>
             <SectionTitle3>Intelligence Artificielle</SectionTitle3>
             <SectionText>L'IA prend de plus en plus de place dans nos vies, des chatbots jusqu'aux systèmes capables de prédire les fluctuations de la bourse,
                 il s'agit d'un domaine majeur et continuellement en croissance. J'effectue une veille sur ce sujet pour avoir
                 un bagage de connaissances des dernières évolutions.
             </SectionText>
             <SectionTitle3>Cybersécurité</SectionTitle3>
             <SectionText>Une veille en cybersécurité est primordiale, il est important d'être alerté des dernières failles de sécurité et des menaces
                 émergentes. Se tenir à l'état de l'art permet de garantir une sécurité optimale et ainsi d'éviter les possibilités d'attaques.
             </SectionText>
            <SectionTitle4 main style={{marginTop: '5%'}}>Outils de veille</SectionTitle4>
            <SectionText4>Afin d'effectuer une veille efficace, je me suis servi de différents outils permettant de regrouper les flux RSS et
                réunir les informations les plus pertinentes.
            </SectionText4>
            <SectionDivider2>
                <SectionText style={{flex: 1, marginRight: '3rem', fontSize:"3rem", lineHeight: "6rem"}}>PhoenixJP est un site web regroupant l'ensemble des flux RSS des principaux sites 
                    d'informatique, une consultation quotidienne de ce site permet de se tenir informés des principaux évènements
                    de cybersécurité, réseau, développement, innovation. 
                </SectionText>
                <Img style={{minHeight: "20rem", maxHeight: "30rem", flex: 1}} src={"/images/pjp.png"} />
            </SectionDivider2>
            <SectionDivider2>
                <Img style={{minHeight: "20rem", maxHeight: "30rem", flex: 1,  marginRight: '3rem'}} src={"/images/mediul.png"} />
                <SectionText style={{flex: 1, fontSize:"3rem", lineHeight: "6rem"}}>
                    Abonnement à plusieurs newsletters dont celle de Medium, un site regroupant plusieurs articles indépendants 
                    sur le développement, mais aussi celle de Cisco présentant les dernières innovations dans le domaine du réseau.
                </SectionText>
            </SectionDivider2>
            <SectionDivider2>
               <SectionText style={{flex: 1, marginRight: '3rem', fontSize:"3rem", lineHeight: "6rem"}}>
                    Abonnement à plusieurs comptes spécialisés sur mes réseaux sociaux courants, cela me permet de voir les différentes informations sur
                    mon fil d'actualité en toute circonstance.
                </SectionText>
                <Img style={{minHeight: "20rem", maxHeight: "30rem", flex: 1}} src={"/images/social.jpg"}/>
            </SectionDivider2>
            <SectionDivider2>
            <Img style={{minHeight: "20rem", maxHeight: "30rem", flex: 1,  marginRight: '3rem'}} src={"/images/cert.jpg"} />
                <SectionText style={{flex: 1, fontSize:"3rem", lineHeight: "6rem"}}>
                    Abonnement au flux RSS du CERT français, ce site publie notamment des bulletins d'alertes sur les dernières failles,
                    leurs niveaux de dangerosité ainsi que les moyens à mettre en oeuvre pour s'en protéger.
                </SectionText>
            </SectionDivider2>
            </Section2>
            <Section>
            <SectionTitle4>Articles de veille</SectionTitle4>
            <SectionText4>Voici une liste d'articles non exhaustive que j'ai pu consulter dès leur sortie grâce à ma veille technologique</SectionText4>
           
            <GridContainer>
        {articles.map(
          ({ id, image, title, description, tags, domain, visit }) => (
            <BlogCard key={id}>
              <Img style={{minHeight: "20rem", maxHeight: "20rem"}} src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo style={{minHeight: "20rem"}}>{description}</CardInfo>
              <UtilityList>
                <ExternalLinks href={visit}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
      </Section>
       

    </>
)

export default Veille;
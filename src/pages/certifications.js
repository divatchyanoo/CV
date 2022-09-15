import React from "react";
import Header from "../components/Header/Header";
import { Container } from "../layout/LayoutStyles";
import Footer from "../components/Footer/Footer";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr2,
  Hr3,
  TitleContent,
  UtilityList,
  Img,
} from "../components/Projects/ProjectsStyles";
import {Section3, SectionTitle4, SectionText4} from "../styles/GlobalComponents";
import { certif } from "../constants/constants";

const Certifications = () => (
    <>
      <Container>
        <Header/>
      </Container >
      <Section3 style={{paddingBottom: "10rem"}}>
            <SectionTitle4>Certifications</SectionTitle4>
            <SectionText4>Cette page est dédiée aux certifications que j'ai pu valider
              tout au long de ma formation.
            </SectionText4>
           
         
        {certif.map(
          ({ id, image, title, description, source }) => (
            <>
            <BlogCard key={id} style={{alignSelf: 'center', width: '70vw'}}>
              <Img style={{minHeight: "20rem"}} src={image} />
              <TitleContent style={{marginTop: "2rem"}}>
                <HeaderThree title>{title}</HeaderThree>
                <Hr2 />
              </TitleContent>
              <CardInfo style={{minHeight: "25rem", fontSize: "3rem", textAlign: 'center', lineHeight: '5rem'}}>{description}</CardInfo>
              <UtilityList>
                <ExternalLinks href={source}>Lien</ExternalLinks>
              </UtilityList>
            </BlogCard>
            {(certif.length - 1) > id &&
            <Hr3 />
            }
            </>
          )
        )}
    
      </Section3>
      <Footer />
    </>
  );
  
  export default Certifications;
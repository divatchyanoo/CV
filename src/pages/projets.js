import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "../components/Projects/ProjectsStyles";
import {
  Section,
  SectionTitle2,
} from "../styles/GlobalComponents";
import { projects } from "../constants/constants";
import Header from "../components/Header/Header";
import { Container } from "../layout/LayoutStyles";
import Footer from "../components/Footer/Footer";
const Projects = () => (
  <>
    <Container>
      <Header/>
    </Container >
    <Section nopadding id="projects">
      <SectionTitle2 main>Projets</SectionTitle2>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, domain, visit }) => (
            <BlogCard key={id}>
              <Img style={{minHeight: "20rem", maxHeight: "20rem"}} src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo style={{minHeight: "20rem"}}>{description}</CardInfo>
              <div>
                <TitleContent>Technologies</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
                <TitleContent>Plateforme</TitleContent>
                <TagList>
                {domain.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>

    <Footer />
  </>
);

export default Projects;

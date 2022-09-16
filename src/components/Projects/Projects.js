import React from "react";

import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  Img,
} from "./ProjectsStyles";
import {
    Section,
    SectionTitle2,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
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
                        <div style={{minHeight:"300px"}}>
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
                    </BlogCard>
                )
            )}
        </GridContainer>
    </Section>
)

export default Projects;

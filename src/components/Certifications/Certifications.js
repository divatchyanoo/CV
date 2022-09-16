import {certif} from "../../constants/constants";
import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    HeaderThree,
    Hr2, Hr3,
    Img,
    TitleContent,
    UtilityList
} from "../Projects/ProjectsStyles";
import React from "react";

const Certifications = () => (
    <>
        {certif.map(
            ({ id, image, title, description, source }) => (
                <>
                    <BlogCard key={id} style={{alignSelf: 'center', width: '60vw'}}>
                        <Img style={{objectFit: "contain", height: "fit-content"}} src={image} />
                        <TitleContent style={{marginTop: "2rem"}}>
                            <HeaderThree title>{title}</HeaderThree>
                            <Hr2 />
                        </TitleContent>
                        <CardInfo style={{minHeight: "25rem", textAlign: 'center'}}>{description}</CardInfo>
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
    </>
)

export default Certifications
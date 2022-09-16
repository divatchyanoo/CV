import {Section2, SectionText, SectionText4, SectionTitle3, SectionTitle4} from "../../styles/GlobalComponents";
import React from "react";

const Veille = () => (
    <Section2>
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
    </Section2>
)

export default Veille;



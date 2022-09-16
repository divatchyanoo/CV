import React from "react";
import Certifications from "../components/Certifications/Certifications";
import {Layout} from "../layout/Layout";
import {SectionTitle4, Section3} from "../styles/GlobalComponents";

const CertificationsPage = () => (
    <Layout>
        <Section3 style={{paddingBottom: "10rem"}}>
            <SectionTitle4>Certifications</SectionTitle4>
             <Certifications/>
        </Section3>
    </Layout>
  );
  
  export default CertificationsPage;
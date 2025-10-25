import React from "react";
import SectionPresentation from "./SectionPresentation";
import SectionRedirectGalerie from "./SectionRedirectGalerie";
import "../../css/Home.css";
import AboutWill from "./AboutWill";
import AboutManasse from "./AboutManasse";
import AboutAymen from "./AboutAymen";

function ProjetImmo() {
  return (
    <div className="galerieMessageDic">
      <section className="sectionPresentaion">
        <SectionPresentation />
      </section>

      <section
        className="sectionRedirectGalerie">
        <SectionRedirectGalerie />
      </section>

      <section id="sectionManasse">
        <AboutManasse/>
      </section>

      <section id="sectionWill">
        <AboutWill/>
      </section>

      <section id="sectionAymen">
        <AboutAymen/>
      </section>
      
    </div>
  );
}
export default ProjetImmo;
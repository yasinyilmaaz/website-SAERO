import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import '../../homepage.css';
import { url } from "../../routers/utils";
import { NavLink } from "react-router-dom";



export default function tabbs({t}) {

  return (
    <div>
      <Tabs
        defaultActiveKey={"home"}
        id="justify-tab-example"
        className="bg-[#000000f5] deger text-white flex flex-col md:flex-row"
        justify
      >
        <Tab eventKey="home" title={`00 ${t("homepage")}`}>
          <div className="tabb">
            <Container className="mt-8 text-5xl md:flex-row">
              <div>{t("homepagetext")}</div>
            </Container>
          </div>
        </Tab>
        <Tab eventKey="kurumsal" title={`01 ${t("Corporate")}`}>
          <div className="tabb">
            <Container className="mt-8  flex flex-col xl:flex-row mb-3">
              <div className="col-3 text-5xl">{t("Corporate")}</div>
              <div className="col-9">{t("CText")}  <NavLink to={url("homepage.Corporate")} className="page-transfer">...</NavLink></div>
            </Container>
          </div>
        </Tab>
        <Tab eventKey="projeler" title={`02 ${t("Projects")}`}>
        <div className="tabb">
            <Container className="mt-8 flex  flex-col xl:flex-row mb-3">
            <div className="col-3 text-5xl">{t("Projects")}</div>
              <div className="col-9">{t("Ptext")}   <NavLink to={url("homepage.projects")} className="page-transfer">...</NavLink></div>
            </Container>
          </div>
        </Tab>
        <Tab eventKey="egitim" title={`03 ${t("EducationandSocialAwareness")}`}>
        <div className="tabb">
            <Container className="mt-8 flex  flex-col xl:flex-row mb-3">
            <div className="col-3 text-5xl">{t("EducationandSocialAwareness")}</div>
              <div className="col-9">{t("Etext")}   <NavLink to={url("homepage.Education")} className="page-transfer">...</NavLink></div>
            </Container>
          </div>
        </Tab>
        <Tab eventKey="ulusal" title={`03 ${t("InternationalActivities")}`}>
        <div className="tabb">
            <Container className="mt-8 flex  flex-col xl:flex-row mb-3">
            <div className="col-3 text-5xl">{t("InternationalActivities")}r</div>
              <div className="col-9">{t("ITabText")}   <NavLink to={url("homepage.International")} className="page-transfer">...</NavLink></div>
            </Container>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

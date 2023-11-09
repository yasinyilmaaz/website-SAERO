import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { url } from "../../routers/utils";


export default function Footers() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="bg-black text-center text-gray-400 z-10 absolute w-full h-3/6 foother">
      <Container>
        <div>
          <hr className="mb-10 mt-10 border-t-2 border-t-white" />
          <div className="flex justify-between flex-col lg:flex-row mb-20">
            <h2>Saerotech</h2>
            <div>
              İşçi Blokları Mahallesi Muhsin Yazıcıoğlu Caddesi No: 51/C Çankaya
              /ANKARA
            </div>
            <div>tua@tua.gov.tr</div>
            <div>+90 312 412 89 29</div>
          </div>
          <div className="flex footer-navbar justify-between flex-col md:flex-row">
            <div className="">
              <h5>{t("Corporate")}</h5>
              <NavLink to={url("homepage.Corporate")}>{t("Corporate")}</NavLink>
              <NavLink to={url("homepage.Corporate.Minister")}>{t("President")}</NavLink>
              <NavLink to={url("homepage.Corporate.BoardOfDirectors")}>{t("BoardofDirectors")}</NavLink>
              <NavLink to={url("homepage.Corporate.CorporateDocuments")}>{t("CorporateDocuments")}</NavLink>
              <NavLink to={url("homepage.Corporate.OrganizationChart")}>{t("OrganizationSchema")}</NavLink>
            </div>
            <div>
              <h5>{t("Projects")}</h5>
              <NavLink to={url("homepage.projects")}>{t("Projects")}</NavLink>
              <NavLink to={url("homepage.projects.OnGoingProjects")}>{t("OngoingProjects")}</NavLink>
              <NavLink to={url("homepage.projects.OtherProjects")}>{t("OtherProjects")}</NavLink>
            </div>
            <div>
              <h5>{t("EducationandSocialAwareness")}</h5>
              <NavLink to={url("homepage.projects")}>{t("EducationandSocialAwareness")}</NavLink>
              <NavLink to={url("homepage.Education.EducationalActivities")}>{t("EducationActivities")}</NavLink>
              <NavLink to={url("homepage.Education.AstronomicalEvents")}>{t("AstronomicalEvents")}</NavLink>
              <NavLink to={url("homepage.Education.Blog")}>{t("Blog")}</NavLink>
            </div>
            <div>
              <h5>{t("InternationalActivities")}</h5>
              <NavLink to={url("homepage.International")}>{t("InternationalActivities")}</NavLink>
              <NavLink to={url("homepage.International.NationalCooperation")}>{t("NationalCooperation")}</NavLink>
              <NavLink to={url("homepage.International.InternationalCooperation")}>{t("InternationalCooperation")}</NavLink>
            </div>
            <div>
              <h5>{t("Other")}</h5>
              <NavLink to={url("homepage.announcements")}>{t("PressReleasesandAnnouncements")}</NavLink>
              <NavLink to={url("homepage.Events")}>{t("Events")}</NavLink>
              <NavLink to={url("homepage.sponsorship")}>{t("DonationandSponsorship")}</NavLink>
              <NavLink to={url("homepage.contact")}>{t("Contact")}</NavLink>
            </div>
          </div>
          <hr className="mb-10 mt-10 border-t-2 border-t-white" />
          <div className="text-left">{t("Copyright")}</div>
        </div>
      </Container>
    </footer>
  );
}

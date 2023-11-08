import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
              <NavLink>{t("Corporate")}</NavLink>
              <NavLink>{t("President")}</NavLink>
              <NavLink>{t("BoardofDirectors")}</NavLink>
              <NavLink>{t("CorporateDocuments")}</NavLink>
              <NavLink>{t("OrganizationSchema")}</NavLink>
            </div>
            <div>
              <h5>{t("Projects")}</h5>
              <NavLink>{t("Projects")}</NavLink>
              <NavLink>{t("OngoingProjects")}</NavLink>
              <NavLink>{t("OtherProjects")}</NavLink>
            </div>
            <div>
              <h5>{t("EducationandSocialAwareness")}</h5>
              <NavLink>{t("EducationandSocialAwareness")}</NavLink>
              <NavLink>{t("EducationActivities")}</NavLink>
              <NavLink>{t("AstronomicalEvents")}</NavLink>
              <NavLink>{t("Blog")}</NavLink>
            </div>
            <div>
              <h5>{t("InternationalActivities")}</h5>
              <NavLink>{t("InternationalActivities")}</NavLink>
              <NavLink>{t("NationalCooperation")}</NavLink>
              <NavLink>{t("InternationalCooperation")}</NavLink>
              <NavLink>{t("Blog")}</NavLink>
            </div>
            <div>
              <h5>{t("Other")}</h5>
              <NavLink>{t("PressReleasesandAnnouncements")}</NavLink>
              <NavLink>{t("Events")}</NavLink>
              <NavLink>{t("DonationandSponsorship")}</NavLink>
              <NavLink>{t("Contact")}</NavLink>
            </div>
          </div>
          <hr className="mb-10 mt-10 border-t-2 border-t-white" />
          <div className="text-left">{t("Copyright")}</div>
        </div>
      </Container>
    </footer>
  );
}

import { Container } from "react-bootstrap";
import { url } from "../../routers/utils";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

export default function NavbarInstiutional() {
  const [navOpen, setNavOpen] = useState(false);
  const [title, setTitle] = useState("Kurumsal");

  const { t, i18n } = useTranslation();

  return (
    <nav className="bg-black h-full md:sticky top-0 text-[#85dcee] font-semibold text-base md:h-10 z-10 border-t border-t-[#85dcee]">
      <Container className="flex justify-between h-10 items-center bg-black  flex-col md:flex-row ">
        <div className="nav-title w-full md:w-auto">
          <p className="inline grow w-full  text-center">{title}</p>
          <span className="tus flex-1" onClick={() => setNavOpen(!navOpen)}>
            <svg
              viewBox="64 64 896 896 "
              focusable="false"
              data-icon="down"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
            </svg>
          </span>
        </div>
        <div
          className={classNames({
            "nnav flex gap-3 flex-col md:flex-row w-3/4": true,
            hidden: navOpen == true,
          })}
        >
          <NavLink
            className={"no-underline text-[#85dcee]"}
            to={url("homepage.Corporate")}
            onClick={() => setTitle(t("Corporate"))}
          >
            {t("Corporate")}
          </NavLink>
          <NavLink
            className={"no-underline text-[#85dcee]"}
            to={url("homepage.Corporate.Minister")}
            onClick={() => setTitle(t("President"))}
          >
            {t("President")}
          </NavLink>
          <NavLink
            className={"no-underline text-[#85dcee]"}
            to={url("homepage.Corporate.BoardOfDirectors")}
            onClick={() => setTitle(t("BoardofDirectors"))}
          >
            {t("BoardofDirectors")}
          </NavLink>
          <NavLink
            className={"no-underline text-[#85dcee]"}
            to={url("homepage.Corporate.CorporateDocuments")}
            onClick={() => setTitle(t("CorporateDocuments"))}
          >
            {t("CorporateDocuments")}
          </NavLink>
          <NavLink
            className={"no-underline text-[#85dcee]"}
            to={url("homepage.Corporate.OrganizationChart")}
            onClick={() => setTitle(t("OrganizationSchema"))}
          >
            {t("OrganizationSchema")}
          </NavLink>
        </div>
      </Container>
    </nav>
  );
}

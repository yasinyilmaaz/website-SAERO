import { Container } from "react-bootstrap";
import { url } from "../../routers/utils";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NavbarInstiutional() {
  const [title, setTitle] = useState("Kurumsal");

  const { t, i18n } = useTranslation();

  return (
    <nav className="bg-black block md:sticky top-0 text-[#85dcee] font-semibold text-base h-10 border-t border-t-[#85dcee]">
      <Container className="flex justify-between h-10 items-center">
        <div className="hidden md:block">{title}</div>
        <div className="flex gap-3">
          <NavLink
            className={"no-underline text-[#85dcee]"}
            to={url("homepage.Corporate")}
            onClick={() => setTitle("Kurumsal")}
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

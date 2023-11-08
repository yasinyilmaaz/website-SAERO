import { useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { url } from "../../routers/utils";
import { useTranslation } from "react-i18next";

export default function NavbarProjects() {
  const [title, setTitle] = useState("Projeler");

  const { t, i18n } = useTranslation();
  return (
    <nav className="bg-black sticky top-0 text-[#e9bb7e] font-semibold text-base h-10 border-t border-t-[#e9bb7e]">
      <Container className="flex justify-between h-10 items-center">
        <div className="hidden md:block">{title}</div>
        <div className="flex gap-3 flex-col md:flex-row">
          <NavLink
            className={"no-underline text-[#e9bb7e]"}
            onClick={() => setTitle(t("Projects"))}
            to={url("homepage.projects")}
          >
            {t("Projects")}
          </NavLink>
          <NavLink
            className={"no-underline text-[#e9bb7e]"}
            onClick={() => setTitle(t("OngoingProjects"))}
            to={url("homepage.projects.OnGoingProjects")}
          >
            {t("OngoingProjects")}
          </NavLink>
          <NavLink
            className={"no-underline text-[#e9bb7e]"}
            onClick={() => setTitle(t("OtherProjects"))}
            to={url("homepage.projects.OtherProjects")}
          >
            {t("OtherProjects")}
          </NavLink>
        </div>
      </Container>
    </nav>
  );
}

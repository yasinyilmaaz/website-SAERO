import { useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { url } from "../../routers/utils";
import { useTranslation } from "react-i18next";

export default function NavbarInternational() {
  const [title, setTitle] = useState("Ulusal ve Uluslararası Faliyetler");

  const { t, i18n } = useTranslation();
  
  return (
    <nav className="bg-black text-[#7ae4a0] font-semibold text-base h-10 sticky top-0  border-t border-t-[#7ae4a0]">
      <Container className="flex justify-between h-10 items-center  flex-col md:flex-row ">
        <div className="hidden md:block">{title}</div>
        <div className="flex gap-3 flex-col md:flex-row">
          <NavLink
            className={"no-underline text-[#7ae4a0]"}
            onClick={() => setTitle(t("InternationalActivities"))}
            to={url("homepage.International")}
          >
            {t("InternationalActivities")}
          </NavLink>
          <NavLink
            className={"no-underline text-[#7ae4a0]"}
            onClick={() => setTitle(t("NationalCooperation"))}
            to={url("homepage.International.NationalCooperation")}
          >
            {t("NationalCooperation")}
          </NavLink>
          <NavLink
            className={"no-underline text-[#7ae4a0]"}
            onClick={() => setTitle(t("InternationalCooperation"))}
            to={url("homepage.International.InternationalCooperation")}
          >
            {t("InternationalCooperation")}
          </NavLink>
        </div>
      </Container>
    </nav>
  );
}

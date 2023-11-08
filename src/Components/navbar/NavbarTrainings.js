import { useState } from "react"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { url } from "../../routers/utils"
import { useTranslation } from "react-i18next";


export default function NavbarTrainings(){
    const [title, setTitle] = useState("Eğitim ve Sosyal Farkındalık")

    const { t, i18n } = useTranslation();

    return(
        <nav className="bg-black text-[#a595ff] font-semibold text-base h-10 sticky top-0  border-t border-t-[#a595ff]">
            <Container className="flex justify-between h-10 items-center">
                <div  className="hidden md:block">{title}</div>
                <div className="flex gap-3 flex-col md:flex-row">
                    <NavLink  className={"no-underline text-[#a595ff]"} onClick={() => setTitle(t("EducationandSocialAwareness"))}to={url("homepage.Education")}>{t("EducationandSocialAwareness")}</NavLink>
                    <NavLink  className={"no-underline text-[#a595ff]"} onClick={() => setTitle(t("EducationActivities"))} to={url("homepage.Education.EducationalActivities")}>{t("EducationActivities")}</NavLink>
                    <NavLink  className={"no-underline text-[#a595ff]"} onClick={() => setTitle(t("AstronomicalEvents"))} to={url("homepage.Education.AstronomicalEvents")}>{t("AstronomicalEvents")}</NavLink>
                    <NavLink  className={"no-underline text-[#a595ff]"} onClick={() => setTitle(t("Blog"))} to={url("homepage.Education.Blog")}>{t("Blog")}</NavLink>
                </div>
            </Container>
        </nav>
    )
}
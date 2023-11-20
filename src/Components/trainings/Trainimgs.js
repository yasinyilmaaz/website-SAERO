import { t } from "i18next"
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";



export default function Trainimgs(){
  const { t, i18n } = useTranslation();

    return(
        <div className="banner-home">
            <Container className="">
                <div className="banner-content">
                    <h1>{t("EducationandSocialAwareness")}</h1>
                    <p>{t("ESHText")}</p>
                </div>
                <div className="flex flex-col gap-4">
                <div className="text-white">
                    <div className="w-full flex justify-between flex-col md:flex-row text-center md:text-left">
                        <div className="h-1 font-bold text-lg mb-4">{t("EducationandSocialAwareness")}</div>
                        <div className="md:w-3/4">{t("ESHText2")}</div>
                    </div>
                </div>
                <hr className="h-1 border-t-2 border-t-white"/>

                </div>
            </Container>
        </div>
    )
}
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";


export default function Institutional(){
    const { t, i18n } = useTranslation();
    return(
        <div className="banner-home">
            <Container className="">
                <div className="banner-content">
                    <h1>SaeroTech</h1>
                    <p>{t("CHText")}</p>
                </div>
                <div className="flex flex-col gap-4">
                <hr className="h-1 border-t-2 border-t-white"/>
                <div className="text-white">
                    <div className="w-full flex md:justify-between flex-col md:flex-row  text-center md:text-left">
                        <div className="h-1 font-bold mb-4">{t("Mission")}</div>
                        <div className="md:w-3/4">{t("MissionText")}</div>
                    </div>
                </div>
                <hr className="h-1 border-t-2 border-t-white"/>
                <div className="text-white">
                    <div className="w-full flex justify-between flex-col md:flex-row text-center md:text-left">
                        <div className="h-1 font-bold text-lg mb-4">{t("Vision")}</div>
                        <div className="md:w-3/4" ></div>{t("VisionText")}
                    </div>
                </div>
                </div>
            </Container>
        </div>
    )
}
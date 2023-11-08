import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";


export default function Institutional(){
    const { t, i18n } = useTranslation();
    return(
        <div className="banner-home">
            <Container className="">
                <div className="banner-content">
                    <h1>Saerotech</h1>
                    <p>{t("CHText")}</p>
                </div>
                <div className="flex flex-col gap-4">
                <hr className="h-1 border-t-2 border-t-white"/>
                <div className="text-white">
                    <div className="w-full flex justify-between flex-col md:flex-row">
                        <div className="h-1 font-bold text-lg">{t("Mission")}</div>
                        <div style={{"maxWidth":"75%"}}>{t("MissionText")}</div>
                    </div>
                </div>
                <hr className="h-1 border-t-2 border-t-white"/>
                <div className="text-white">
                    <div className="w-full flex justify-between flex-col md:flex-row">
                        <div className="h-1 font-bold text-lg">{t("Vision")}</div>
                        <div style={{"maxWidth":"75%"}}></div>{t("VisionText")}
                    </div>
                </div>
                </div>
            </Container>
        </div>
    )
}
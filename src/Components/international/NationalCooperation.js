import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next";

export default function NationalCooperation(){
  const { t, i18n } = useTranslation();

    return(
        <div className="banner-home">
            <Container className="">
                <div className="banner-content">
                    <h1>{t("InternationalCooperation")}</h1>
                    <p style={{"width":"100%"}}>
                        {t("NCText")}
                        </p>
                </div>
            </Container>
        </div>
    )
}
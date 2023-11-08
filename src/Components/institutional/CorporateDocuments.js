import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";


export default function CorporateDocuments(){
  const { t, i18n } = useTranslation();

    return(
        <div className="banner-home">
            <Container className="">
                <div className="banner-content">
                    <h1>{t("CorporateDocuments")}</h1>
                    
                </div>
            </Container>
        </div>
    )
}
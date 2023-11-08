import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";


export default function BoardOfDirectors(){
  const { t, i18n } = useTranslation();

    return(
        <div className="banner-home">
            <Container className="">
                <div className="banner-content">
                    <h1>{t("BoardofDirectors")}</h1>
                </div>
            </Container>
        </div>
    )
}
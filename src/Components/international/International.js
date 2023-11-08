import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";



export default function International(){
  const { t, i18n } = useTranslation();

    return(
        <div className="banner-home">
      <Container className="">
        <div className="banner-content">
          <h1>{t("InternationalActivities")}</h1>
          <p>
          {t("IHTabText")}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-white">
            
          </div>
          <hr className="h-1 border-t-2 border-t-white" />
        </div>
      </Container>
    </div>
    )
}
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";


export default function Blog() {
  const { t, i18n } = useTranslation();

  return (
    <div className="banner-home">
      <Container className="">
        <div className="banner-content">
          <h1 style={{ width: "100%", fontSize: "100px", textAlign: "center" }}>
            {t("VerySoon")}
          </h1>
        </div>
      </Container>
    </div>
  );
}

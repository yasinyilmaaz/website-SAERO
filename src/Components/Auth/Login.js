import { Field, Form, Formik, useFormikContext } from "formik";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Footers from "../footer/Footer";
import Input from "../form_tools/Input";


export default function Login() {
  const { t, i18n } = useTranslation();

  return (
    <div className="banner-home">
      <Container className="pt-5  md:flex md:justify-center">
        <div className="banner-content">
        <Formik
        className=""
        // default değerlerin atandığın yer
        initialValues={{}}
        onSubmit={(values) => {
          // gönderme butonuna basılınca çalışacak kod bloğu
          console.log(values);
        }}
        >
          {(props) =>(
            <Form className="p-6 py-20 grid gap-y-12 border rounded shadow-lg md:w-96">
              <Input name="username" placeholder="kullanıcı Adınızı Giriniz" label={"Kullanıcı adı"}/>
              <Input name="pasword" placeholder="Şifrenizi Giriniz" label={"Şifre"} type="password"/>
              <button type="submit" className="h-10 rounded bg-white text-sm text-black font-semibold px-4">Giriş Yap</button>
            </Form>
          )}
          
        </Formik>
        </div>
        
      </Container>
      <Footers/>
    </div>
  );
}

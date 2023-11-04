import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Footers() {
  return (
    <footer className="bg-black text-center text-gray-400 z-10 absolute w-full h-3/6 foother">
      <Container>
        <div>
          <hr className="mb-10 mt-10 border-t-2 border-t-white" />
          <div className="flex justify-between flex-col lg:flex-row mb-20">
            <h2>Saerotech</h2>
            <div>
              İşçi Blokları Mahallesi Muhsin Yazıcıoğlu Caddesi No: 51/C Çankaya
              /ANKARA
            </div>
            <div>tua@tua.gov.tr</div>
            <div>+90 312 412 89 29</div>
          </div>
          <div className="flex footer-navbar justify-between flex-col md:flex-row">
            <div className="">
              <h5>KURUMSAL</h5>
              <NavLink>Kurumsal</NavLink>
              <NavLink>Başkan</NavLink>
              <NavLink>Yönetim Kurulu</NavLink>
              <NavLink>Organizasyon Şeması</NavLink>
            </div>
            <div>
              <h5>PROJELER</h5>
              <NavLink>Projeler</NavLink>
              <NavLink>Yürütülen Projeler</NavLink>
              <NavLink>Diğer Projeler</NavLink>
            </div>
            <div>
              <h5>EĞİTİM VE SOSYAL FARKINDALIK</h5>
              <NavLink>Eğitim ve Sosyal Farkındalık</NavLink>
              <NavLink>Sosyal Faliyetler</NavLink>
              <NavLink>Sosyal Farkındalık</NavLink>
              <NavLink>Çocuk</NavLink>
            </div>
            <div>
              <h5>ULUSLARARASI FAALİYETLER</h5>
              <NavLink>Uluslar Arası Faliyetler</NavLink>
              <NavLink>Uluslararası Üyeler</NavLink>
              <NavLink>Uluslararası İşbirliği</NavLink>
              <NavLink>Çocuk</NavLink>
            </div>
            <div>
              <h5>DİĞER</h5>
              <NavLink>Etkinlik Takvimi</NavLink>
              <NavLink>Haber Bülteni</NavLink>
              <NavLink>İletişim</NavLink>
            </div>
          </div>
          <hr className="mb-10 mt-10 border-t-2 border-t-white" />
          <div className="text-left">
            Saerotech ©2021 Her Hakkı Saklıdır
          </div>
        </div>
      </Container>
    </footer>
  );
}

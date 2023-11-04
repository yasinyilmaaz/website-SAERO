import { Container } from "react-bootstrap";

export default function Projects() {
  return (
    <div className="banner-home">
      <Container className="">
        <div className="banner-content">
          <h1>Uzay Teknolojileri</h1>
          <p>
            Uydu, fırlatma araç ve sistemleri, hava araçları, simülatörler, uzay
            platformları dâhil uzay ve havacılıkla ilgili her türlü ürün,
            teknoloji, sistem, tesis, araç ve gereçlerin tasarımı, üretimi,
            entegrasyonu ve gerekli testlerinin yapılmasını sağlamak amacıyla
            plan, proje ve çalışmalar yapmak veya yaptırmakla görevli olan
            kuruluştur.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-white">
            
          </div>
          <hr className="h-1 border-t-2 border-t-white" />
        </div>
      </Container>
    </div>
  );
}

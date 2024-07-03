import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
        title: "Web Sitesi Tasarımı",
        description:
          "Tüm cihazlarda harika görünen tam yanıt verebilen web siteleri inşa ediyoruz. Web sitelerimiz, ziyaretçileri müşterilere dönüştürmek için tasarlanmıştır.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
        title: "E-ticaret Mağazası",
        description:
          "Küçük dükkanlardan büyük çevrimiçi perakendecilere kadar, işinizi büyütmenize yardımcı olacak mağaza inşa etme konusunda uzmanlığa sahibiz.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "Reklam & Marka Mentorluğu",
        description:
          "Markanızı ve reklam stratejilerinizi optimize ederek pazarda öne çıkmanızı sağlıyoruz. Uzman ekibimizle kişiye özel çözümler sunuyoruz.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
        title: "Sosyal Medya",
        description:
          "Sosyal medya yönetimi ve reklam oluşturma hizmetleri sunuyoruz. Sosyal medya varlığınızı büyütmenize ve yeni müşteriler kazanmanıza yardımcı olabiliriz.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
        title: "Reklam Yönetimi",
        description:
          "Çeşitli platformlarda reklam hesaplarınızın yönetimini üstleniyoruz. Stratejik reklam kampanyaları ile markanızın görünürlüğünü artırıyor ve hedef kitleye ulaşmanızı sağlıyoruz.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
        title: "Destek",
        description:
          "Tüm müşterilerimiz için destek sunuyoruz. Herhangi bir sorun veya sorunuzla ilgilenmek için buradayız.",
     
      },
];

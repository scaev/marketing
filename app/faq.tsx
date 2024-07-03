import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-7xl font-bold text-black">
              Sorularınız mı var ?
            </div>
            <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Harika! Tam da bunun için buradayız.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Vizyonumuz</AccordionTrigger>
      <AccordionContent>
      Dünya çapında başarılı insanları bir araya getirerek, birlikte daha büyük başarılara ulaşmayı hedefleyen bir topluluk oluşturmak. Küresel ölçekte etki yaratacak projeler ve iş birlikleriyle, bireylerin ve organizasyonların potansiyellerini en üst seviyeye çıkarmak.

      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>
Misyonumuz</AccordionTrigger>
      <AccordionContent>
      Küresel İş Birlikleri Kurmak: Dünya genelindeki başarılı bireyleri ve organizasyonları bir araya getirerek, ortak hedefler doğrultusunda sinerji yaratmak.

      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
      Markalaşma Bilincini Geliştirmek
      </AccordionTrigger>
      <AccordionContent>
      Ülkemizde ve dünyada markalaşma bilincini artırarak, markaların değerlerini ve farkındalıklarını güçlendirmek.

        
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-4">
      <AccordionTrigger>
      İnovasyonu Desteklemek
        </AccordionTrigger>
      <AccordionContent>
      Yenilikçi fikirlerin ve projelerin hayata geçirilmesine destek olarak, geleceğe yön veren çözümler üretmek.
      </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
      <AccordionTrigger>
      Eğitim ve Mentorluk Sağlamak
        </AccordionTrigger>
      <AccordionContent>
      Üyelerimize profesyonel gelişimlerine katkı sağlayacak eğitim programları ve mentorluk hizmetleri sunmak.
      </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
      <AccordionTrigger>
      Sosyal Sorumluluk Projeleri
        </AccordionTrigger>
      <AccordionContent>
      Topluma ve çevreye duyarlı projeler geliştirerek, sürdürülebilir bir dünya için çalışmak.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div> );
}
 
export default FAQS;
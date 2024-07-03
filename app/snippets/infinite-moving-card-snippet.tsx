"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Unity Success Network, işimizi gerçekten bir üst seviyeye taşıdı. Onların dijital pazarlama stratejileri sayesinde, müşteri tabanımızda %50'den fazla bir artış yaşadık. Ekibin profesyonelliği ve sürekli iletişimde kalmaları bize büyük güven verdi.",
    name: "Ahmet K.",
    title: "E-ticaret Şirket Sahibi",
  },
  {
    quote:
      "Bu kadar kısa sürede böyle büyük bir dönüşüm yaşayabileceğimizi hiç düşünmemiştik. Unity Success Network'ün SEO ve sosyal medya yönetimi konusundaki uzmanlığı, markamızın bilinirliğini ve online görünürlüğünü inanılmaz derecede artırdı.",
    name: "Selin D.",
    title: "Moda Tasarımcısı",
  },
  {
    quote: "Unity Success Network ile çalışmaya başlamadan önce dijital pazarlama konusunda oldukça kaygılıydık. Ancak, ilk kampanyamızdan itibaren sonuçlar harikaydı. Satışlarımızda %30'luk bir artış yaşadık ve bu sadece başlangıç!",
    name: "Mehmet A.",
    title: "Sağlık Ürünleri Üreticisi",
  },
  {
    quote:
      "Unity Success Network ile çalışmak, dijital pazarlama dünyasında bir dönüm noktası oldu. Ekibin bilgisi ve stratejik yaklaşımı, işletmemizin online varlığını inanılmaz derecede artırdı. Dünya çapında bilgi sahibi insanlarla çalıştığınızı gerçekten hissediyorsunuz. Her adımda yanınızda oldukları için minnettarım.",
    name: "Emine G.",
    title: "Güzellik Salonu Sahibi",
  },
  {
    quote:
      "Unity Success Network'ün pazarlama çözümleri, işletmemizi dijital dünyada ön plana çıkardı. Reklam kampanyalarımızın her adımında yanımızda oldular ve her zaman en iyi sonuçları elde etmemizi sağladılar. Onlarla çalışmak kesinlikle doğru bir karardı.",
    name: "Cenk T.",
    title: "Teknoloji Girişimcisi",
  },
];

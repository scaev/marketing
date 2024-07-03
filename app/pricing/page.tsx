"use client";

import { useState } from "react";

import Link from "next/link";

import { PiCheckCircleFill } from "react-icons/pi";

import Navbar from "@/components/navbar";

const plans = [
  {
    index: 0,
    name: "Standart Paket",
    price: " US $499",
    features: [
      "Web Sitesi Optimizasyonu",

      "Temel Meta Reklam Yönetimi",

      "Sosyal Medya Danışmanlığı",
      "Haftalık KPI Brifingi",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Yeni başlayan işletmeler veya dijital pazarlama stratejilerini geliştirmek isteyen küçük ölçekli işletmeler için idealdir.",
    button: "Satın Al",
  },
  {
    index: 1,
    name: "Premium Paket",
    price: "US $1999",
    features: [
      "Advanced Düzey Meta Reklam Yönetimi",
      "E-Ticaret Web Sitesi Tasarımı",
      "Satış Odaklı Gelişmiş Site Optimizasyonu",
      "Sosyal Medya Danışmanlığı",
      "Gelişmiş Raporlama ve Analitik",
      "Özel iletişim kanalı",
      "Haftalık Strateji Toplantıları",
      "Haftalık KPI Brifingi",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Daha geniş bir kitleye ulaşmak, marka bilinirliğini artırmak, yüksek dönüşüm sağlamak ve dijital pazarlamada üstünlük kazanmak isteyen orta ve büyük ölçekli işletmeler için uygundur.",
    button: "Satın Al",
  },
  {
    index: 2,
    name: "Kurumsal",
    feature: "Contact Us",
    price: "Randevu alın",
    features: [
      "Özel E-Ticaret ve Web Sitesi Geliştirme",
      "World Class Dijital Pazarlama Stratejileri ve Analiz",
      "Özel Persona ve Hedef Kitle Çalışması ",
      "Üst Düzey Meta Reklam Kampanyaları",
      "Sosyal Medya Yönetimi",
      "Kapsamlı Veri Analitiği ve Raporlama",
      "Gerçek Zamanlı Veri İzleme ve Analiz",
      "SEO ve SEM Stratejileri",
      "Haftalık Strateji Toplantıları",
      "Dönüşüm Oranı Optimizasyonu ve Detaylı Raporlama",
      "Haftalık KPI Brifingi",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "Sektörün lider markalarına, geniş ölçekli işletmelere ve global pazarda üstünlük kazanmak isteyen dev şirketlere yönelik özel çözümler sunar. Bu paket, dijital pazarlama alanında en world-class stratejiler ve mentörlük ile 'Sky is the limit' diyenlere hitap eder.",
    button: "Contact Us",
  },
];

const Pricing = () => {
  return ( 
    <div className="w-full  md:items-center md:justify-center
     bg-black/[0.96] antialiased 
     bg-grid-white/[0.02] relative overflow-hidden">

<Navbar
             scrollToWebsiteDesign={() => {}}
             scrollToGraphicDesign={() => {}}
             scrollToShopifyStores={() => {}}
             scrollToBrands={() => {}}
              scrollToServices={() => {}}
      />

<div className="flex items-center justify-center flex-col   ">
          <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          Şeffaf Fiyatlandırma <br /> Planınızı Belirleyin
          </div>
          <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20  items-start ">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className="h-full flex flex-col justify-between border rounded-3xl px-6  "
              >
                <div className={plan.style}>
                  <div className="text-4xl flex  items-center font-medium">
                    {plan.name}
                    {/* render feature tag only for enterprise tab*/}
                    {plan.feature === "Contact Us" && (
                      <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center ">
                        Contact Us
                      </div>
                    )}
                  </div>
                  <div className="text-3xl pt-6 ">{plan.price}</div>
                  <div className="py-6">{plan.description}</div>

                  <ul>
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-lg  py-2 flex space-x-2 items-center"
                      >
                        {/* render checkmark only for enterprise tab*/}
                        {plan.feature === "Contact Us" ? (
                          <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                        ) : (
                          <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                        )}

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={plan.button}>
                  {index === 0 && (
                    <Link
                      href="https://buy.stripe.com/28odRV3FGfI11jyaEF"
                      className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                    >
                      Buy Now
                    </Link>
                  )}
                    {index === 1 && (
                      <Link
                        
                        href="https://buy.stripe.com/3csg034JK53n2nC146"  
                        className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300" 
                      >
                        Buy Now
                        </Link>
                    )}
                    {index === 2 && (

                          <Link
                          href="/contact"
                          className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                        >
                          Contact Us
                        </Link>
                    )}  
                </div>
              </div>
            ))}
          </div>
        </div>

  </div>
  )
};

export default Pricing;

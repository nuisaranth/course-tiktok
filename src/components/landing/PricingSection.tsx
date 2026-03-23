import { Button } from "@/components/ui/button";
import { Check, MapPin, Calendar, Clock, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const features = [
  "อบรมสด 2 วันเต็ม (ไม่ใช่ออนไลน์)",
  "กลุ่มเล็กไม่เกิน 10 ท่าน ดูแลทั่วถึง",
  "เอกสารประกอบการอบรม",
  "เครื่องดื่มและอาหารว่าง",
  "เข้ากลุ่มลับ LINE ตลอดชีพ",
  "หักภาษี ณ ที่จ่ายได้ (นิติบุคคล)",
];

const pricingOptions = [
  { price: "6,900", label: "ต่อท่าน", persons: 1 },
  { price: "12,900", label: "2 ท่าน", persons: 2 },
  { price: "18,900", label: "3 ท่าน", persons: 3 },
];

const PricingSection = () => {
  const [currentPrice, setCurrentPrice] = useState(0);

  return (
    <section id="pricing" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            รายละเอียดการอบรม
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            สมัคร<span className="gradient-text">อบรม</span>วันนี้
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">รุ่น 33 เปิดรับสมัครแล้ว จำนวนจำกัด</p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-tiktok-cyan to-tiktok-magenta opacity-50" />

            <div className="relative m-[2px] rounded-[22px] bg-card p-8 md:p-10">
              {/* Badge */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2">
                <div className="px-4 py-1 bg-gradient-to-r from-tiktok-cyan to-tiktok-magenta rounded-b-lg">
                  <div className="flex items-center gap-1 text-xs font-semibold text-background">รุ่น 33</div>
                </div>
              </div>

              {/* Date & Location */}
              <div className="space-y-3 mb-6 mt-4">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">วันที่ 14-15 พฤษภาคม 2569</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">เวลา 09:00 - 16:30 น.</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/vVKHdN76rwAxhGH1A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground">Punthai Coffee ลาดพร้าว 130</span>
                    <br />
                    <span className="text-xs text-muted-foreground/70">กลุ่มเล็ก รับไม่เกิน 10 ท่าน</span>
                  </div>
                </a>
              </div>

              {/* Price Carousel */}
              <div className="mb-6 py-6 border-y border-border">
                <div className="text-muted-foreground text-sm mb-4 text-center">ค่าอบรม</div>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => setCurrentPrice((prev) => (prev === 0 ? pricingOptions.length - 1 : prev - 1))}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-primary" />
                  </button>

                  <div className="text-center min-w-[180px]">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-medium text-foreground">฿</span>
                      <span className="text-6xl font-bold gradient-text">{pricingOptions[currentPrice].price}</span>
                    </div>
                    <div className="text-muted-foreground text-sm mt-2">
                      {pricingOptions[currentPrice].label} (รวม VAT แล้ว)
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentPrice((prev) => (prev === pricingOptions.length - 1 ? 0 : prev + 1))}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {pricingOptions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPrice(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentPrice ? "bg-primary" : "bg-primary/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="https://lin.ee/EmggMwh" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="hero" size="xl" className="w-full mb-4">
                  สมัครอบรมเลย
                </Button>
              </a>

              {/* Contact */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>สอบถาม: 02-077-1784 หรือ LINE @teamdigital</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

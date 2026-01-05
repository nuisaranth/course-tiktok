import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-tiktok-cyan/10 via-transparent to-tiktok-magenta/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tiktok-cyan/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tiktok-magenta/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-tiktok-cyan animate-pulse" />
            <span className="text-sm text-muted-foreground">อันดับ 1 คอร์สอบรม TikTok ที่เข้มข้นและคุ้มค่าที่สุด</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-up animate-delay-100">
            <span className="gradient-text">TikTok</span>
            <br />
            <span className="text-foreground">Marketing & Advertising</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-up animate-delay-200">
            คอร์สอบรมสด 2 วันเต็ม เรียนรู้จากผู้เชี่ยวชาญ
            <br />
            พร้อม Workshop ปฏิบัติจริง ที่ Punthai Coffee ลาดพร้าว 130
          </p>

          {/* Key Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8 opacity-0 animate-fade-up animate-delay-300">
            <InfoCard icon={<Calendar className="w-5 h-5" />} label="รุ่น 31" value="15-16 ม.ค. 69" />
            <InfoCard icon={<Clock className="w-5 h-5" />} label="เวลา" value="09:00-16:30" />
            <a href="https://maps.app.goo.gl/vVKHdN76rwAxhGH1A" target="_blank" rel="noopener noreferrer">
              <InfoCard icon={<MapPin className="w-5 h-5" />} label="สถานที่" value="Punthai Coffee" />
            </a>
            <InfoCard icon={<Users className="w-5 h-5" />} label="จำนวน" value="จำกัด 10 ท่าน" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 opacity-0 animate-fade-up animate-delay-400">
            <a href="https://lin.ee/EmggMwh" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                สมัครอบรมเลย
              </Button>
            </a>
            <a href="https://www.teamdigital.co/pdf/TikTok.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="xl">
                ดาวน์โหลดรายละเอียด
              </Button>
            </a>
          </div>

          {/* Price Tag */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/80 border border-border opacity-0 animate-fade-up animate-delay-500">
            <span className="text-muted-foreground">ค่าอบรม</span>
            <span className="text-3xl font-bold gradient-text">฿6,900</span>
            <span className="text-sm text-muted-foreground">/ท่าน (รวม VAT)</span>
          </div>
        </div>
      </div>

    </section>
  );
};

const InfoCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="p-3 rounded-xl bg-card/80 border border-border text-center">
    <div className="inline-flex items-center justify-center text-primary mb-1">
      {icon}
    </div>
    <div className="text-xs text-muted-foreground">{label}</div>
    <div className="text-sm font-semibold text-foreground">{value}</div>
  </div>
);

export default HeroSection;

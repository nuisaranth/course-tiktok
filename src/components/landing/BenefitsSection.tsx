import { Zap, Target, Video, ShoppingBag, Sparkles, TrendingUp, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "เรียนรู้จากผู้เชี่ยวชาญตัวจริง",
    description: "สอนโดยอาจารย์ที่มีประสบการณ์ทำ TikTok 1 เดือน มีผู้ติดตาม 100,000+",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Workshop ลงมือปฏิบัติจริง",
    description: "ฝึกสร้างคอนเทนต์ ตัดต่อวิดีโอ และยิงแอดจริงในห้องเรียน",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "เทคนิคทำคลิปให้ติด For You",
    description: "เรียนรู้ Algorithm และเทคนิคลับที่จะบอกเฉพาะในห้องเรียน",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "ยิงแอด TikTok Ads ให้ปัง",
    description: "สอนการวางกลยุทธ์โฆษณา, Retargeting และการเพิ่มยอดขาย",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "สร้าง Personal Branding",
    description: "เข้าใจตัวตน และสร้างแบรนด์ที่แตกต่างบน TikTok",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "เข้ากลุ่มลับตลอดชีพ",
    description: "เข้าร่วมกลุ่ม LINE ส่วนตัว ถามตอบกับอาจารย์ได้ตลอด",
  },
];

const includes = [
  { icon: <Zap className="w-4 h-4" />, text: "กลุ่มเล็กไม่เกิน 10 ท่าน" },
  { icon: <Zap className="w-4 h-4" />, text: "เครื่องดื่มและอาหารว่าง" },
  { icon: <Zap className="w-4 h-4" />, text: "เอกสารประกอบการอบรม" },
  { icon: <Zap className="w-4 h-4" />, text: "เข้ากลุ่มลับ LINE ตลอดชีพ" },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            ทำไมต้องเรียนคอร์สนี้
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            สิ่งที่คุณจะได้<span className="gradient-text">เรียนรู้</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            คอร์สอบรม TikTok ภาคปฏิบัติ แบบเจาะลึกที่สุด โดย Team Digital
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Includes Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-lg font-semibold mb-6 text-foreground">สิ่งที่รวมอยู่ในค่าอบรม</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {includes.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm"
              >
                <span className="text-primary">{item.icon}</span>
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

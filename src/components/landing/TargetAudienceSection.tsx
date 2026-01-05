import { CheckCircle, XCircle } from "lucide-react";

const suitable = [
  "เจ้าของธุรกิจ SME ที่ต้องการเพิ่มยอดขายบน TikTok",
  "ผู้ที่ต้องการโปรโมทสินค้าและบริการบน TikTok อย่างถูกวิธี",
  "ผู้ที่ทำ TikTok อยู่แล้ว แต่คลิปไม่ติด For You / ไม่มียอดขาย",
  "ผู้ที่ต้องการสร้างแบรนด์หรือ Personal Branding บน TikTok",
  "ผู้ที่ต้องการเปิดตลาดใหม่และหาลูกค้าผ่าน TikTok",
  "ผู้ที่สนใจเรียน TikTok Marketing แบบ Workshop และนำไปใช้ได้จริง",
];

const preparation = [
  "Laptop หรือ Notebook (จำเป็นต้องนำมาเอง)",
  "บัญชี TikTok (ถ้ายังไม่มีจะสอนสร้างในคลาส)",
  "สมาร์ทโฟน + แบตสำรอง + สายชาร์จ",
  "รูปภาพและวิดีโอของสินค้า/บริการ",
];

const TargetAudienceSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Suitable For */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              หลักสูตรนี้เหมาะสำหรับ
            </h3>
            <ul className="space-y-4">
              {suitable.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparation */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-secondary" />
              สิ่งที่ต้องเตรียมมา
            </h3>
            <ul className="space-y-4">
              {preparation.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-secondary">{index + 1}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">สำคัญ:</strong> ผู้เข้าอบรมต้องนำ Laptop/Notebook มาเอง ทางเราจัดเตรียม WiFi ให้
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;

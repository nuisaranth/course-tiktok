import { ExternalLink } from "lucide-react";
import instructorPudding from "@/assets/instructor-pudding.png";
import instructorKae from "@/assets/instructor-kae.png";

const instructors = [
  {
    name: "อ.พุฒิธร เอื้อถาวรพิพัฒน์",
    nickname: "อ.พุดดิ้ง",
    avatar: "พ",
    image: instructorPudding,
    bio: "ผู้เชี่ยวชาญด้าน TikTok Marketing ที่มีประสบการณ์ทำ TikTok 1 เดือน มีผู้ติดตามกว่า 100,000 คน ไม่ใช่สายเต้น แต่ใช้กลยุทธ์คอนเทนต์ที่ถูกต้อง",
    profileUrl: "https://www.teamdigital.co/instructors/%E0%B8%AD-%E0%B8%9E%E0%B8%B8%E0%B8%92%E0%B8%B4%E0%B8%98%E0%B8%A3-%E0%B9%80%E0%B8%AD%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%96%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B8%9E%E0%B8%B4%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B9%8C-%E0%B8%AD-%E0%B8%9E%E0%B8%B8%E0%B8%94%E0%B8%94%E0%B8%B4%E0%B9%89%E0%B8%87/",
  },
  {
    name: "อ.ผกากาญจน์ ภู่พุดตาล",
    nickname: "อ.เก๋",
    avatar: "ก",
    image: instructorKae,
    bio: "ผู้เชี่ยวชาญด้าน Digital Marketing และ Content Strategy ประสบการณ์สอนหลักสูตรการตลาดออนไลน์มากกว่า 10 ปี",
    profileUrl: "https://www.teamdigital.co/instructors/%E0%B8%AD-%E0%B8%9C%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%8D%E0%B8%88%E0%B8%99%E0%B9%8C-%E0%B8%A0%E0%B8%B9%E0%B9%88%E0%B8%9E%E0%B8%B8%E0%B8%94%E0%B8%95%E0%B8%B2%E0%B8%A5-%E0%B8%AD-%E0%B9%80%E0%B8%81%E0%B9%8B/",
  },
];

const InstructorSection = () => {
  return (
    <section id="instructors" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            ทีมวิทยากร
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            เรียนกับ<span className="gradient-text">ผู้เชี่ยวชาญ</span>ตัวจริง
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            วิทยากรที่มีประสบการณ์จริงในการทำ TikTok Marketing และจัดอบรมมากกว่า 30 รุ่น
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                {instructor.image ? (
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-16 h-16 rounded-2xl object-cover shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-background shrink-0">
                    {instructor.avatar}
                  </div>
                )}

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    ({instructor.nickname})
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {instructor.bio}
                  </p>
                  <a
                    href={instructor.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    ดูประวัติเพิ่มเติม
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlayCircle, Clock, CheckCircle } from "lucide-react";

const day1Morning = [
  {
    id: "topic-1",
    title: "Topic 1: ทิศทาง Online Marketing 2026",
    lessons: [
      "ปูพื้นฐาน Online Marketing",
      "TikTok คืออะไร ทำไมถึงปังปุริเย่",
      "ทำไมคุณต้องทำการตลาดบน TikTok?",
    ],
  },
  {
    id: "topic-2",
    title: "Topic 2: ธรรมชาติและนิสัยคนเล่น TikTok",
    lessons: [
      "คนเล่น TikTok ชอบอะไร",
      "พฤติกรรมการเล่นเป็นแบบไหน",
      "มี Content อะไรบ้างบน TikTok",
    ],
  },
  {
    id: "topic-3",
    title: "Topic 3: ทำความรู้จัก TikTok สามารถทำอะไรได้บ้าง?",
    lessons: [
      "เจาะลึกหน้า Home และ Discover",
      "รู้จักเครื่องมือต่างๆ ที่ TikTok มีให้",
    ],
  },
  {
    id: "topic-4",
    title: "Topic 4: วิธีสร้าง Account TikTok (Step by Step)",
    lessons: [
      "การสร้างช่องบน TikTok",
      "การตั้งชื่อ User การเปลี่ยนรูปและใส่รายละเอียดต่างๆ",
      "การตั้งค่าให้เป็น Business Account",
      "การตั้งค่าความปลอดภัย",
      "การแชร์ให้คนรู้จักและมาติดตาม TikTok ของเรา",
    ],
  },
];

const day1Afternoon = [
  {
    id: "topic-5",
    title: "Topic 5: เครื่องมือการสร้างคอนเทนต์ใน TikTok",
    lessons: [
      "อุปกรณ์ที่ต้องใช้ในการทำคอนเทนต์บน TikTok",
      "App ตัดต่อวิดีโอง่ายๆ บนมือถือ",
      "เทคนิคการตัดต่อวิดีโอเบื้องต้น",
      "วิธีการหาแรงบันดาลใจการทำคลิป",
      "เครื่องมือวิเคราะห์ข้อมูลบน TikTok",
    ],
  },
  {
    id: "topic-6",
    title: "Topic 6: วิธีสร้าง Content ในแอป TikTok",
    lessons: [
      "ประเภทของคลิปที่มีใน TikTok",
      "วิธีการอัดคลิปบน TikTok (Step by Step)",
      "เทคนิคการทำคลิปรูปแบบต่างๆ",
    ],
  },
  {
    id: "topic-7",
    title: "Topic 7: วิธีการตัดต่อวิดีโอ",
    lessons: [
      "วิธีการตัดต่อวิดีโอด้วย CapCut",
      "เทคนิคทำให้คลิปน่าสนใจ",
      "Workshop ให้สร้างคลิปด้วยตัวเอง",
    ],
  },
  {
    id: "topic-8",
    title: "Topic 8: กรณีศึกษา",
    lessons: [
      "ถอดบทเรียนกลยุทธ์การทำช่องให้ได้ยอด view หลักล้านแบบต่อเนื่อง จากคนที่ไม่เคยทำ TikTok มาก่อน",
    ],
  },
];

const day2Morning = [
  {
    id: "topic-9",
    title: "Topic 9: การสร้างตัวตนบน TikTok",
    lessons: [
      "Personal Brand คืออะไร",
      "ทำยังไงให้แตกต่าง",
      "Workshop หา Personal Brand",
    ],
  },
  {
    id: "topic-10",
    title: "Topic 10: เทคนิคสร้างคอนเทนต์ให้มีผู้ติดตามเพิ่มขึ้น",
    lessons: [
      "เมื่อ Content ขับเคลื่อน TikTok",
      "รูปแบบและไอเดียการทำคอนเทนต์",
      "หลักการสร้างคอนเทนต์ปัง",
      "เทคนิคเพิ่มผู้ติดตามบน TikTok",
    ],
  },
  {
    id: "topic-11",
    title: "Topic 11: Mind Set ของการทำ TikTok",
    lessons: [
      "สิ่งที่ต้องทำในการทำ TikTok (Do)",
      "สิ่งที่ไม่ควรทำในการทำ TikTok (Don't)",
    ],
  },
];

const day2Afternoon = [
  {
    id: "topic-12",
    title: "Topic 12: การหารายได้จาก TikTok",
    lessons: [
      "รูปแบบการสร้างรายได้จาก TikTok",
      "การหา Influencer ที่เหมาะสมกับสินค้า",
    ],
  },
  {
    id: "topic-13",
    title: "Topic 13: เทคนิคการยิงโฆษณา TikTok Ads",
    lessons: [
      "สิ่งที่ต้องรู้ก่อนทำโฆษณา",
      "การวางกลยุทธ์โฆษณา",
      "การทำ Retargeting",
      "เข้าใจหลักการโฆษณาของ TikTok",
      "กฎระเบียบในการทำโฆษณา",
    ],
  },
];

const TopicAccordion = ({ topics }: { topics: typeof day1Morning }) => (
  <Accordion type="single" collapsible className="space-y-3">
    {topics.map((topic) => (
      <AccordionItem
        key={topic.id}
        value={topic.id}
        className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-primary/50 transition-colors"
      >
        <AccordionTrigger className="hover:no-underline py-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <PlayCircle className="w-4 h-4" />
            </div>
            <span className="font-medium text-foreground text-sm">
              {topic.title}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <ul className="space-y-2 pl-11">
            {topic.lessons.map((lesson, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const CourseOutline = () => {
  return (
    <section id="curriculum" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            เนื้อหาหลักสูตร
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            TikTok Marketing & <span className="gradient-text">Advertising</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            เนื้อหาครบครัน 13 หัวข้อ อบรม 2 วันเต็ม พร้อม Workshop และ Case Study จริง
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Day 1 */}
          <div className="p-6 rounded-2xl bg-background border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-background font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">วันแรก</h3>
                <p className="text-sm text-muted-foreground">พื้นฐาน TikTok, สร้าง Content, ตัดต่อวิดีโอ</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">09:00 - 12:00 น.</span>
                </div>
                <TopicAccordion topics={day1Morning} />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">13:00 - 16:30 น.</span>
                </div>
                <TopicAccordion topics={day1Afternoon} />
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="p-6 rounded-2xl bg-background border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <span className="text-background font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">วันที่สอง</h3>
                <p className="text-sm text-muted-foreground">Personal Branding, หารายได้, TikTok Ads</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">09:00 - 12:00 น.</span>
                </div>
                <TopicAccordion topics={day2Morning} />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">13:00 - 16:30 น.</span>
                </div>
                <TopicAccordion topics={day2Afternoon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOutline;

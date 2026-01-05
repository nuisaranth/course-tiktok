import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "คอร์สนี้เป็นการเรียนแบบไหน?",
    answer:
      "เป็นการอบรมสด 2 วันเต็ม ที่ Punthai Coffee ลาดพร้าว 130 ไม่ใช่คอร์สออนไลน์ ผู้เรียนจะได้ลงมือปฏิบัติจริง มี Workshop ทำคลิป ตัดต่อวิดีโอ และยิงแอดจริงในห้องเรียน",
  },
  {
    question: "ต้องมีพื้นฐาน TikTok มาก่อนไหม?",
    answer:
      "ไม่จำเป็นครับ/ค่ะ คอร์สออกแบบมาให้เข้าใจง่าย เริ่มจากศูนย์ได้เลย ตั้งแต่การสร้างบัญชี ไปจนถึงการยิงโฆษณา TikTok Ads",
  },
  {
    question: "ค่าอบรมรวมอะไรบ้าง?",
    answer:
      "รวมเอกสารประกอบการอบรม, เครื่องดื่มและอาหารว่าง, เข้ากลุ่มลับ LINE ตลอดชีพ (ผู้เข้าอบรมต้องนำ Laptop มาเอง)",
  },
  {
    question: "สามารถหักภาษีได้ไหม?",
    answer: "ได้ครับ/ค่ะ สำหรับนิติบุคคลสามารถหักภาษี ณ ที่จ่ายได้",
  },
  {
    question: "จ่ายเงินได้ช่องทางไหนบ้าง?",
    answer: "รับชำระผ่านบัญชีธนาคารและบัตรเครดิต (ส่งลิงค์ให้ชำระตามความต้องการ)",
  },
  {
    question: "มีกลุ่มสำหรับถามตอบหลังเรียนจบไหม?",
    answer:
      "มีครับ/ค่ะ ผู้เรียนทุกท่านจะได้เข้าร่วมกลุ่มลับ LINE ตลอดชีพ สามารถถามคำถามกับอาจารย์และแลกเปลี่ยนกับเพื่อนๆ ผู้เรียนได้ตลอด",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            คำถามที่พบบ่อย
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            มี<span className="gradient-text">คำถาม</span>ไหม?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            รวมคำถามที่พบบ่อยจากผู้เรียน หากยังไม่พบคำตอบ สามารถติดต่อเราได้เลย
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left text-sm md:text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

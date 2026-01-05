import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "คุณนภา สุขใจ",
    role: "เจ้าของร้านเสื้อผ้าออนไลน์",
    avatar: "N",
    rating: 5,
    content: "ยอดขายเพิ่มขึ้น 5 เท่าหลังจากใช้เทคนิคจากคอร์สนี้! สอนละเอียดมาก เหมาะกับมือใหม่ที่ไม่มีพื้นฐานเลย",
    result: "ยอดขายเพิ่ม 500%",
  },
  {
    name: "คุณวิชัย ธนกิจ",
    role: "Digital Marketing Manager",
    avatar: "W",
    rating: 5,
    content: "คอร์สดีมากครับ เนื้อหาอัพเดทตาม Algorithm ใหม่ๆ ตลอด ทีมงานได้ความรู้ไปใช้งานจริงได้ทันที",
    result: "ลด CPA 60%",
  },
  {
    name: "คุณพิม รักสวย",
    role: "Beauty Influencer",
    avatar: "P",
    rating: 5,
    content: "เรียนแล้วเข้าใจ Algorithm มากขึ้น คอนเทนต์ทำยอด view ได้ดีขึ้นมาก ขอบคุณทีมผู้สอนค่ะ",
    result: "Followers เพิ่ม 100K",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            รีวิวจากผู้เรียน
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            เสียงจาก<span className="gradient-text">ผู้เรียนจริง</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            กว่า 10,000 คนที่เรียนจบและประสบความสำเร็จ
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Result Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

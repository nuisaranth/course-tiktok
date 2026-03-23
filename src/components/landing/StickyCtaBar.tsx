import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const StickyCtaBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-card/95 backdrop-blur-lg border-t border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Info */}
            <div className="hidden sm:block">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground">รุ่น 33: 14-15 พฤษภาคม 2569</span>
                <span className="text-xl font-bold gradient-text">฿6,900</span>
              </div>
              <p className="text-xs text-muted-foreground">รวม VAT | อาหาร | เอกสาร</p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3 flex-1 sm:flex-none justify-end">
              <a href="tel:02-077-1784" className="sm:hidden">
                <Button variant="outline" size="lg">
                  <Phone className="w-4 h-4" />
                </Button>
              </a>
              <div className="sm:hidden">
                <span className="text-lg font-bold gradient-text">฿6,900</span>
              </div>
              <a href="https://lin.ee/EmggMwh" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="shrink-0">
                  สมัครอบรม
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCtaBar;

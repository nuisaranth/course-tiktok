import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-tiktok-cyan to-tiktok-magenta flex items-center justify-center">
                <span className="text-background font-bold">TD</span>
              </div>
              <div>
                <div className="font-bold text-lg">Team Digital</div>
                <div className="text-xs text-muted-foreground">ผู้นำด้านอบรมการตลาดออนไลน์</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              บริษัท Team Digital ผู้นำทางด้านจัดอบรมการตลาดออนไลน์ จัดคอร์สเรียนการตลาดออนไลน์หลากหลายหลักสูตรทุกเดือน
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">ติดต่อสอบถาม</h4>
            <div className="space-y-3">
              <a
                href="tel:02-077-1784"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                02-077-1784
              </a>
              <a
                href="https://lin.ee/EmggMwh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                LINE: @teamdigital
              </a>
              <a
                href="mailto:info@teamdigital.co"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@teamdigital.co
              </a>
              <a
                href="https://maps.app.goo.gl/vVKHdN76rwAxhGH1A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Punthai Coffee ลาดพร้าว 130</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Team Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

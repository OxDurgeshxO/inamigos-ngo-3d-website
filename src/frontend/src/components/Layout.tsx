import {
  ExternalLink,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { ReactNode } from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";

function InAmigosLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src="/logo.png"
      alt="InAmigos Foundation"
      className={`object-contain ${compact ? "h-9 sm:h-12" : "h-12 sm:h-16"}`}
    />
  );
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#impact" },
  { label: "Our Projects", href: "#projects" },
  { label: "Get Involved", href: "#involved" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="https://inamigosfoundation.org.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center group"
            data-ocid="nav.logo"
          >
            <InAmigosLogo compact />
          </a>
          <nav
            className="hidden md:flex items-center gap-6"
            data-ocid="nav.links"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://inamigosfoundation.org.in/became-volunteer"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-sm font-body font-medium text-primary hover:text-primary/80 transition-colors duration-200"
              data-ocid="nav.volunteer_link"
            >
              Volunteer
            </a>
            <a
              href="https://inamigosfoundation.org.in/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-body font-semibold hover:bg-accent/90 transition-smooth shadow-warm-glow active:scale-95"
              data-ocid="nav.donate_button"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";
  return (
    <footer className="bg-card border-t border-border" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <InAmigosLogo />
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-sm mb-2">
              A Section 8 registered non-profit organization empowering lives
              through education, women's empowerment, animal welfare, and
              environmental sustainability across India. Founded September 23,
              2020 by Mr. Govind Shukla (Founder &amp; CEO).
            </p>
            <a
              href="https://inamigosfoundation.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-body font-semibold text-primary hover:underline mb-4"
            >
              <ExternalLink className="w-3 h-3" />
              inamigosfoundation.org.in
            </a>
            <div className="flex items-center gap-3">
              {[
                {
                  icon: SiInstagram,
                  href: "https://www.instagram.com/inamigos/",
                  label: "Instagram",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/company/inamigos-foundation",
                  label: "LinkedIn",
                },
                {
                  icon: SiFacebook,
                  href: "https://www.facebook.com/InAmigos/",
                  label: "Facebook",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Our Projects", href: "#projects" },
                { label: "Get Involved", href: "#involved" },
                { label: "Success Stories", href: "#stories" },
                {
                  label: "Transparency & Reports",
                  href: "https://inamigosfoundation.org.in",
                  external: true,
                },
                {
                  label: "Privacy Policy",
                  href: "https://inamigosfoundation.org.in",
                  external: true,
                },
                {
                  label: "Terms & Conditions",
                  href: "https://inamigosfoundation.org.in",
                  external: true,
                },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-body flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {label}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => scrollTo(href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-body flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground font-body">
                  Ward No. 5, Gram Post, Sipat Ujwal Nagar, Bilaspur.
                  Chhattisgarh Pin-Code: 495555
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+916267309902"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  +91 626 730 9902
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:support@inamigosfoundation.org.in"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  support@inamigosfoundation.org.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-body">
            &copy; InAmigos Foundation. All Rights Reserved. Developed by{" "}
            <a
              href="https://inamigosfoundation.org.in"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visho Infotech
            </a>{" "}
            ·{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground font-body">
              80G &amp; 12A Certified
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span className="text-xs text-muted-foreground font-body">
              NITI Aayog Registered
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span className="text-xs text-muted-foreground font-body">
              ISO 9001:2015
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

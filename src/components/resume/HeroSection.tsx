import { Mail, Phone, MapPin, Calendar, CreditCard, Ruler } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="gradient-hero relative overflow-hidden py-20 px-4 md:py-32">
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-white/5 blur-2xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-10 relative z-10">
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white/30 bg-white/20 flex items-center justify-center shrink-0 overflow-hidden shadow-2xl">
          <span className="text-5xl text-primary-foreground font-bold select-none">NAS</span>
        </div>

        <div className="text-center md:text-left text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Nazifa Afrin Sawda</h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 mb-6">Biodata</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm opacity-90">
            <a href="mailto:nazifaafrinsawda@gmail.com" className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4" /> nazifaafrinsawda@gmail.com
            </a>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4" /> +8801972994481
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> 373, North Shajahanpur, Dhaka, Bangladesh
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> March 13, 2006
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4" /> Passport: A12725869
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler className="w-4 h-4" /> 5'6" · 73 kg
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

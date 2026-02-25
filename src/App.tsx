import React, { useState } from 'react';
import { 
  Diamond, 
  ChevronRight, 
  Star, 
  Cpu, 
  Users, 
  Heart, 
  Sparkles, 
  Layers, 
  Anchor, 
  Square, 
  Smile, 
  Monitor, 
  Quote, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  MessageCircle
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Diamond className="w-6 h-6 text-brand-gold" />
        <span className="font-serif text-xl font-semibold tracking-wide">Smile Studio</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <a href="#" className="text-white hover:text-brand-teal transition-colors">Início</a>
        <a href="#" className="hover:text-brand-teal transition-colors">Sobre</a>
        <a href="#" className="hover:text-brand-teal transition-colors">Tratamentos</a>
        <a href="#" className="hover:text-brand-teal transition-colors">Depoimentos</a>
        <a href="#" className="hover:text-brand-teal transition-colors">Contato</a>
      </div>
      <button className="btn-pulse bg-brand-teal hover:bg-brand-teal-hover text-brand-dark font-medium px-6 py-2.5 rounded-full transition-colors text-sm">
        Agendar Consulta
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-[100svh] flex items-center pt-20 pb-12 overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" 
        alt="Dentista atendendo paciente" 
        className="w-full h-full object-cover object-center"
      />
      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/10"></div>
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-xs font-medium backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          Odontologia de Alto Padrão
        </div>
        
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight">
          Seu Sorriso <br />
          Perfeito <br />
          <span className="text-brand-teal">Começa Aqui</span>
        </h1>
        
        <p className="text-gray-300 text-lg sm:text-xl max-w-md leading-relaxed">
          Estética dental com tecnologia de ponta em um ambiente projetado como um spa para garantir seu conforto absoluto.
        </p>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button className="btn-pulse bg-brand-teal hover:bg-brand-teal-hover text-brand-dark font-medium px-8 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2">
            Agendar Consulta <ChevronRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-3.5 rounded-full border border-white/30 hover:bg-white/10 transition-colors font-medium backdrop-blur-sm flex items-center justify-center">
            Ver Tratamentos
          </button>
        </div>
        
        <div className="flex items-center gap-4 pt-4">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <img 
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                alt="Paciente" 
                className="w-10 h-10 rounded-full border-2 border-brand-dark"
              />
            ))}
          </div>
          <div>
            <div className="flex text-brand-gold">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
            </div>
            <p className="text-xs text-gray-300 mt-0.5">2.000+ pacientes satisfeitos</p>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:flex justify-end items-end h-full">
        {/* Floating Badge */}
        <div className="bg-brand-dark/70 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-2xl transform translate-y-12">
          <div className="w-12 h-12 bg-brand-teal/20 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-brand-teal fill-brand-teal" />
          </div>
          <div>
            <p className="text-xs text-gray-300">Índice de Avaliação</p>
            <p className="font-serif text-xl font-semibold flex items-center gap-1">
              98% Satisfação <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="border-y border-white/5 bg-brand-card/30">
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
      {[
        { num: "2800+", label: "PACIENTES" },
        { num: "12", label: "ANOS" },
        { num: "98%", label: "SATISFAÇÃO" },
        { num: "20+", label: "ESPECIALISTAS" },
      ].map((stat, i) => (
        <div key={i} className="text-center px-4">
          <p className="font-serif text-4xl lg:text-5xl text-brand-gold mb-2">{stat.num}</p>
          <p className="text-xs tracking-[0.2em] text-gray-400 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="font-serif text-3xl lg:text-4xl mb-4 text-brand-gold">Excelência em Cada Detalhe</h2>
      <p className="text-gray-400">Nosso compromisso é transcender a odontologia tradicional, oferecendo uma experiência premium do início ao fim.</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          icon: <Cpu className="w-6 h-6 text-brand-teal" />,
          title: "Tecnologia Avançada",
          desc: "Equipamentos de última geração, scaneamento 3D e softwares simuladores para previsibilidade 100% exata dos resultados."
        },
        {
          icon: <Users className="w-6 h-6 text-brand-teal" />,
          title: "Equipe Especializada",
          desc: "Profissionais mestres e doutores com currículo internacional, focados em soluções altamente personalizadas."
        },
        {
          icon: <Heart className="w-6 h-6 text-brand-teal" />,
          title: "Atendimento Humanizado",
          desc: "Ambiente acolhedor estilo spa, aromaterapia corporal, e técnicas de sedação leve para uma experiência livre de dor ou ansiedade."
        }
      ].map((feature, i) => (
        <div key={i} className="bg-brand-card border border-white/5 rounded-2xl p-8 hover:border-brand-teal/30 transition-colors group">
          <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Treatments = () => {
  const treatments = [
    {
      img: "https://i.ibb.co/xS1cTT8c/saiba-como-funciona-o-clareamento-dental-a-laser.jpg",
      icon: <Sparkles className="w-5 h-5" />,
      title: "Clareamento a Laser",
      desc: "Tecnologia avançada que remove pigmentos sem causar sensibilidade."
    },
    {
      img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop",
      icon: <Layers className="w-5 h-5" />,
      title: "Lentes de Contato",
      desc: "Facetas ultrafinas de porcelana importada para correção de cor e formato."
    },
    {
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop",
      icon: <Anchor className="w-5 h-5" />,
      title: "Implantes Dentários",
      desc: "Reposição biomimética de dentes perdidos devolvendo estética e função."
    },
    {
      img: "https://i.ibb.co/8g93zzPX/028221-63401701f32a7-Invisalign-3.jpg",
      icon: <Square className="w-5 h-5" />,
      title: "Ortodontia Invisível",
      desc: "Alinhamento dentário imperceptível com alinhadores transparentes."
    },
    {
      img: "https://i.ibb.co/SXK2wTyy/images-2.jpg",
      icon: <Smile className="w-5 h-5" />,
      title: "Harmonização Facial",
      desc: "Sinergia entre o sorriso e a face, suavizando linhas e ressaltando os traços."
    },
    {
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop",
      icon: <Monitor className="w-5 h-5" />,
      title: "Design do Sorriso Digital",
      desc: "Prototipagem do seu sorriso ideal via software, permitindo o test-drive."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-serif text-3xl lg:text-4xl mb-4 text-brand-gold">Nossos Tratamentos Exclusivos</h2>
        <p className="text-gray-400">Soluções estéticas de alta performance desenhadas de acordo com a arquitetura facial de cada paciente.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((t, i) => (
          <div key={i} className="bg-brand-card border border-white/5 rounded-2xl overflow-hidden group hover:border-brand-teal/30 transition-all hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-teal mb-4">
                {t.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.title}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">{t.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-teal text-sm font-medium hover:text-brand-teal-hover transition-colors">
                Saiba Mais <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const BeforeAfterSlider = ({ image, title }: { image: string, title: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-center font-semibold text-lg">{title}</h3>
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden select-none group">
        {/* After Image (Background) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        {/* Before Image (Foreground, clipped with filter) */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter sepia-[0.4] brightness-90 contrast-125"
          style={{ 
            backgroundImage: `url(${image})`,
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
          }}
        />

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-brand-teal cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center shadow-lg">
            <div className="flex gap-0.5">
              <ChevronRight className="w-4 h-4 text-brand-dark rotate-180 -mr-1" />
              <ChevronRight className="w-4 h-4 text-brand-dark -ml-1" />
            </div>
          </div>
        </div>

        {/* Invisible Range Input */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        />

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-0 pointer-events-none">Antes</div>
        <div className="absolute top-4 right-4 bg-brand-teal text-brand-dark text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-0 pointer-events-none">Depois</div>
      </div>
    </div>
  );
};

const BeforeAfter = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="font-serif text-3xl lg:text-4xl mb-4 text-brand-gold">Transformações Reais</h2>
      <p className="text-gray-400">Deslize para ver os resultados que entregamos diariamente.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <BeforeAfterSlider 
        title="Clareamento" 
        image="https://i.ibb.co/V0yNfzx4/maxresdefault-1563024820-1280x720-1.jpg" 
      />
      <BeforeAfterSlider 
        title="Lentes de Contato" 
        image="https://i.ibb.co/9mzHPBvC/images-3.jpg" 
      />
      <BeforeAfterSlider 
        title="Design de Sorriso" 
        image="https://i.ibb.co/pBvh9454/images-4.jpg" 
      />
    </div>

    <div className="text-center">
      <button className="px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-medium inline-flex items-center gap-2">
        Quero meu resultado também <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="font-serif text-3xl lg:text-4xl text-white">O que dizem <span className="text-brand-gold">nossos pacientes</span></h2>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          text: "A experiência é surreal. Fui para fazer as lentes de contato de porcelana morrendo de medo, mas o ambiente spa e a tecnologia deles me deixaram 100% confortável. Meu sorriso é outro.",
          name: "Mariana Costa",
          treatment: "Lentes de Contato",
          img: "https://i.pravatar.cc/150?img=47"
        },
        {
          text: "Alto padrão de atendimento à execução. Fiz o clareamento a laser e o resultado foi muito superior a clínicas tradicionais, sem contar que não senti nenhuma sensibilidade.",
          name: "Roberto Silva",
          treatment: "Clareamento",
          img: "https://i.pravatar.cc/150?img=11"
        },
        {
          text: "A harmonização combinada com o design do sorriso mudou minha autoestima. A equipe é impecável e os simuladores me deram total segurança para fazer os procedimentos.",
          name: "Carolina Mendes",
          treatment: "Harmonização",
          img: "https://i.pravatar.cc/150?img=32"
        }
      ].map((t, i) => (
        <div key={i} className="bg-brand-card border border-white/5 rounded-2xl p-8 flex flex-col h-full">
          <Quote className="w-8 h-8 text-white/10 mb-6" />
          <p className="text-gray-300 italic flex-grow mb-8 text-sm leading-relaxed">"{t.text}"</p>
          <div className="flex items-center gap-4">
            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-brand-teal text-xs">{t.treatment}</p>
                <div className="flex text-brand-gold">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const CTA = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#004d34] to-brand-dark -z-10"></div>
    {/* Decorative background element */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-3xl -z-10"></div>
    <Heart className="absolute -right-20 -bottom-20 w-96 h-96 text-white/5 -z-10 rotate-12" />
    
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="font-serif text-4xl lg:text-6xl mb-8 leading-tight">
        Transforme seu <span className="italic text-brand-teal">sorriso</span>.<br />
        <span className="text-brand-gold">Agende agora sua avaliação gratuita.</span>
      </h2>
      <button className="bg-brand-teal hover:bg-brand-teal-hover text-brand-dark font-semibold px-8 py-4 rounded-full transition-colors inline-flex items-center gap-2 text-lg">
        <MessageCircle className="w-5 h-5" /> Falar com Especialista
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Diamond className="w-6 h-6 text-brand-gold" />
          <span className="font-serif text-xl font-semibold tracking-wide">Smile Studio</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          O novo padrão em estética dental de luxo. Tecnologia, conforto e resultados impecáveis.
        </p>
      </div>
      
      <div>
        <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
        <ul className="space-y-3 text-sm text-gray-400">
          <li><a href="#" className="hover:text-brand-teal transition-colors">Início</a></li>
          <li><a href="#" className="hover:text-brand-teal transition-colors">A Clínica</a></li>
          <li><a href="#" className="hover:text-brand-teal transition-colors">Pacientes</a></li>
          <li><a href="#" className="hover:text-brand-teal transition-colors">Termos & Privacidade</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Tratamentos</h4>
        <ul className="space-y-3 text-sm text-gray-400">
          <li><a href="#" className="hover:text-brand-teal transition-colors">Lentes de Contato</a></li>
          <li><a href="#" className="hover:text-brand-teal transition-colors">Clareamento a Laser</a></li>
          <li><a href="#" className="hover:text-brand-teal transition-colors">Implantes Biomiméticos</a></li>
          <li><a href="#" className="hover:text-brand-teal transition-colors">Harmonização Facial</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Contato</h4>
        <ul className="space-y-4 text-sm text-gray-400">
          <li className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-brand-teal shrink-0" />
            <span>Av. das Figueiras, 1000 - SP</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-brand-teal shrink-0" />
            <span>(11) 99999-9999</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-brand-teal shrink-0" />
            <span>contato@smilestudio.com</span>
          </li>
        </ul>
        <div className="flex gap-4 mt-6">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal hover:text-brand-dark transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal hover:text-brand-dark transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
      <p>&copy; 2026 Smile Studio Alta Odontologia. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-teal selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Treatments />
        <BeforeAfter />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a href="#" className="btn-pulse-wpp fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50">
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}

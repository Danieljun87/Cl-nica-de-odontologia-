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
  <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/70 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Diamond className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
        <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Smile Studio</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <a href="#" className="text-white hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">Início</a>
        <a href="#" className="hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">Sobre</a>
        <a href="#" className="hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">Tratamentos</a>
        <a href="#" className="hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">Depoimentos</a>
        <a href="#" className="hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">Contato</a>
      </div>
      <button className="btn-pulse bg-brand-teal hover:bg-brand-teal-hover text-brand-dark font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm shadow-[0_0_15px_rgba(0,210,143,0.4)] hover:shadow-[0_0_25px_rgba(0,210,143,0.6)]">
        Agendar Consulta
      </button>
    </div>
  </nav>
);

const Hero = () => {
  const [city, setCity] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch('https://get.geojs.io/v1/ip/geo.json')
      .then(res => res.json())
      .then(data => {
        if (data.city) {
          setCity(data.city);
        }
      })
      .catch(err => console.error('Error fetching location:', err));
  }, []);

  return (
  <section className="relative sm:min-h-[100svh] flex items-center pt-24 pb-12 sm:pt-20 sm:pb-12 overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://i.ibb.co/1gW89T4/d15aeee6c0732e11528e6ba253c0e711.jpg" 
        alt="Sorriso Perfeito" 
        className="w-full h-full object-cover object-[90%_center] sm:object-center"
      />
      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/60 to-transparent sm:from-brand-dark sm:via-brand-dark/80 sm:to-brand-dark/10"></div>
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
      <div className="space-y-6 sm:space-y-8 w-full max-w-[90%] sm:max-w-none">
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-teal/50 bg-brand-teal/10 text-brand-teal text-xs font-medium backdrop-blur-md shadow-[0_0_15px_rgba(0,210,143,0.2)]">
          <Sparkles className="w-3.5 h-3.5" />
          Odontologia de Alto Padrão
        </div>
        
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-tight drop-shadow-2xl">
          Seu Sorriso <br />
          Perfeito <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-emerald-300 drop-shadow-[0_0_15px_rgba(0,210,143,0.3)]">Começa Aqui</span>
        </h1>
        
        <p className="text-gray-300 text-sm sm:text-xl max-w-md leading-relaxed backdrop-blur-sm bg-brand-dark/10 p-2 rounded-lg">
          Estética dental com tecnologia de ponta em um ambiente projetado como um spa para garantir seu conforto absoluto.
        </p>
        
        {city && (
          <div className="inline-block bg-brand-teal/20 border border-brand-teal/30 text-brand-teal font-semibold text-xs sm:text-base px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(0,210,143,0.3)]">
            Atendimentos exclusivos na cidade de {city}.
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <button className="btn-pulse bg-brand-teal hover:bg-brand-teal-hover text-brand-dark font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,210,143,0.4)] hover:shadow-[0_0_30px_rgba(0,210,143,0.6)] w-full sm:w-auto text-sm sm:text-base">
            Agendar Consulta <ChevronRight className="w-4 h-4" />
          </button>
          <button className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300 font-medium backdrop-blur-md flex items-center justify-center hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto text-sm sm:text-base">
            Ver Tratamentos
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <img 
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                alt="Paciente" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-brand-dark shadow-[0_0_10px_rgba(255,255,255,0.2)]"
              />
            ))}
          </div>
          <div>
            <div className="flex text-brand-gold drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />)}
            </div>
            <p className="text-xs text-gray-300 mt-0.5">2.000+ pacientes satisfeitos com o efeito transcende</p>
          </div>
        </div>
        
      </div>
      
      <div className="hidden lg:flex justify-end items-end h-full">
        {/* Floating Badge */}
        <div className="bg-brand-dark/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform translate-y-12 hover:-translate-y-2 transition-transform duration-500">
          <div className="w-12 h-12 bg-brand-teal/20 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,210,143,0.3)]">
            <Heart className="w-6 h-6 text-brand-teal fill-brand-teal" />
          </div>
          <div>
            <p className="text-xs text-gray-300">Índice de Avaliação</p>
            <p className="font-serif text-xl font-semibold flex items-center gap-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              98% Satisfação <Star className="w-4 h-4 text-brand-gold fill-brand-gold drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

const Stats = () => (
  <section className="border-y border-white/10 bg-brand-dark/60 backdrop-blur-lg relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/5 via-transparent to-brand-teal/5"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-x divide-white/10 relative z-10">
      {[
        { num: "2800+", label: "PACIENTES" },
        { num: "12", label: "ANOS" },
        { num: "98%", label: "SATISFAÇÃO" },
        { num: "20+", label: "ESPECIALISTAS" },
      ].map((stat, i) => (
        <div key={i} className="text-center px-2 sm:px-4 hover:scale-105 transition-transform duration-300">
          <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-gold mb-1 sm:mb-2 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">{stat.num}</p>
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-gray-400 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

const Features = () => (
  <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
      <h2 className="font-serif text-3xl sm:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200 drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]">Excelência em Cada Detalhe</h2>
      <p className="text-gray-400 text-sm sm:text-base">Nosso compromisso é transcender a odontologia tradicional, oferecendo uma experiência premium do início ao fim.</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        {
          icon: <Cpu className="w-6 h-6 text-brand-teal drop-shadow-[0_0_8px_rgba(0,210,143,0.5)]" />,
          title: "Tecnologia Avançada",
          desc: "Equipamentos de última geração, scaneamento 3D e softwares simuladores para previsibilidade 100% exata dos resultados."
        },
        {
          icon: <Users className="w-6 h-6 text-brand-teal drop-shadow-[0_0_8px_rgba(0,210,143,0.5)]" />,
          title: "Equipe Especializada",
          desc: "Profissionais mestres e doutores com currículo internacional, focados em soluções altamente personalizadas."
        },
        {
          icon: <Heart className="w-6 h-6 text-brand-teal drop-shadow-[0_0_8px_rgba(0,210,143,0.5)]" />,
          title: "Atendimento Humanizado",
          desc: "Ambiente acolhedor estilo spa, aromaterapia corporal, e técnicas de sedação leve para uma experiência livre de dor ou ansiedade."
        }
      ].map((feature, i) => (
        <div key={i} className="bg-brand-card/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-brand-teal/50 transition-all duration-500 group hover:shadow-[0_0_30px_rgba(0,210,143,0.15)] hover:-translate-y-1">
          <div className="w-12 h-12 rounded-xl bg-brand-dark/80 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,210,143,0.3)] transition-all duration-300">
            {feature.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white group-hover:text-brand-teal transition-colors">{feature.title}</h3>
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
      title: "Conquiste um Sorriso Branco e Radiante",
      desc: "Tecnologia avançada que remove pigmentos sem causar sensibilidade."
    },
    {
      img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop",
      icon: <Layers className="w-5 h-5" />,
      title: "Transforme seu Sorriso com Perfeição",
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
      title: "Realce sua Beleza Natural",
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
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200 drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]">Nossos Tratamentos Exclusivos</h2>
        <p className="text-gray-400 text-sm sm:text-base">Soluções estéticas de alta performance desenhadas de acordo com a arquitetura facial de cada paciente.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((t, i) => (
          <div key={i} className="bg-brand-card/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-teal/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,210,143,0.2)]">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-brand-teal/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-6 right-6 w-12 h-12 rounded-xl bg-brand-dark border border-white/10 flex items-center justify-center text-brand-teal shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(0,210,143,0.4)] transition-all duration-300 z-20">
                {t.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 mt-2 group-hover:text-brand-teal transition-colors">{t.title}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">{t.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-teal text-sm font-medium hover:text-brand-teal-hover hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">
                Saiba Mais <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
      <h3 className="text-center font-semibold text-base sm:text-lg text-white/90">{title}</h3>
      <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden select-none group border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
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
          className="absolute top-0 bottom-0 w-0.5 bg-brand-teal cursor-ew-resize shadow-[0_0_10px_rgba(0,210,143,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,210,143,0.6)] backdrop-blur-sm border border-white/20">
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
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-0 pointer-events-none shadow-lg">Antes</div>
        <div className="absolute top-4 right-4 bg-brand-teal/90 backdrop-blur-md border border-brand-teal/50 text-brand-dark text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-0 pointer-events-none shadow-[0_0_15px_rgba(0,210,143,0.4)]">Depois</div>
      </div>
    </div>
  );
};

const BeforeAfter = () => (
  <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-teal/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none"></div>
    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
      <h2 className="font-serif text-3xl sm:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200 drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]">Transformações Reais</h2>
      <p className="text-gray-400 text-sm sm:text-base">Deslize para ver os resultados que entregamos diariamente.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
      <button className="btn-pulse bg-brand-teal hover:bg-brand-teal-hover text-brand-dark font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,210,143,0.4)] hover:shadow-[0_0_30px_rgba(0,210,143,0.6)] w-full sm:w-auto text-sm sm:text-base mx-auto">
        Quer um resultado assim? Agende sua avaliação <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
      <h2 className="font-serif text-3xl sm:text-4xl text-white drop-shadow-md">O que dizem <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200 drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]">nossos pacientes</span></h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          highlight: "A experiência é surreal.",
          text: " Fui para fazer as lentes de contato de porcelana morrendo de medo, mas o ambiente spa e a tecnologia deles me deixaram 100% confortável. Meu sorriso é outro.",
          name: "Mariana Costa",
          treatment: "Lentes de Contato",
          img: "https://i.pravatar.cc/150?img=47"
        },
        {
          highlight: "Alto padrão de atendimento à execução.",
          text: " Fiz o clareamento a laser e o resultado foi muito superior a clínicas tradicionais, sem contar que não senti nenhuma sensibilidade.",
          name: "Roberto Silva",
          treatment: "Clareamento",
          img: "https://i.pravatar.cc/150?img=11"
        },
        {
          highlight: "Mudou minha autoestima.",
          text: " A harmonização combinada com o design do sorriso foi incrível. A equipe é impecável e os simuladores me deram total segurança para fazer os procedimentos.",
          name: "Carolina Mendes",
          treatment: "Harmonização",
          img: "https://i.pravatar.cc/150?img=32"
        }
      ].map((t, i) => (
        <div key={i} className="bg-brand-card/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:border-brand-teal/30 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,210,143,0.1)] hover:-translate-y-1">
          <Quote className="w-8 h-8 text-brand-teal/40 mb-6 drop-shadow-[0_0_8px_rgba(0,210,143,0.3)]" />
          <p className="text-gray-300 italic flex-grow mb-8 text-sm leading-relaxed">
            <span className="font-bold text-white text-base">{t.highlight}</span>{t.text}
          </p>
          <div className="flex items-center gap-4">
            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
            <div>
              <p className="font-semibold text-sm text-white">{t.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-brand-teal text-xs font-medium">{t.treatment}</p>
                <div className="flex text-brand-gold drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]">
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
  <section className="relative py-16 sm:py-24 overflow-hidden border-t border-white/10">
    <div className="absolute inset-0 bg-gradient-to-br from-[#004d34]/40 to-brand-dark -z-10 backdrop-blur-3xl"></div>
    {/* Decorative background element */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-brand-teal/10 rounded-full blur-[80px] sm:blur-[120px] -z-10 pointer-events-none"></div>
    <Heart className="absolute -right-10 sm:-right-20 -bottom-10 sm:-bottom-20 w-64 sm:w-96 h-64 sm:h-96 text-white/5 -z-10 rotate-12" />
    
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-8 leading-tight drop-shadow-2xl">
        Transforme seu <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-emerald-300 drop-shadow-[0_0_15px_rgba(0,210,143,0.3)]">sorriso</span>.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200 drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]">Agende agora sua avaliação gratuita.</span>
      </h2>
      <button className="btn-pulse bg-brand-teal hover:bg-brand-teal-hover text-brand-dark font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 text-base sm:text-lg shadow-[0_0_20px_rgba(0,210,143,0.4)] hover:shadow-[0_0_30px_rgba(0,210,143,0.6)] w-full sm:w-auto">
        <MessageCircle className="w-5 h-5" /> Falar com Especialista
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-dark/90 backdrop-blur-xl pt-16 sm:pt-20 pb-8 sm:pb-10 border-t border-white/10 relative">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Diamond className="w-6 h-6 text-brand-gold drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
          <span className="font-serif text-xl font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Smile Studio</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          O novo padrão em estética dental de luxo. Tecnologia, conforto e resultados impecáveis.
        </p>
      </div>
      
      <div>
        <h4 className="font-semibold mb-4 sm:mb-6 uppercase tracking-wider text-sm text-white/90">Links Rápidos</h4>
        <ul className="space-y-3 text-sm text-gray-400">
          <li><a href="#" className="hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">Início</a></li>
          <li><a href="#" className="hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">A Clínica</a></li>
          <li><a href="#" className="hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">Pacientes</a></li>
          <li><a href="#" className="hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">Termos & Privacidade</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4 sm:mb-6 uppercase tracking-wider text-sm text-white/90">Tratamentos</h4>
        <ul className="space-y-3 text-sm text-gray-400">
          <li><a href="#" className="hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">Lentes de Contato</a></li>
          <li><a href="#" className="hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">Clareamento a Laser</a></li>
          <li><a href="#" className="hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">Implantes Biomiméticos</a></li>
          <li><a href="#" className="hover:text-brand-teal hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all">Harmonização Facial</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4 sm:mb-6 uppercase tracking-wider text-sm text-white/90">Contato</h4>
        <ul className="space-y-4 text-sm text-gray-400">
          <li className="flex items-start gap-3 group">
            <MapPin className="w-5 h-5 text-brand-teal shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all" />
            <span className="group-hover:text-white transition-colors">Av. das Figueiras, 1000 - SP</span>
          </li>
          <li className="flex items-center gap-3 group">
            <Phone className="w-5 h-5 text-brand-teal shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all" />
            <span className="group-hover:text-white transition-colors">(11) 99999-9999</span>
          </li>
          <li className="flex items-center gap-3 group">
            <Mail className="w-5 h-5 text-brand-teal shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(0,210,143,0.5)] transition-all" />
            <span className="group-hover:text-white transition-colors">contato@smilestudio.com</span>
          </li>
        </ul>
        <div className="flex gap-4 mt-6">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-teal hover:text-brand-dark hover:shadow-[0_0_15px_rgba(0,210,143,0.5)] hover:border-brand-teal transition-all duration-300">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-teal hover:text-brand-dark hover:shadow-[0_0_15px_rgba(0,210,143,0.5)] hover:border-brand-teal transition-all duration-300">
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
      <p>&copy; 2026 Smile Studio Alta Odontologia. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-teal selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <Stats />
        <Features />
        <Treatments />
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

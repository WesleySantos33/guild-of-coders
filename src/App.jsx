import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Terminal, 
  Globe, 
  Mail, 
  Github, 
  Linkedin, 
  ChevronRight,
  Menu,
  X,
  Layers
} from 'lucide-react';

/**
 * App Component - GOC (Guild of Coders) Landing Page
 * Inclui: Tela de carregamento, Hero section, Serviços, Portfólio e Contacto.
 */
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para simular o carregamento inicial (Splash Screen)
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // Efeito para alterar a opacidade da Navbar ao fazer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Sistemas robustos e interfaces modernas utilizando React e tecnologias de ponta.",
      icon: <Globe className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Soluções Mobile",
      description: "Desenvolvimento ágil com AppSheet e aplicações nativas/híbridas personalizadas.",
      icon: <Smartphone className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Engenharia de Dados",
      description: "Arquitetura de bancos de dados SQL e PostgreSQL para alta performance.",
      icon: <Database className="w-8 h-8 text-indigo-400" />
    },
    {
      title: "Automações e IA",
      description: "Scripts em Python e integrações complexas para otimizar fluxos de trabalho.",
      icon: <Terminal className="w-8 h-8 text-purple-400" />
    }
  ];

  const techStack = [
    "Python", "C/C++", "C#", "Java", "JavaScript", "React", "SQL", "AppSheet", "Docker", "Node.js"
  ];

  const projects = [
    {
      title: "Sistema de Gestão Interna",
      category: "Fullstack / SQL",
      image: "https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "App de Logística",
      category: "AppSheet / Automação",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "API de Integração",
      category: "Python / Backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // Renderização da Tela de Loading
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0c] z-[100] flex flex-col items-center justify-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse scale-150"></div>
          <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-5 rounded-2xl shadow-2xl shadow-cyan-500/20">
            <Code2 className="text-white w-12 h-12 animate-bounce" />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-white font-mono text-lg tracking-[0.2em] mb-4 uppercase">
            Iniciando Protocolos <span className="text-cyan-400">GOC</span>
          </h2>
          <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-slate-500 font-mono text-xs">{loadingProgress}% Concluído</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg">
              <Code2 className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">GOC <span className="text-cyan-400">DEV</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Início</a>
            <a href="#servicos" className="hover:text-cyan-400 transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfólio</a>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2 rounded-full transition-all text-sm font-medium">
              Falar com a Guilda
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Disponível para novos projetos
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Guild of Coders: <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              Arquitetando o Futuro.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            Especialistas em transformar desafios complexos em soluções digitais elegantes. 
            Do baixo nível ao cloud, entregamos excelência técnica em cada linha de código.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
              Iniciar Projeto <ChevronRight size={18} />
            </button>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl transition-all text-white font-medium">
              Ver Projetos
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack Bar */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {techStack.map((tech, idx) => (
              <span key={idx} className="text-sm font-mono font-bold tracking-widest uppercase">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Nossa Expertise</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.08] transition-all duration-300">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Projetos em Destaque</h2>
              <p className="text-slate-400">Uma pequena amostra do que a GOC é capaz de construir.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-cyan-400 font-medium hover:underline">
              Ver todos <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <button className="w-fit p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <ChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-600 to-blue-800 p-12 text-center shadow-2xl shadow-cyan-500/10">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Layers size={200} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Pronto para elevar o nível do seu software?</h2>
            <p className="text-cyan-100 mb-10 max-w-xl mx-auto relative z-10">
              Estamos prontos para ouvir a sua ideia e transformá-la numa solução técnica de alto impacto.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-cyan-50 transition-colors">
                Solicitar Orçamento
              </button>
              <button className="bg-blue-900/30 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-900/40 transition-colors">
                Ver GitHub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-white/5 p-2 rounded-lg">
              <Code2 className="text-cyan-400 w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white">GOC <span className="text-cyan-400">DEV</span></span>
          </div>
          <div className="text-center">
             <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Guild of Coders. Desenvolvido com precisão.
            </p>
            <p className="text-xs text-slate-600 italic mt-1">Marituba, Pará - Brasil</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
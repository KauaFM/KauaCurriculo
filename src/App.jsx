import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Server, 
  Palette, 
  Cpu, 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  CheckCircle2,
  Monitor,
  Code2,
  Database,
  Smartphone,
  Terminal,
  Layout,
  Globe,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Componentes de Apoio ---

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold mb-8 text-slate-100 flex items-center gap-3">
    <span className="w-8 h-[2px] bg-blue-500"></span>
    {children}
  </h2>
);

const Card = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm ${className}`}
  >
    {children}
  </motion.div>
);

// --- Componente Principal App ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('web');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = {
    web: [
      {
        title: "Império Shopping Car",
        description: "Landing Page institucional de alta performance para venda de peças automotivas.",
        stack: ["React", "Tailwind CSS", "Node.js", "JavaScript"],
        highlights: ["Integração com API WhatsApp", "SEO Optimização", "Performance 100% Mobile"],
        icon: <Globe className="text-blue-500" />
      }
    ],
    design: [
      {
        title: "Império Shopping Car - UX/UI",
        description: "Criação de identidade visual completa e prototipagem de alta fidelidade.",
        tools: ["Figma", "Design System", "Adobe XD"],
        highlights: ["Arquitetura de Informação", "User Flow estratégico", "Prototipagem interativa"],
        icon: <Palette className="text-blue-500" />
      },
      {
        title: "Sefix - Prototipagem",
        description: "Elaboração de protótipo iterativo focado em usabilidade para ativos de TI.",
        tools: ["Figma", "Wireframes", "UX Research"],
        highlights: ["Interface intuitiva", "Foco no utilizador final", "Consistência de marca"],
        icon: <Layers className="text-blue-500" />
      }
    ]
  };

  const specializations = [
    {
      title: "Front-End & Mobile",
      icon: <Code2 className="text-blue-500" size={32} />,
      items: ["React & React Native", "JavaScript & TypeScript", "HTML5 & CSS3", "Tailwind & Bootstrap"]
    },
    {
      title: "Design UX/UI",
      icon: <Palette className="text-blue-500" size={32} />,
      items: ["Figma & Adobe XD", "Prototipagem de alta fidelidade", "Arquitetura da informação", "Usabilidade & Wireframes"]
    },
    {
      title: "Infra & Monitoramento",
      icon: <Server className="text-blue-500" size={32} />,
      items: ["Zabbix & Grafana", "Linux Server & Virtualização", "Automação com n8n", "Suporte N1 & Redes"]
    },
    {
      title: "Cibersegurança",
      icon: <Shield className="text-blue-500" size={32} />,
      items: ["ISO/IEC 27001 Associate", "Projeto Hackers do Bem", "Segurança de Endpoints", "Análise de Tráfego (ntopng)"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* Fundo Animado Sutil */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.826 10.558c1.026 1.312 1.302 3.23.836 4.556l-1.598 4.54a.5.5 0 0 1-.63.312l-1.33-.466a.5.5 0 0 1-.312-.63l1.598-4.54c.29-.824.12-2.016-.516-2.83C52.246 6.136 51 5 49 5s-3.246 1.136-3.874 1.94c-.636.814-.806 2.006-.516 2.83l1.598 4.54a.5.5 0 0 1-.312.63l-1.33.466a.5.5 0 0 1-.63-.312l-1.598-4.54c-.466-1.326-.19-3.244.836-4.556C44.174 4.564 46 3 49 3s4.826 1.564 5.826 2.558z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
        </div>
      </div>

      {/* Navegação Sticky */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold text-white tracking-tighter">Curriculo<span className="text-blue-500">WEB</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['Inicial', 'Especializações', 'Projetos', 'Experiência'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{item}</a>
            ))}
          </div>
          <a 
            href="https://mail.google.com/mail/?view=cm&to=kkfelipemacedo@gmail.com&subject=Opportunity%20for%20Kaua%20Felipe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/20"
          >
            Contacto
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* 1. Hero Section */}
        <section id="inicial" className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">Aberto a Oportunidades</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Kauã Felipe <span className="text-blue-500">de Macedo.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
              Desenvolvedor Front-End | UI/UX Designer | Infraestrutura de TI
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/Curriculo.pdf" 
                download
                className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all"
              >
                <Download size={20} /> Download CV (PDF)
              </a>

              <div className="flex items-center gap-3 ml-2">
                <a 
                  href="https://www.linkedin.com/in/kau%C3%A3-felipe-de-macedo-41419923a/?skipRedirect=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500 transition-colors text-slate-400 hover:text-blue-400"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. Projetos Section (Nova Aba) */}
        <section id="projetos" className="mb-32">
          <SectionTitle>Projetos Selecionados</SectionTitle>
          
          {/* Tabs Switcher */}
          <div className="flex gap-4 mb-10 p-1 bg-slate-900/50 w-fit rounded-xl border border-slate-800">
            <button 
              onClick={() => setActiveTab('web')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'web' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Desenvolvedor Web
            </button>
            <button 
              onClick={() => setActiveTab('design')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'design' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Web Design
            </button>
          </div>

          {/* Grid de Projetos */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="wait">
              {projects[activeTab].map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-t-4 border-t-blue-500">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-blue-500/10 rounded-xl">
                        {project.icon}
                      </div>
                      <div className="flex gap-2">
                        {activeTab === 'web' ? 
                          project.stack.map(s => <span key={s} className="text-[10px] font-mono bg-slate-800 px-2 py-1 rounded text-blue-400">{s}</span>) :
                          project.tools.map(t => <span key={t} className="text-[10px] font-mono bg-slate-800 px-2 py-1 rounded text-emerald-400">{t}</span>)
                        }
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                    <div className="space-y-2">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                          <CheckCircle2 size={14} className="text-blue-500" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* 3. Core Specializations */}
        <section id="especializações" className="mb-32">
          <SectionTitle>Especializações Técnicas</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, idx) => (
              <Card key={idx} className="flex flex-col h-full">
                <div className="mb-6 p-3 bg-blue-500/10 rounded-xl w-fit">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{spec.title}</h3>
                <ul className="space-y-3 mt-auto">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* 4. Experiência Profissional */}
        <section id="experiência" className="mb-32">
          <SectionTitle>Experiência Profissional</SectionTitle>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
             
             
             {/* Instrutor de Design de Games */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Palette size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-white text-lg">Instrutor de Design de Games</div>
                </div>
                <div className="text-blue-400 text-sm mb-4 font-medium">Curso de Design Digital</div>
                <p className="text-sm text-slate-500 leading-relaxed italic mb-2">
                  Ensino prático de desenvolvimento visual para jogos utilizando Figma.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mb-2">
                  Criação e orientação na produção de banners, logos, personagens, identidade visual e interfaces.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Aplicação estratégica de Inteligência Artificial no processo criativo, otimização de fluxos de design e desenvolvimento de protótipos funcionais com foco em UX/UI.
                </p>
              </div>
            </div>


            {/* Sefix */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Monitor size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-white text-lg">Menor Aprendiz de TI</div>
                  <time className="text-xs font-mono text-blue-500">2023 - 2024</time>
                </div>
                <div className="text-blue-400 text-sm mb-4 font-medium">Sefix</div>
                <p className="text-sm text-slate-500 leading-relaxed italic mb-2">
                  Desenvolvimento do site institucional e prototipagem UI/UX.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Suporte técnico, manutenção de redes e organização de ativos.
                </p>
              </div>
            </div>

            {/* Montreal */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Database size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-white text-lg">Digitador</div>
                  <time className="text-xs font-mono text-blue-500">2022 - 2023</time>
                </div>
                <div className="text-blue-400 text-sm mb-4 font-medium">Montreal Informática</div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Conferência de dados técnicos e processos administrativos. Controle de informações sensíveis.
                </p>
              </div>
            </div>

            {/* Sindmédico */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Server size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-white text-lg">Suporte Técnico N1</div>
                  <time className="text-xs font-mono text-blue-500">2022</time>
                </div>
                <div className="text-blue-400 text-sm mb-4 font-medium">Sindmédico</div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Resolução de problemas de hardware/software e movimentação de servidores.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer / Contact */}
      <footer className="border-t border-slate-800 bg-slate-950/50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Pronto para colaborar?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-slate-400">
            <a href="mailto:kkfelipemacedo@gmail.com" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Mail size={18} /> kkfelipemacedo@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <Smartphone size={18} /> 61-99842-5929
            </span>
            <a href="https://www.linkedin.com/in/kau%C3%A3-felipe-de-macedo-41419923a/" target="_blank" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
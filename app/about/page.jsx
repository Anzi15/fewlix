"use client"
import { useState, useRef, useEffect } from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  TrendingUp, 
  Zap, 
  Palette, 
  Code, 
  Video,
  FileText,
  ShoppingCart,
  Users,
  Sparkles,
  ArrowRight,
  Play
} from 'lucide-react';

export default function AboutUsPage() {
  const [isDark, setIsDark] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsDark(rect.top <= windowHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
<EnhancedHeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedStats />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="text-green-500 font-bold text-sm uppercase tracking-wider">Our Story</span>
                <div className="h-1 w-20 bg-green-500 mt-2"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-black mb-8 leading-tight">
                Building The Future
                <span className="block text-green-500">Of Brand Design</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Founded with a relentless pursuit of design excellence, FEWLIX emerged 
                  from the need for creative solutions that actually drive business growth. 
                  We bridge the gap between artistic vision and commercial success.
                </p>
                <p>
                  Our approach combines cutting-edge design with data-driven strategies, 
                  ensuring every project not only looks exceptional but performs even better.
                </p>
                <div className="bg-black text-white p-6 rounded-2xl">
                  <p className="font-semibold text-lg">
                    "We don't just create designs—we build assets that work."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-black rounded-3xl p-8 text-white transform hover:scale-105 transition-transform duration-500">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-900 rounded-2xl">
                    <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <div className="text-2xl font-bold">80+</div>
                    <div className="text-gray-400 text-sm">Brands Transformed</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900 rounded-2xl">
                    <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <div className="text-2xl font-bold">700M+</div>
                    <div className="text-gray-400 text-sm">Revenue Generated</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900 rounded-2xl">
                    <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-gray-400 text-sm">Campaigns Launched</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900 rounded-2xl">
                    <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values Section */}
      <ScrollTabsSection />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-green-500 font-bold text-sm uppercase tracking-wider">What We Offer</span>
              <div className="h-1 w-20 bg-green-500 mt-2 mx-auto"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
              Creative Services
              <span className="block text-green-500">That Convert</span>
            </h2>
          </div>

          <ServicesGrid />
        </div>
      </section>

      {/* Calendly Embed Section */}
<section id="calendly-embed" className="py-24 bg-black text-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-black mb-6">
        Let's Create
        <span className="block text-green-500">Something Amazing</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Book a call with us to discuss your project and discover how we can help 
        transform your vision into remarkable results.
      </p>
    </div>
    
    {/* Updated container for full-width responsive embed */}
    <div className="w-full h-[800px] md:h-[700px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
      <CalendlyEmbed />
    </div>
  </div>
</section>
    </div>
  );
}

// Updated Stats Component
function AnimatedStats() {
  const refStarted = useRef(false);
  const [values, setValues] = useState({ a: 0, b: 0, c: 0 });
  const containerRef = useRef(null);

  const targets = { a: 700, b: 1000, c: 80 };
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

  function animateNumber({ from, to, duration, easing, onUpdate }) {
    const start = performance.now();
    const delta = to - from;
    let rafId = null;

    function frame(now) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = easing(t);
      const current = from + delta * eased;
      onUpdate(current);
      if (t < 1) rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }

  function formatNumber(n) {
    const intVal = Math.round(n);
    return intVal.toLocaleString();
  }

  useEffect(() => {
    if (!containerRef.current) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !refStarted.current) {
            refStarted.current = true;

            animateNumber({
              from: 0,
              to: targets.a,
              duration: 1100,
              easing: easeOutCubic,
              onUpdate: (val) => setValues((s) => ({ ...s, a: val })),
            });

            animateNumber({
              from: 0,
              to: targets.b,
              duration: 1500,
              easing: easeOutCubic,
              onUpdate: (val) => setValues((s) => ({ ...s, b: val })),
            });

            animateNumber({
              from: 0,
              to: targets.c,
              duration: 2400,
              easing: easeOutExpo,
              onUpdate: (val) => setValues((s) => ({ ...s, c: val })),
            });

            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="w-full flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { value: values.a, target: targets.a, label: 'Revenue Generated', suffix: 'M+', icon: TrendingUp },
          { value: values.b, target: targets.b, label: 'Ads Created', suffix: '+', icon: Zap },
          { value: values.c, target: targets.c, label: 'Brands Empowered', suffix: '+', icon: Users }
        ].map((stat, index) => (
          <div key={index} className="group text-center p-8 rounded-3xl bg-black text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <stat.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <div className="text-5xl md:text-6xl font-black mb-2">
              {formatNumber(stat.value)}
              <span className="text-green-500 text-3xl ml-1">{stat.suffix}</span>
            </div>
            <div className="text-gray-300 font-semibold text-lg">{stat.label}</div>
            <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 transition-all duration-1000 ease-out"
                style={{ width: `${(stat.value / stat.target) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Scroll Activated Tabs with Fixed Connecting Line
function ScrollTabsSection() {
  const [activeTab, setActiveTab] = useState('mission');
  const sectionRef = useRef(null);
  const tabsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabsRef.current.findIndex(tab => tab === entry.target);
            if (index !== -1) {
              setActiveTab(['mission', 'vision', 'values'][index]);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    tabsRef.current.forEach(tab => {
      if (tab) observer.observe(tab);
    });

    return () => observer.disconnect();
  }, []);

  const tabs = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: Target,
      content: 'To deliver exceptional creative solutions that not only meet but exceed our clients expectations. We transform complex challenges into beautiful, functional designs that drive results and create lasting impact.'
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: Eye,
      content: 'To be the leading creative agency recognized for innovation, quality, and the ability to turn visionary ideas into tangible success stories for our clients worldwide.'
    },
    {
      id: 'values',
      title: 'Our Values',
      icon: Heart,
      content: 'Creativity that pushes boundaries • Quality in every pixel • Collaboration as partners • Integrity in all actions • Results that matter'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-green-500 font-bold text-sm uppercase tracking-wider">Our Core</span>
              <div className="h-1 w-20 bg-green-500 mt-2 mx-auto"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              What Drives
              <span className="block text-green-500">Us Forward</span>
            </h2>
          </div>

          <div className="relative">
            {/* Fixed Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700">
              <div 
                className="absolute w-0.5 bg-green-500 transition-all duration-500 ease-out"
                style={{
                  height: '33.333%',
                  top: { mission: '0%', vision: '33.333%', values: '66.666%' }[activeTab] || '0%'
                }}
              ></div>
            </div>

            {/* Tabs */}
            <div className="space-y-12">
              {tabs.map((tab, index) => {
                const IconComponent = tab.icon;
                return (
                  <div
                    key={tab.id}
                    ref={el => tabsRef.current[index] = el}
                    className={`flex items-start gap-8 transition-all duration-500 ${
                      activeTab === tab.id ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0 bg-black transition-all duration-500 ${
                      activeTab === tab.id 
                        ? 'border-green-500 bg-green-500 text-white scale-110' 
                        : 'border-gray-600 text-gray-400'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-12">
                      <h3 className="text-3xl font-bold mb-4 text-white">
                        {tab.title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {tab.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Grid with Correct Services
function ServicesGrid() {
  const services = [
    {
      name: 'Brand Identity',
      description: 'Complete brand systems including logos, style guides, and visual identity that tell your unique story',
      icon: Palette
    },
    {
      name: 'UI/UX Design',
      description: 'User-centered digital experiences and interfaces that are intuitive, beautiful, and conversion-focused',
      icon: Code
    },
    {
      name: 'Motion Graphics',
      description: 'Dynamic animations and video content that bring your brand to life and capture attention',
      icon: Video
    },
    {
      name: 'Print Design',
      description: 'Physical marketing materials, packaging, and collateral that make lasting impressions',
      icon: FileText
    },
    {
      name: 'Web Development',
      description: 'Fast, responsive, and engaging websites built with modern technologies and best practices',
      icon: Zap
    },
    {
      name: 'E-commerce Design',
      description: 'Optimized online store designs that drive sales and provide seamless shopping experiences',
      icon: ShoppingCart
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <div 
            key={index}
            className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-green-500 transition-all duration-500 hover:shadow-2xl hover:scale-105"
          >
            <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <IconComponent className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-green-500 transition-colors duration-300">
              {service.name}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
            <div className="mt-6 h-0.5 w-12 bg-green-500 transform group-hover:w-full transition-all duration-500"></div>
          </div>
        );
      })}
    </div>
  );
}

// Calendly Embed Component
// CalendlyEmbed component
const CalendlyEmbed = () => {
  return (
    <div className="w-full h-full">
      <iframe 
        src="https://calendly.com/fewlixstudio/30min"
        className="w-full h-full border-0"
        title="Schedule a Meeting"
        loading="lazy"
      />
    </div>
  );
};


function EnhancedHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(105, 222, 55, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(105, 222, 55, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-green-500/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 border border-green-500/20 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-green-500/40 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-green-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading with Creative Typography */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-green-500" />
              <span className="text-green-500 text-sm font-medium">Your creative team's creative team™</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tight">
              FEWLIX
            </h1>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 mb-2 leading-relaxed">
                Scale your creative output with elite global talent
              </p>
              <p className="text-lg md:text-xl text-green-500 font-semibold mb-8">
                powered by AI workflows that deliver anything you imagine
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { number: '700M+', label: 'Revenue Generated' },
              { number: '1000+', label: 'Ads Created' },
              { number: '80+', label: 'Brands Empowered' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-500">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a 
              href="#calendly-embed"
              className="group bg-green-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services">

            <button className="group border border-gray-600 text-white px-8 py-4 rounded-lg font-bold hover:border-green-500 hover:text-green-500 transition-all duration-300 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Our Services
            </button>
            </a>
          </div>

          {/* Client Logos */}
          <div className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-center text-gray-400 text-sm mb-6">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {['Pharmacy', 'Reddit', 'Recap', 'Kins', '8OPENES', 'Antler'].map((client, index) => (
                <div key={index} className="text-gray-400 font-medium text-lg hover:text-green-500 transition-colors cursor-pointer">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-500 rounded-full mt-2"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(-10px) rotate(240deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
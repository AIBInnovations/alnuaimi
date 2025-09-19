'use client';

export function DemoServicesSection() {
  const services = [
    {
      title: "AI Customer Support",
      description: "Effortless conversations, AI handles queries instantly, day or night."
    },
    {
      title: "Document Automation",
      description: "Manual entry, automated, see data flow from emails to your systems in seconds."
    },
    {
      title: "Intelligent Chatbot",
      description: "Smart answers, real responses—see our chatbot resolve complex questions."
    },
    {
      title: "Real-Time Dashboards",
      description: "All your KPIs, live—track progress and get smart alerts in real time."
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 bg-[#1F3130]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-20 gap-10 flex-wrap lg:flex-nowrap">
          {/* Left Content */}
          <div className="flex-1 max-w-md">
            <div className="inline-block px-6 py-2 border-2 border-[#00FFFF] rounded-full text-[#00FFFF] text-sm mb-8 hover:bg-[#00FFFF]/10 transition-all duration-300">
              Demo
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              Why settle for rigid tools when you can grow with AI that evolves?
            </p>
          </div>

          {/* Right Content */}
          <div className="flex-[1.5] text-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-10 leading-tight tracking-tight">
              View Our Services,<br/>
              See how they work
            </h1>
            <button className="inline-flex items-center gap-3 px-7 py-3 bg-[#00FFFF] text-[#1F3130] rounded-full font-medium hover:bg-[#00FFFF]/90 hover:transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,255,255,0.3)] transition-all duration-300">
              Book Audit
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative">
          {/* Circular gradients behind cards in curved arrangement - with overflow */}
          <div className="absolute inset-0 pointer-events-none overflow-visible z-10">
            {/* First gradient - leftmost */}
            <div
              className="absolute w-[400px] h-[400px] rounded-full"
              style={{
                left: '5%',
                top: '60px',
                background: 'radial-gradient(circle at center, #00FFFF33, #00FFFF11, transparent)',
                filter: 'blur(60px)'
              }}
            />
            {/* Second gradient - center-left */}
            <div
              className="absolute w-[400px] h-[400px] rounded-full"
              style={{
                left: '30%',
                top: '20px',
                background: 'radial-gradient(circle at center, #00FFFF33, #00FFFF11, transparent)',
                filter: 'blur(60px)'
              }}
            />
            {/* Third gradient - center-right */}
            <div
              className="absolute w-[400px] h-[400px] rounded-full"
              style={{
                right: '30%',
                top: '20px',
                background: 'radial-gradient(circle at center, #00FFFF33, #00FFFF11, transparent)',
                filter: 'blur(60px)'
              }}
            />
            {/* Fourth gradient - rightmost */}
            <div
              className="absolute w-[400px] h-[400px] rounded-full"
              style={{
                right: '5%',
                top: '60px',
                background: 'radial-gradient(circle at center, #00FFFF33, #00FFFF11, transparent)',
                filter: 'blur(60px)'
              }}
            />

            {/* Additional gradient that extends into next section */}
            <div
              className="absolute w-[500px] h-[500px] rounded-full"
              style={{
                left: '20%',
                bottom: '-200px',
                background: 'radial-gradient(circle at center, #00FFFF22, #00FFFF08, transparent)',
                filter: 'blur(80px)'
              }}
            />

            {/* Another overflow gradient */}
            <div
              className="absolute w-[450px] h-[450px] rounded-full"
              style={{
                right: '15%',
                bottom: '-150px',
                background: 'radial-gradient(circle at center, #00FFFF25, #00FFFF09, transparent)',
                filter: 'blur(70px)'
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative z-10">
            {services.map((service, index) => (
            <div key={index} className="relative">
              {/* Mobile circular gradient behind card */}
              <div
                className="absolute inset-0 md:hidden flex items-center justify-center pointer-events-none"
                style={{
                  zIndex: 0
                }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, #00FFFF 0%, #00FFFF80 30%, transparent 60%)',
                    opacity: 0.8,
                    filter: 'blur(40px)'
                  }}
                />
              </div>

              <div
                className="group bg-transparent border border-white/10 rounded-2xl p-8 hover:bg-white/5 hover:transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative flex flex-col h-full min-h-[400px]"
              style={{
                animationDelay: `${0.4 + index * 0.1}s`,
                borderLeftColor: 'rgba(0, 255, 255, 0.3)',
                borderRightColor: 'rgba(0, 255, 255, 0.3)',
                boxShadow: `
                  inset 4px 0 8px rgba(0, 255, 255, 0.1),
                  inset -4px 0 8px rgba(0, 255, 255, 0.1)
                `
              }}
            >
              <h3 className="text-2xl font-normal text-white leading-tight h-[80px] flex items-center">
                {service.title}
              </h3>

              {/* Spacer for centering */}
              <div className="flex-grow"></div>

              {/* Video Placeholder - Centered */}
              <div className="aspect-video bg-gradient-to-br from-white/15 to-white/5 rounded-xl flex items-center justify-center cursor-pointer group/video hover:from-white/20 hover:to-white/8 transition-all duration-300 flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover/video:scale-110 group-hover/video:shadow-[0_5px_20px_rgba(0,0,0,0.3)] transition-all duration-300">
                  <div className="w-0 h-0 border-l-[15px] border-l-[#1F3130] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>

              {/* Spacer for centering */}
              <div className="flex-grow"></div>

              <p className="text-white/70 text-sm leading-relaxed h-[60px] flex items-end">
                {service.description}
              </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section > div > div:first-child {
          animation: fadeInUp 0.6s ease both;
        }

        section > div > div:last-child > div {
          animation: fadeInUp 0.6s ease both;
        }
      `}</style>
    </section>
  );
}
'use client';

export function ServicesSection() {
  const services = [
    {
      title: "AI Customer Support",
      description: "24/7 instant replies in multiple languages, boosting service speed and quality."
    },
    {
      title: "Document Automation",
      description: "Reads emails and files, sending data straight to your systems, no manual entry needed.",
      featured: true
    },
    {
      title: "Intelligent Chatbot",
      description: "Understands your policies to answer complex queries and escalate when needed.",
      featured: true
    },
    {
      title: "Real-Time Dashboards",
      description: "Live KPIs and smart alerts for fast, informed business decision-making."
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-[#1F3130] rounded-t-3xl shadow-2xl overflow-hidden">
      {/* Earth Surface Curve - Full Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] overflow-visible z-0">
        {/* Clipping container for horizontal only */}
        <div
          className="absolute left-[10%] right-[10%] bottom-0"
          style={{
            height: '1000px',
            clipPath: 'polygon(0 -500px, 100% -500px, 100% 100%, 0 100%)'
          }}
        >
          {/* Horizontal gradient mask overlay */}
          <div
            className="absolute left-0 right-0"
            style={{
              height: '2000px',
              bottom: '-1000px',
              maskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.1) 95%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0.1) 95%, transparent 100%)'
            }}
          >
            {/* Glow effect only */}
            <div
              className="absolute w-[3500px] h-[3500px] rounded-full left-1/2 transform -translate-x-1/2 pointer-events-none"
              style={{
                top: '550px',
                boxShadow: `
                  0 0 100px #00FFFF,
                  0 0 150px #00FFFF,
                  0 0 200px #00FFFFAA,
                  0 0 250px #00FFFF88,
                  0 0 300px #00FFFF66,
                  0 0 400px #00FFFF44
                `
              }}
            />
          </div>
        </div>
      </div>

      {/* Services Badge */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-10">
        <div className="inline-block px-8 py-3 border-2 border-[#00FFFF] rounded-full text-[#00FFFF] text-sm bg-transparent hover:bg-[#00FFFF]/10 transition-all duration-300">
          Services
        </div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-20 mt-16">
          <h1 className="text-6xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Elevate Your Business
          </h1>
          <p className="text-white/70 text-lg max-w-lg mx-auto leading-relaxed">
            Pioneering AI automation designed for the UAE, flexible, intelligent, and always in tune with your growth.
          </p>
        </div>

        {/* Services Cards in Curved Layout */}
        <div className="relative">
          {/* Cards Container with Curve */}
          <div className="relative flex justify-center items-end gap-8 z-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`
                  group relative bg-[#1F3130] hover:bg-[#243635]
                  border border-white/20 rounded-2xl overflow-hidden
                  transition-all duration-500 cursor-pointer
                  min-h-[280px] w-[280px] flex flex-col
                  hover:transform hover:-translate-y-4 hover:shadow-2xl
                  ${service.featured ? 'scale-105 bg-[#243635]' : ''}
                `}
                style={{
                  // Create upward bulging curve by positioning cards at different heights
                  transform: `translateY(${getCurveOffset(index, services.length)}px) ${service.featured ? 'scale(1.05)' : 'scale(1)'}`,
                  marginBottom: `${-getCurveOffset(index, services.length)}px`
                }}
              >
                {/* Black gradient overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Content positioned at bottom */}
                <div className="flex flex-col justify-end h-full p-8 relative z-10">
                  <h3 className="text-2xl font-medium text-white mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
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

        .relative > div:nth-child(1) {
          animation: fadeInUp 0.6s ease 0.3s both;
        }
        .relative > div:nth-child(2) {
          animation: fadeInUp 0.6s ease 0.4s both;
        }
        .relative > div:nth-child(3) {
          animation: fadeInUp 0.6s ease 0.5s both;
        }
        .relative > div:nth-child(4) {
          animation: fadeInUp 0.6s ease 0.6s both;
        }
      `}</style>
    </section>
  );
}

// Function to create upward bulging curve
function getCurveOffset(index: number, totalCards: number): number {
  // Create a curve where middle cards are higher (negative Y = up)
  const center = (totalCards - 1) / 2;
  const distance = Math.abs(index - center);
  const maxDistance = center;
  const curveHeight = 80; // Maximum height of the curve

  // Cards in the middle should be higher (negative Y), outer cards lower
  const normalizedDistance = distance / maxDistance;
  return curveHeight * normalizedDistance - curveHeight;
}
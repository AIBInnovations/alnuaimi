'use client';

export function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-10 bg-[#1F3130]">
      {/* Curved Gradient Surface - Tilted Left */}
      <div
        className="absolute h-[500px] overflow-visible z-0"
        style={{
          bottom: '-100px',
          left: '800px',
          right: '-800px',
          transform: 'rotate(-45deg)',
          transformOrigin: 'center bottom'
        }}
      >
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
              className="absolute w-[2000px] h-[2000px] rounded-full left-1/2 transform -translate-x-1/2 pointer-events-none"
              style={{
                top: '250px',
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
      <div className="w-full max-w-7xl flex items-center justify-center gap-4 relative">
        {/* Main Left Card */}
        <div className="relative w-[880px] h-[500px] bg-white/[0.02] border-2 border-[#00FFFF]/80 rounded-[30px] flex z-20">
          {/* Left Content Side */}
          <div className="flex-1 p-16 flex flex-col">
            {/* Icon Pills */}
            <div className="flex gap-5 mb-12">
              <div className="w-12 h-12 border-2 border-[#00FFFF]/60 rounded-full flex items-center justify-center bg-[#00FFFF]/5 hover:bg-[#00FFFF]/15 hover:border-[#00FFFF] hover:scale-110 transition-all duration-300 cursor-pointer">
                <svg className="w-6 h-6 stroke-[#00FFFF] fill-none stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                </svg>
              </div>
              <div className="w-12 h-12 border-2 border-[#00FFFF]/60 rounded-full flex items-center justify-center bg-[#00FFFF]/5 hover:bg-[#00FFFF]/15 hover:border-[#00FFFF] hover:scale-110 transition-all duration-300 cursor-pointer">
                <svg className="w-6 h-6 stroke-[#00FFFF] fill-none stroke-2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" rx="1"/>
                  <rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="3" y="14" width="7" height="7" rx="1"/>
                  <rect x="14" y="14" width="7" height="7" rx="1"/>
                </svg>
              </div>
              <div className="w-12 h-12 border-2 border-[#00FFFF]/60 rounded-full flex items-center justify-center bg-[#00FFFF]/5 hover:bg-[#00FFFF]/15 hover:border-[#00FFFF] hover:scale-110 transition-all duration-300 cursor-pointer">
                <svg className="w-6 h-6 stroke-[#00FFFF] fill-none stroke-2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <polyline points="9 11 12 14 15 11"/>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="mt-auto">
              <div className="text-[#00FFFF]/90 text-lg mb-5 font-normal">
                Start Scaling Today
              </div>
              <h1 className="text-white text-5xl font-light leading-tight tracking-tight">
                Ready to Scale<br/>Smarter?
              </h1>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="w-[380px] flex-shrink-0 p-4">
            <div
              className="w-full h-full rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(200, 200, 200, 0.9) 0%, rgba(180, 180, 180, 0.9) 100%)'
              }}
            />
          </div>
        </div>

        {/* Right Side Stack */}
        <div className="flex flex-col z-30">
          {/* Small Box */}
          <div className="w-[396px] h-[250px] bg-white/[0.02] border-2 border-[#00FFFF]/80 rounded-[25px] p-4">
            <div
              className="w-full h-full rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(200, 200, 200, 0.9) 0%, rgba(180, 180, 180, 0.9) 100%)'
              }}
            />
          </div>

          {/* CTA Button Container */}
          <div className="h-[250px] flex items-center justify-center">
            <button className="px-6 py-3 bg-[#00FFFF] text-[#0a1f1f] border-none rounded-[10px] text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#00FFFF]/90 hover:transform hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,255,255,0.4)]">
              Get Started Now
              <span className="text-base">↗</span>
            </button>
          </div>
        </div>



        {/* Glowing Beam Effect */}
        <div
          className="absolute w-1 h-[400px] z-10 animate-pulse"
          style={{
            bottom: '-200px',
            left: '45%',
            background: 'linear-gradient(180deg, #00FFFF 0%, rgba(0,255,255,0.8) 30%, rgba(0,255,255,0.3) 60%, transparent 100%)',
            transform: 'rotate(-25deg)',
            filter: 'blur(8px)'
          }}
        >
          <div
            className="absolute top-0 -left-5 -right-5 bottom-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,255,255,0.4) 0%, rgba(0,255,255,0.2) 30%, transparent 60%)',
              filter: 'blur(20px)'
            }}
          />
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px) translateY(-50%);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(-50%);
          }
        }

        @keyframes beamGlow {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        section > div > div:first-child {
          animation: fadeInUp 0.8s ease both;
        }

        section > div > div:first-child > div:first-child > div:nth-child(1) {
          animation: fadeInUp 0.6s ease 0.1s both;
        }

        section > div > div:first-child > div:first-child > div:nth-child(2) {
          animation: fadeInUp 0.6s ease 0.2s both;
        }

        section > div > div:first-child > div:first-child > div:nth-child(3) {
          animation: fadeInUp 0.6s ease 0.3s both;
        }

        section > div > div:first-child > div:last-child {
          animation: fadeInUp 0.8s ease 0.4s both;
        }

        section > div > div:nth-child(2) {
          animation: fadeInUp 0.8s ease 0.5s both;
        }

        section > div > div:nth-child(3) {
          animation: slideInRight 0.8s ease 0.6s both;
        }

        section > div > div:last-child {
          animation: beamGlow 3s ease-in-out infinite;
        }

        @media (max-width: 1200px) {
          section > div {
            transform: scale(0.85);
          }
        }

        @media (max-width: 1024px) {
          section > div {
            transform: scale(0.7);
          }
        }

        @media (max-width: 768px) {
          section > div {
            flex-direction: column;
            transform: scale(1);
          }

          section > div > div:first-child {
            width: 100%;
            max-width: 500px;
            height: auto;
            padding: 40px;
          }

          section > div > div:first-child > div:last-child {
            position: static;
            margin-top: 100px;
          }

          section > div > div:nth-child(2) {
            display: none;
          }

          section > div > div:nth-child(3) {
            position: static;
            margin-top: 30px;
            width: 100%;
            max-width: 400px;
          }

          section > div > div:last-child {
            display: none;
          }

          section > div > div:first-child > div:last-child > h1 {
            font-size: 42px;
          }
        }
      `}</style>
    </section>
  );
}
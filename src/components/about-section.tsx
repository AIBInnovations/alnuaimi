'use client';

export function AboutSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-6 bg-[#1F3130] overflow-x-hidden">
      {/* Decorative glow orb */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '50%',
          right: '-100px',
          transform: 'translateY(-50%)'
        }}
      />

      <div className="max-w-7xl w-full flex items-center gap-20 relative">
        {/* Timeline and About Badge */}
        <div className="flex-shrink-0 flex flex-col items-center mr-8">
          <div className="inline-block px-6 py-2 border-2 border-[#00FFFF] rounded-full text-[#00FFFF] text-sm mb-5 bg-transparent hover:bg-[#00FFFF]/10 transition-all duration-300 whitespace-nowrap">
            About Us
          </div>
          <div className="relative">
            <div
              className="w-[2px] bg-gradient-to-b from-[#00FFFF] to-transparent"
              style={{ height: '400px' }}
            />
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#00FFFF] rounded-full"
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}
            />
          </div>
        </div>

        {/* Left Content */}
        <div className="flex-1 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-10 tracking-tight">
            The future of intelligent automation and decision-making.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed font-light">
            As pioneers in AI-driven business transformation, SultanAlnuaimi.ai empowers organizations to unlock their full potential through intelligent automation. Founded with a vision to revolutionize how businesses operate, we specialize in creating bespoke AI solutions that eliminate manual inefficiencies and accelerate growth.
          </p>
        </div>

        {/* Right Image Placeholder */}
        <div className="flex-none w-[500px] relative">
          <div className="group aspect-[4/3] bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 relative overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 35px,
                  rgba(255, 255, 255, 0.03) 35px,
                  rgba(255, 255, 255, 0.03) 70px
                )`
              }}
            />
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

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes lineGrow {
          from {
            height: 0;
          }
          to {
            height: 400px;
          }
        }

        section > div > div:first-child > div:first-child {
          animation: fadeInUp 0.6s ease both;
        }

        section > div > div:first-child > div:last-child > div:first-child {
          animation: lineGrow 1s ease 0.3s both;
        }

        section > div > div:first-child > div:last-child > div:last-child {
          animation: fadeInUp 0.4s ease 0.2s both;
        }

        section > div > div:nth-child(2) > h1 {
          animation: fadeInRight 0.8s ease 0.4s both;
        }

        section > div > div:nth-child(2) > p {
          animation: fadeInRight 0.8s ease 0.6s both;
        }

        section > div > div:last-child > div {
          animation: fadeInUp 0.8s ease 0.8s both;
        }

        @media (max-width: 1024px) {
          section > div {
            flex-direction: column;
            gap: 60px;
          }

          section > div > div:first-child {
            position: relative;
            margin-bottom: 40px;
          }

          section > div > div:first-child > div:last-child > div:first-child {
            height: 100px;
          }

          section > div > div:nth-child(2) {
            padding-left: 0;
            text-align: center;
          }

          section > div > div:nth-child(2) > h1 {
            font-size: 42px;
          }

          section > div > div:last-child {
            width: 100%;
            max-width: 600px;
          }
        }

        @media (max-width: 640px) {
          section > div > div:nth-child(2) > h1 {
            font-size: 32px;
          }

          section > div > div:nth-child(2) > p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
'use client';

export function ContactSection() {
  return (
    <section className="relative min-h-screen py-20 px-10 bg-[#1F3130] overflow-hidden">
      {/* Overflow gradient from testimonials section */}
      <div
        className="absolute w-1/2 h-full rounded-full pointer-events-none"
        style={{
          top: '-30%',
          right: '-10%',
          height: '160%',
          background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.05) 0%, transparent 70%)',
          transform: 'rotate(-20deg)',
          zIndex: -1
        }}
      />

      {/* Curved Gradient Surface - Tilted Right */}
      <div
        className="absolute h-[500px] overflow-visible z-0"
        style={{
          bottom: '-600px',
          left: '-400px',
          right: '800px',
          transform: 'rotate(25deg)',
          transformOrigin: 'right bottom'
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

      {/* Curved Background Effect */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          bottom: '-200px',
          left: '-200px',
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'float 20s ease-in-out infinite'
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Section */}
          <div className="text-white flex flex-col justify-start pt-10">
            <button className="px-4 py-1.5 border border-[#00FFFF] text-[#00FFFF] rounded-full text-sm mb-10 bg-transparent hover:bg-[#00FFFF]/10 transition-all duration-300 w-fit">
              Contact Us
            </button>

            <h1 className="text-5xl md:text-6xl font-light leading-tight mb-10 tracking-tight">
              Scaling Made<br/>Simple with AI
            </h1>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FFFF] text-[#1F3130] rounded-lg font-semibold hover:bg-[#00FFFF]/90 hover:transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,255,255,0.3)] transition-all duration-300 w-fit">
              Get Started
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
          </div>

          {/* Right Section - Contact Cards */}
          <div className="relative space-y-8">
            {/* Gradient circles behind contact info card */}
            <div className="absolute inset-0 pointer-events-none overflow-visible">
              {/* First gradient circle */}
              <div
                className="absolute w-[400px] h-[400px] rounded-full"
                style={{
                  top: '-50px',
                  left: '-100px',
                  background: 'radial-gradient(circle at center, #00FFFF40, #00FFFF20, #00FFFF08, transparent)',
                  filter: 'blur(60px)'
                }}
              />
              {/* Second gradient circle */}
              <div
                className="absolute w-[350px] h-[350px] rounded-full"
                style={{
                  top: '-30px',
                  right: '-80px',
                  background: 'radial-gradient(circle at center, #00FFFF35, #00FFFF18, #00FFFF06, transparent)',
                  filter: 'blur(50px)'
                }}
              />
              {/* Third gradient circle */}
              <div
                className="absolute w-[300px] h-[300px] rounded-full"
                style={{
                  top: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'radial-gradient(circle at center, #00FFFF30, #00FFFF15, #00FFFF05, transparent)',
                  filter: 'blur(40px)'
                }}
              />
              {/* Fourth gradient circle */}
              <div
                className="absolute w-[250px] h-[250px] rounded-full"
                style={{
                  top: '60px',
                  right: '-60px',
                  background: 'radial-gradient(circle at center, #00FFFF25, #00FFFF12, #00FFFF04, transparent)',
                  filter: 'blur(35px)'
                }}
              />
            </div>

            {/* Contact Info Glass Card */}
            <div className="relative bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-normal text-[#e0f7fa]">
                  Connect with us
                </h2>
                <a href="#" className="inline-flex items-center gap-2 text-[#00FFFF] hover:transform hover:translate-x-1 transition-all duration-300">
                  Explore more
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>
              <div className="space-y-2 text-white/70 leading-relaxed text-base">
                <p>Address: ABC Place, Dubai, UAE</p>
                <p>Email ID: abc@gmail.com</p>
                <p>Contact Number: 9926446622</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm">Get in touch with our team for personalized AI solutions that scale with your business needs.</p>
              </div>
            </div>

            {/* Contact Form Glass Card */}
            <div className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-normal text-[#e0f7fa]">Drop us a message</h2>
                <button className="flex items-center gap-2 px-5 py-2 border border-[#00FFFF] text-[#00FFFF] rounded-md text-sm hover:bg-[#00FFFF]/10 transition-all duration-300">
                  Contact Us
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </button>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-white/[0.03] border border-[#00FFFF]/30 rounded-lg px-4 py-3 text-[#e0f7fa] placeholder-white/50 focus:outline-none focus:border-[#00FFFF] focus:bg-white/[0.05] transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-white/[0.03] border border-[#00FFFF]/30 rounded-lg px-4 py-3 text-[#e0f7fa] placeholder-white/50 focus:outline-none focus:border-[#00FFFF] focus:bg-white/[0.05] transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white/[0.03] border border-[#00FFFF]/30 rounded-lg px-4 py-3 text-[#e0f7fa] placeholder-white/50 focus:outline-none focus:border-[#00FFFF] focus:bg-white/[0.05] transition-all duration-300"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-white/[0.03] border border-[#00FFFF]/30 rounded-lg px-4 py-3 text-[#e0f7fa] placeholder-white/50 focus:outline-none focus:border-[#00FFFF] focus:bg-white/[0.05] transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Business"
                      className="w-full bg-white/[0.03] border border-[#00FFFF]/30 rounded-lg px-4 py-3 text-[#e0f7fa] placeholder-white/50 focus:outline-none focus:border-[#00FFFF] focus:bg-white/[0.05] transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-white/[0.03] border border-[#00FFFF]/30 rounded-lg px-4 py-3 text-[#e0f7fa] placeholder-white/50 focus:outline-none focus:border-[#00FFFF] focus:bg-white/[0.05] transition-all duration-300 resize-vertical"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations and parallax */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-30px) translateX(20px);
          }
          66% {
            transform: translateY(20px) translateX(-20px);
          }
        }

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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }


        .grid > div:first-child {
          animation: fadeInLeft 0.8s ease 0.2s both;
        }

        .grid > div:last-child {
          animation: fadeInRight 0.8s ease 0.4s both;
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          h1 {
            font-size: 42px;
          }

        }

        @media (max-width: 640px) {
          h1 {
            font-size: 32px;
          }

          .grid.grid-cols-1.md\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }

          .bg-white\\/\\[0\\.05\\] {
            padding: 32px 24px;
          }
        }
      `}</style>

    </section>
  );
}
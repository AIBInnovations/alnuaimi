'use client';

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Other platforms made us feel stuck. This one adapts and evolves like a real team member.",
      author: "James R",
      company: "NovaSupply"
    },
    {
      text: "Other platforms made us feel stuck. This one adapts and evolves like a real team member.",
      author: "James R",
      company: "NovaSupply"
    },
    {
      text: "Other platforms made us feel stuck. This one adapts and evolves like a real team member.",
      author: "James R",
      company: "NovaSupply"
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background matching all other sections */}
      <div
        className="absolute inset-0 pointer-events-none bg-[#1F3130]"
        style={{
          zIndex: -1
        }}
      />

      {/* Background curve effect */}
      <div
        className="absolute w-1/2 h-full rounded-full pointer-events-none"
        style={{
          top: '-20%',
          right: '-10%',
          height: '150%',
          background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.05) 0%, transparent 70%)',
          transform: 'rotate(-20deg)',
          zIndex: -1
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-8 py-3 border-2 border-[#00FFFF] rounded-full text-[#00FFFF] text-sm bg-transparent hover:bg-[#00FFFF]/10 transition-all duration-300 mb-10">
            Testimonials
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-5 tracking-tight">
            Real Stories, Real Growth
          </h1>
          <p className="text-white/70 text-lg font-light">
            Join Other business Owners who used our service and improved their growth
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border-2 border-[#00FFFF]/30 rounded-[25px] p-10 relative transition-all duration-300 hover:bg-white/[0.05] hover:border-[#00FFFF]/50 hover:transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm"
            >
              <div className="text-[#00FFFF]/30 text-7xl font-bold font-serif leading-none mb-5">"</div>
              <p className="text-white/90 text-lg leading-relaxed mb-10 min-h-[100px]">
                {testimonial.text}
              </p>
              <div className="mt-auto">
                <div className="text-white text-xl font-medium mb-2">{testimonial.author}</div>
                <div className="text-white/50 text-base">{testimonial.company}</div>
              </div>
            </div>
          ))}
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

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .text-center > div:first-child {
          animation: fadeInUp 0.6s ease both;
        }

        .text-center > h1 {
          animation: fadeInUp 0.6s ease 0.1s both;
        }

        .text-center > p {
          animation: fadeInUp 0.6s ease 0.2s both;
        }

        .grid > div:nth-child(1) {
          animation: fadeInScale 0.6s ease 0.3s both;
        }

        .grid > div:nth-child(2) {
          animation: fadeInScale 0.6s ease 0.4s both;
        }

        .grid > div:nth-child(3) {
          animation: fadeInScale 0.6s ease 0.5s both;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }

          .text-center > h1 {
            font-size: 48px;
          }
        }

        @media (max-width: 640px) {
          .text-center > h1 {
            font-size: 36px;
          }

          .grid > div {
            padding: 30px;
          }

          .text-[#00FFFF]/30 {
            font-size: 60px;
          }

          .text-white/90 {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
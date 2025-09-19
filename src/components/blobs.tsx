import type React from "react"
import { useState, useEffect } from "react"

export function AnimatedBlobs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  // Calculate scaling and blur based on scroll with increased intensity
  const scrollProgress = Math.min(scrollY / 600, 1); // Faster effect over 600px
  const scale = 1 + (scrollProgress * 1.5); // Scale from 1 to 2.5x
  const blur = 1 + (scrollProgress * 6); // Blur from 1vmin to 7vmin

  const blobStyle = {
    "--border-radius": "115% 140% 145% 110% / 125% 140% 110% 125%",
    "--border-width": "5vmin",
    aspectRatio: "1",
    display: "block",
    gridArea: "stack",
    backgroundSize: "calc(100% + var(--border-width) * 2)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    border: "var(--border-width) solid transparent",
    borderRadius: "var(--border-radius)",
    maskImage: "linear-gradient(transparent, transparent), linear-gradient(black, white)",
    maskClip: "padding-box, border-box",
    maskComposite: "intersect",
    mixBlendMode: "screen" as const,
    height: "95vmin",
    filter: `blur(${blur}vmin)`,
    transform: `scale(${scale})`,
    transition: "transform 0.1s ease-out, filter 0.1s ease-out",
  } as React.CSSProperties

  const blobs = [
    {
      backgroundColor: "#31C3BF",
      backgroundImage: "linear-gradient(#31C3BF, #4FD1CE, #31C3BF)",
      transform: "rotate(30deg) scale(1.03)",
    },
    {
      backgroundColor: "#26A5A1",
      backgroundImage: "linear-gradient(#26A5A1, #31C3BF, #26A5A1)",
      transform: "rotate(60deg) scale(0.95)",
    },
    {
      backgroundColor: "#4FD1CE",
      backgroundImage: "linear-gradient(#4FD1CE, #6DDDD9, #4FD1CE)",
      transform: "rotate(90deg) scale(0.97)",
    },
    {
      backgroundColor: "#1C8B87",
      backgroundImage: "linear-gradient(#1C8B87, #26A5A1, #1C8B87)",
      transform: "rotate(120deg) scale(1.02)",
    },
  ]

  return (
    <div
      className="hero-height w-screen flex items-center justify-center overflow-hidden fixed top-0 left-0 z-10"
      style={{
        filter: `blur(${scrollProgress * 5}px)`,
        transform: `scale(${1 + scrollProgress * 0.3})`,
        transition: "filter 0.05s ease-out, transform 0.05s ease-out",
        width: "100vw",
        height: "100vh",
        maxHeight: "100dvh"
      }}
    >
      {/* Bottom Left Text */}
      <div className="absolute bottom-10 left-10 text-white text-left"
        style={{
          opacity: 1 - scrollProgress * 0.9,
          transition: "opacity 0.05s ease-out"
        }}
      >
        <p className="text-sm md:text-base font-bold mb-4">
          Future-Ready<br/>
          Strategies
        </p>
        <p className="text-sm md:text-base font-bold">
          24/7 Customer<br/>
          Support
        </p>
      </div>

      {/* Bottom Right Arrow - Hidden when scrolled */}
      {scrollProgress < 0.5 && (
        <div className="absolute bottom-10 right-10"
          style={{
            opacity: 1 - scrollProgress * 2,
            transition: "opacity 0.3s ease-out"
          }}
        >
          <button
            onClick={scrollToNext}
            className="w-12 h-12 border border-[#00FFFF] text-[#00FFFF] rounded-full bg-transparent hover:bg-[#00FFFF]/10 transition-all duration-300 flex items-center justify-center animate-bounce"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M12 19l-7-7M12 19l7-7"/>
            </svg>
          </button>
        </div>
      )}
     <div
       className="absolute pointer-events-none z-10"
       style={{
         opacity: 1 - scrollProgress * 0.9,
         transform: `scale(${1 - scrollProgress * 0.2})`,
         transition: "opacity 0.05s ease-out, transform 0.05s ease-out"
       }}
     >
        <div className="text-center">
          <p className="text-white text-sm md:text-base mb-4 tracking-wider">SULTAN ALNUAIMI</p>
          <h1 className="text-white font-medium text-[1.98rem] md:text-5xl lg:text-5xl leading-tight tracking-tighter">
            Transform Business<br/>
            Operations with<br/>
            AI Solutions
          </h1>
          <p className="hidden md:block text-white text-sm md:text-base mt-6 max-w-2xl mx-auto px-4">
            We deliver cutting-edge AI automation that streamlines processes,<br/>
            reduces costs by up to 60%, and revolutionizes customer engagement<br/>
            across the UAE and beyond.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 mt-8 bg-[#00FFFF] text-[#1F3130] rounded-lg font-semibold hover:bg-[#00FFFF]/90 hover:transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,255,255,0.3)] transition-all duration-300">
            View Services
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="grid" style={{ gridTemplateAreas: "'stack'" }}>
        <div
          className="grid relative"
          style={{
            gridTemplateAreas: "'stack'",
            gridArea: "stack",
            animation: "spin 5s linear infinite",
          }}
        >
          {blobs.map((blob, index) => (
            <span
              key={index}
              style={{
                ...blobStyle,
                ...blob,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}


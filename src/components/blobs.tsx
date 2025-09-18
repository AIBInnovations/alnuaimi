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
    height: "75vmin",
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
      className="h-screen w-screen flex items-center justify-center overflow-hidden fixed top-0 left-0 z-10"
      style={{
        filter: `blur(${scrollProgress * 5}px)`,
        transform: `scale(${1 + scrollProgress * 0.3})`,
        transition: "filter 0.05s ease-out, transform 0.05s ease-out"
      }}
    >
     <div
       className="absolute pointer-events-none z-10"
       style={{
         opacity: 1 - scrollProgress * 0.9,
         transform: `scale(${1 - scrollProgress * 0.2})`,
         transition: "opacity 0.05s ease-out, transform 0.05s ease-out"
       }}
     >
        <h1 className="text-white font-bold text-8xl md:text-9xl leading-none tracking-tighter text-center">
          Alnuaimi
        </h1>
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


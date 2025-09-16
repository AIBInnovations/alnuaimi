import type React from "react"
import { useState, useEffect } from "react"
import { GooeyText } from "@/components/ui/gooey-text-morphing"

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
      className="min-h-screen w-full flex items-center justify-center overflow-hidden fixed top-0 left-0 relative"
      style={{
        backgroundColor: "#212a37",
        filter: `blur(${scrollProgress * 5}px)`,
        transform: `scale(${1 + scrollProgress * 0.3})`,
        transition: "filter 0.05s ease-out, transform 0.05s ease-out"
      }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, #31C3BF 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #4FD1CE 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, #26A5A1 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, #1C8B87 0%, transparent 50%),
            radial-gradient(circle at 80% 100%, #31C3BF 0%, transparent 50%),
            radial-gradient(circle at 0% 0%, #4FD1CE 0%, transparent 50%)
          `,
          animation: "gradientMove 20s ease-in-out infinite"
        }}
      />

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes gradientMove {
          0%, 100% {
            background:
              radial-gradient(circle at 20% 50%, #31C3BF 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #4FD1CE 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, #26A5A1 0%, transparent 50%),
              radial-gradient(circle at 0% 100%, #1C8B87 0%, transparent 50%),
              radial-gradient(circle at 80% 100%, #31C3BF 0%, transparent 50%),
              radial-gradient(circle at 0% 0%, #4FD1CE 0%, transparent 50%);
          }
          25% {
            background:
              radial-gradient(circle at 40% 70%, #31C3BF 0%, transparent 50%),
              radial-gradient(circle at 60% 40%, #4FD1CE 0%, transparent 50%),
              radial-gradient(circle at 20% 60%, #26A5A1 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, #1C8B87 0%, transparent 50%),
              radial-gradient(circle at 90% 20%, #31C3BF 0%, transparent 50%),
              radial-gradient(circle at 10% 10%, #4FD1CE 0%, transparent 50%);
          }
          50% {
            background:
              radial-gradient(circle at 60% 30%, #31C3BF 0%, transparent 50%),
              radial-gradient(circle at 30% 70%, #4FD1CE 0%, transparent 50%),
              radial-gradient(circle at 70% 40%, #26A5A1 0%, transparent 50%),
              radial-gradient(circle at 20% 20%, #1C8B87 0%, transparent 50%),
              radial-gradient(circle at 90% 90%, #31C3BF 0%, transparent 50%),
              radial-gradient(circle at 40% 10%, #4FD1CE 0%, transparent 50%);
          }
          75% {
            background:
              radial-gradient(circle at 80% 60%, #31C3BF 0%, transparent 50%),
              radial-gradient(circle at 20% 30%, #4FD1CE 0%, transparent 50%),
              radial-gradient(circle at 60% 70%, #26A5A1 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, #1C8B87 0%, transparent 50%),
              radial-gradient(circle at 10% 80%, #31C3BF 0%, transparent 50%),
              radial-gradient(circle at 70% 20%, #4FD1CE 0%, transparent 50%);
          }
        }
      `}</style>
     <div
       className="absolute pointer-events-none z-10"
       style={{
         opacity: 1 - scrollProgress * 0.9,
         transform: `scale(${1 - scrollProgress * 0.2})`,
         transition: "opacity 0.05s ease-out, transform 0.05s ease-out"
       }}
     >
        <GooeyText
          texts={["Alnuaimi", "Innovation", "Excellence", "Future"]}
          morphTime={2}
          cooldownTime={1.5}
          className="w-full"
          textClassName="text-white font-bold text-8xl md:text-9xl leading-none tracking-tighter"
        />
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

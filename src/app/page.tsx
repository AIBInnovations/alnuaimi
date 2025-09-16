"use client";

import { AnimatedBlobs } from "@/components/blobs";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#212a37" }}>
      <Header />
      <AnimatedBlobs />
      <main className="relative z-20" style={{ marginTop: "100vh" }}>
        {/* Next section that overlays on top */}
        <div className="min-h-screen rounded-t-3xl shadow-2xl" style={{ backgroundColor: "#212a37" }}>
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center px-8">
              <h2 className="text-4xl font-bold text-white mb-4">Welcome to the Next Section</h2>
              <p className="text-white/70 text-lg mb-8">
                This section smoothly overlays on top of the fixed hero background
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-2">Feature 1</h3>
                  <p className="text-white/70">Amazing functionality that sets us apart</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-2">Feature 2</h3>
                  <p className="text-white/70">Innovative solutions for modern problems</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-2">Feature 3</h3>
                  <p className="text-white/70">Cutting-edge technology and design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

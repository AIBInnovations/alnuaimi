'use client';

export function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden" style={{ overflow: 'hidden', maxWidth: '100vw', maxHeight: '100vh' }}>
      {/* Multiple layers moving continuously at different speeds */}

      {/* First gradient layer */}
      <div
        className="absolute opacity-50"
        style={{
          background: `radial-gradient(circle, #00FFFF 0%, transparent 15%)`,
          width: '150%',
          height: '150%',
          left: '-25%',
          top: '-25%',
          animation: 'smoothMove1 25s linear infinite'
        }}
      />

      {/* Second gradient layer */}
      <div
        className="absolute opacity-40"
        style={{
          background: `radial-gradient(circle, #00CCCC 0%, transparent 12%)`,
          width: '150%',
          height: '150%',
          left: '-25%',
          top: '-25%',
          animation: 'smoothMove2 35s linear infinite reverse'
        }}
      />

      {/* Third gradient layer */}
      <div
        className="absolute opacity-45"
        style={{
          background: `radial-gradient(circle, #00DDDD 0%, transparent 18%)`,
          width: '150%',
          height: '150%',
          left: '-25%',
          top: '-25%',
          animation: 'smoothMove3 40s linear infinite'
        }}
      />

      {/* CSS Animations for continuous movement */}
      <style jsx>{`
        @keyframes smoothMove1 {
          0% {
            transform: translate(0%, 0%) rotate(0deg);
          }
          25% {
            transform: translate(15%, 5%) rotate(90deg);
          }
          50% {
            transform: translate(10%, 20%) rotate(180deg);
          }
          75% {
            transform: translate(-5%, 15%) rotate(270deg);
          }
          100% {
            transform: translate(0%, 0%) rotate(360deg);
          }
        }

        @keyframes smoothMove2 {
          0% {
            transform: translate(10%, 15%) rotate(0deg);
          }
          33% {
            transform: translate(-10%, 5%) rotate(120deg);
          }
          66% {
            transform: translate(20%, -5%) rotate(240deg);
          }
          100% {
            transform: translate(10%, 15%) rotate(360deg);
          }
        }

        @keyframes smoothMove3 {
          0% {
            transform: translate(-15%, 10%) rotate(0deg);
          }
          50% {
            transform: translate(15%, -10%) rotate(180deg);
          }
          100% {
            transform: translate(-15%, 10%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
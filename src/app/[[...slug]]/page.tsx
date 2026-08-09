import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exclusive Reward | $1000 Gift Card Offer",
  description: "Claim your $1000 Walmart Gift Card balance.",
};

export default function DynamicPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#0d1117] relative overflow-hidden p-5 font-sans">
      {/* Ambient Background Glow Shapes */}
      <div 
        className="absolute top-[10%] left-[15%] w-[300px] h-[300px] bg-[#0071ce] rounded-full blur-[80px] pointer-events-none z-0" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-[10%] right-[15%] w-[250px] h-[250px] bg-[#ffc220] rounded-full blur-[80px] pointer-events-none z-0" 
        aria-hidden="true" 
      />

      {/* Glassmorphism Card Container */}
      <div className="relative z-10 w-full max-w-[480px] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl text-center">
        
        {/* Badge */}
        <span className="inline-block bg-[#ffc220]/20 border border-[#ffc220]/50 text-[#ffc220] px-4 py-1.5 rounded-full text-xs font-semibold mb-5 tracking-wider uppercase">
          Limited Time Reward
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3 text-white">
          Claim Your <span className="text-[#ffc220]">$1000</span> Gift Card
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-white/80 mb-8 leading-relaxed">
          Complete the quick offer entry to qualify for your shopper balance.
        </p>

        {/* Voucher Box */}
        <div className="bg-[#0071ce]/30 border border-dashed border-white/30 rounded-2xl p-5 mb-8">
          <div className="text-xs uppercase tracking-widest text-white/60 mb-1">
            Gift Card Value
          </div>
          <div className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(0,113,206,0.6)]">
            $1,000
          </div>
        </div>

        {/* CTA Button with Hooked Link */}
        <a
          href="https://singingfiles.com/show.php?l=0&u=2548170&id=75095"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 px-6 bg-gradient-to-r from-[#0071ce] to-[#004c8c] hover:from-[#007be0] hover:to-[#00569e] text-white font-extrabold text-lg rounded-xl shadow-[0_10px_25px_-5px_rgba(0,113,206,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          CLAIM YOUR GIFT CARD NOW
        </a>

        {/* Steps Indicator */}
        <div className="flex justify-between items-center mt-6 pt-5 border-t border-white/10 text-xs text-white/60">
          <div className="flex items-center gap-1.5">
            <span className="bg-white/15 w-4 h-4 rounded-full inline-flex items-center justify-center text-[10px] text-white">1</span> 
            Click Offer
          </div>
          <div className="flex items-center gap-1.5">
            <span className="bg-white/15 w-4 h-4 rounded-full inline-flex items-center justify-center text-[10px] text-white">2</span> 
            Verify Info
          </div>
          <div className="flex items-center gap-1.5">
            <span className="bg-white/15 w-4 h-4 rounded-full inline-flex items-center justify-center text-[10px] text-white">3</span> 
            Receive Card
          </div>
        </div>

      </div>
    </main>
  );
}

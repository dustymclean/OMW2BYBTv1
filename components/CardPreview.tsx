
import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Cpu, Wifi, Camera, Focus, Bell, CreditCard, Shield, Info } from 'lucide-react';

const steps = [
  { 
    id: '01', 
    icon: <Camera size={20} />, 
    title: 'Initialize', 
    desc: 'OPEN THE CAMERA APP ON YOUR MOBILE DEVICE.' 
  },
  { 
    id: '02', 
    icon: <Focus size={20} />, 
    title: 'Focus', 
    desc: 'FOCUS THE LENS ON THE QR CODE LOCATED ON THE REVERSE OF THE CARD.' 
  },
  { 
    id: '03', 
    icon: <Bell size={20} />, 
    title: 'Execute', 
    desc: 'TAP THE NOTIFICATION BANNER THAT APPEARS.' 
  },
  { 
    id: '04', 
    icon: <CreditCard size={20} />, 
    title: 'Finalize', 
    desc: 'FINALIZE YOUR PAYMENT VIA CASH APP TO $OMW2BYBT.' 
  }
];

const CardPreview: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section className="pt-40 pb-32 px-6 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 shimmer-text">ORANGE TITANIUM</h2>
        <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-bold">Signature Remittance Interface</p>
      </div>

      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-[500px] h-[315px] mx-auto perspective-2000"
      >
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className={`relative w-full h-full transition-all duration-1000 preserve-3d cursor-pointer shadow-[0_50px_100px_-20px_rgba(255,140,0,0.5)] ${isFlipped ? 'rotate-y-180' : ''}`}
          style={{ transformStyle: 'preserve-3d', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
        >
          {/* Front Side - Opaque Orange Titanium */}
          <div className="absolute inset-0 w-full h-full rounded-2xl p-8 bg-orange-600 backface-hidden flex flex-col justify-between overflow-hidden border border-white/20 shadow-2xl z-20">
            <div className="absolute inset-0 bg-[#ea580c]"></div>
            <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)` }}></div>
            
            <div className="flex justify-between items-start relative z-10">
              <div className="w-14 h-11 bg-gradient-to-br from-orange-300 to-orange-100 rounded-lg flex items-center justify-center border border-black/10 shadow-lg">
                <Cpu size={32} className="text-orange-900/40" />
              </div>
              <Wifi size={24} className="text-white/40 rotate-90" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold tracking-tighter italic engraved-white leading-none">
                  HP
                </div>
                <div className="text-[11px] font-black uppercase tracking-[0.3em] silver-engraved text-right leading-relaxed">
                  TITANIUM LUXE <br/> PRIVATE SERIES
                </div>
              </div>
              
              <div className="pt-6 border-t border-black/10">
                <div className="text-2xl font-serif italic charcoal-engraved tracking-widest mb-4">
                  $OMW2BYBT
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-sm font-bold tracking-[0.2em] uppercase charcoal-engraved mb-1">
                      Hunter Porter
                    </div>
                    <div className="text-[8px] tracking-[0.2em] font-bold text-black/30 uppercase italic">Authenticated Member</div>
                  </div>
                  <div className="text-[8px] tracking-widest font-bold silver-engraved uppercase">Node Verified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side - Opaque Deep Orange Titanium */}
          <div className="absolute inset-0 w-full h-full rounded-2xl bg-orange-800 backface-hidden rotate-y-180 overflow-hidden border border-white/10 shadow-2xl z-10">
            <div className="absolute inset-0 bg-[#9a3412]"></div>
            <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ background: `radial-gradient(circle at ${100 - mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.6) 0%, transparent 60%)` }}></div>
            <div className="w-full h-14 bg-black/95 mt-8 mb-8 relative shadow-xl"></div>
            
            <div className="px-8 flex items-start justify-between relative z-10">
              <div className="p-3 bg-white rounded-lg shadow-2xl relative">
                <div className="absolute inset-0 bg-orange-500/30 rounded-lg animate-ping-slow"></div>
                <QRCodeSVG value="https://cash.app/$OMW2BYBT" size={85} level="H" className="relative z-10" />
              </div>
              
              <div className="text-right flex flex-col items-end space-y-3">
                <div className="text-3xl font-bold italic silver-engraved mb-1 drop-shadow-sm">HP</div>
                <div className="text-xl font-bold font-mono tracking-[0.1em] text-white/95">$OMW2BYBT</div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/50">Sovereign Remittance ID</div>
                
                <div className="mt-5 pt-0">
                  <div className="h-10 px-6 bg-black/40 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-xl shadow-inner">
                    <span className="text-[10px] text-white/60 italic tracking-[0.3em] font-bold silver-engraved uppercase">Hunter Porter Signature</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-8 flex items-end justify-between w-[calc(100%-64px)]">
              <div className="space-y-1">
                <p className="text-[8px] leading-relaxed text-white/40 uppercase tracking-[0.05em] max-w-[240px]">
                  SECURE ACCESS IS GRANTED ON A FIRST-PAID BASIS. EVERY CARD IS A UNIQUE DIGITAL ASSET.
                </p>
                <p className="text-[7px] leading-relaxed text-white/20 uppercase tracking-[0.1em]">
                  PRIVATE ALLOCATION SERIES 001. UNIFIED NODE PROTOCOL.
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center shadow-lg">
                 <Shield size={16} className="text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 w-full max-w-5xl">
        <div className="flex items-center gap-4 mb-10 px-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-orange-500/30 to-orange-500/10"></div>
          <div className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-[0.3em] text-[10px]">
            <Info size={14} />
            Remittance Protocol
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-orange-500/30 to-orange-500/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-b from-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl h-full flex flex-col items-center text-center backdrop-blur-md transition-all duration-300 group-hover:border-orange-500/30 group-hover:translate-y-[-4px]">
                <div className="w-12 h-12 rounded-full bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                <div className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-3">{step.id} — {step.title}</div>
                <p className="text-white/50 text-[10px] leading-relaxed uppercase tracking-widest font-bold">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-medium">
            Interface Experience: Secure. Seamless. Sovereign.
          </p>
        </div>
      </div>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { 
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        @keyframes ping-slow { 75%, 100% { transform: scale(1.4); opacity: 0; } }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }

        .engraved-white {
          color: #ffffff;
          text-shadow: 
            -1px -1px 1px rgba(0,0,0,0.5), 
            1px 1px 1px rgba(255,255,255,0.4);
          letter-spacing: -0.05em;
        }

        .silver-engraved {
          background: linear-gradient(135deg, #ffffff 0%, #a1a1a1 50%, #717171 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(-1px -1px 0px rgba(0,0,0,0.6)) drop-shadow(1px 1px 0px rgba(255,255,255,0.2));
        }

        .charcoal-engraved {
          color: #1a1a1a;
          text-shadow: 
            0.5px 0.5px 0.5px rgba(255,255,255,0.2),
            -1px -1px 2px rgba(0,0,0,0.9);
        }

        .font-serif {
          font-family: 'Times New Roman', Georgia, serif;
        }
      `}</style>
    </section>
  );
};

export default CardPreview;

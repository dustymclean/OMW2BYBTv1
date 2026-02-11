
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center font-bold text-xl tracking-tighter mb-6">
              HP
            </div>
            <p className="text-white/30 text-[10px] leading-relaxed max-w-xs uppercase tracking-widest font-bold">
              Titanium Luxe Private Series. <br />Hand-personalized. Node-minted.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80 mb-6">Concierge Protocol</h4>
            <div className="text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
              Support exclusively for interface and node chain health. <br />
              <span className="text-orange-500/50 mt-2 block">Boundary: No third-party platform support.</span>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80 mb-6">Direct Line</h4>
            <a href="mailto:notary@northmsnotary.com" className="text-xs font-bold text-white/60 hover:text-orange-500 transition-colors uppercase tracking-widest">
              notary@northmsnotary.com
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            &copy; 2024 Hunter Porter Private Series. Signature Remittance.
          </p>
          <div className="flex gap-6">
            <span className="text-[9px] font-bold text-orange-600/40 uppercase tracking-[0.2em]">First-Paid Priority</span>
            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">Sovereign Interface</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

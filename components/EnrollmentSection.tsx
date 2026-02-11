
import React, { useState } from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Copy, Check } from 'lucide-react';

const EnrollmentSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "notary@northmsnotary.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-black pt-40 pb-40 px-6 overflow-hidden animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-orange-600/10 border border-orange-500/20 rounded-full">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.4em]">Private Allocation Protocol</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85]">
              SECURE YOUR <br />PLACE IN THE <br /><span className="text-orange-500">NODE CHAIN</span>
            </h2>
            
            <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-xl">
              Access is granted on a <span className="text-white font-bold underline decoration-orange-500/50 underline-offset-8">first-come, first-served, and first-paid basis.</span> Integration with your custom domain infrastructure available for minimal cost.
            </p>

            <div className="space-y-4 mb-12">
              {[
                'One-of-a-kind digital asset hand-personalized by Dusty McLean',
                'Minted exclusively on her private node chain infrastructure',
                'Custom domain integration support ($11–$12 avg cost)',
                'Absolute digital status requirement for series 001'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 size={18} className="text-orange-500" />
                  <span className="text-sm font-medium text-white/70 uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={handleCopy}
                className="flex-1 px-10 py-6 bg-orange-600 text-white font-black uppercase tracking-[0.2em] text-sm rounded-xl hover:bg-orange-500 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-3 group"
              >
                Enroll Now
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={handleCopy}
                className="flex-1 px-10 py-6 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-sm rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
              >
                {copied ? <Check size={20} className="text-orange-500" /> : <Copy size={20} className="group-hover:text-orange-500 transition-colors" />}
                {copied ? 'Email Copied' : 'Secure Allocation'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-orange-600/5 blur-[120px] rounded-full"></div>
            {[
              { label: 'EXCLUSIVITY', value: 'Bespoke' },
              { label: 'NODE CHAIN', value: 'Private' },
              { label: 'ASSET TYPE', value: 'Unique' },
              { label: 'PRIORITY', value: 'High' }
            ].map((stat, i) => (
              <div key={i} className="aspect-square flex flex-col items-center justify-center p-8 bg-zinc-900 border border-white/5 rounded-[2.5rem] hover:border-orange-500/40 transition-all group backdrop-blur-xl">
                <div className="text-3xl font-black mb-2 text-white group-hover:text-orange-500 transition-colors uppercase">{stat.value}</div>
                <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/30">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Call to Action */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-[110]">
        <div className="bg-white rounded-3xl p-4 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-white/20 overflow-hidden relative">
          {copied && (
            <div className="absolute inset-x-0 top-0 h-1 bg-orange-500 animate-in slide-in-from-left duration-1000"></div>
          )}
          <div className="flex items-center gap-4 px-4">
             <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center font-bold text-white italic">HP</div>
             <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 leading-none mb-1">Series 001</p>
                <p className="text-xs font-bold text-black uppercase tracking-wider">Allocation Status: Urgent</p>
             </div>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
             <button 
              onClick={handleCopy}
              className={`flex-1 md:flex-none px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all flex items-center justify-center gap-2 ${
                copied ? 'bg-zinc-900 text-orange-500' : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}
             >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Instructions Copied' : 'Finalize Enrollment'}
             </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-[120] transition-all duration-500 transform ${copied ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
        <div className="bg-orange-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 border border-white/20">
          <CheckCircle2 size={16} />
          {email} Copied to Clipboard
        </div>
      </div>
    </div>
  );
};

export default EnrollmentSection;


import React, { useState } from 'react';
import Header from './components/Header';
import CardPreview from './components/CardPreview';
import EnrollmentSection from './components/EnrollmentSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'enrollment'>('home');

  const toggleView = () => setView(prev => prev === 'home' ? 'enrollment' : 'home');

  return (
    <div className="min-h-screen selection:bg-orange-500/30 selection:text-orange-500 bg-black text-white">
      <Header onEnrollClick={toggleView} isEnrollView={view === 'enrollment'} />
      
      <main className="transition-all duration-500">
        {view === 'home' ? (
          <CardPreview />
        ) : (
          <EnrollmentSection />
        )}
      </main>

      <Footer />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-2]">
         <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-orange-600/5 rounded-full blur-[150px]"></div>
         <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default App;

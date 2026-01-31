import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DonationFrequency } from '../types';
import { CheckCircle, CreditCard, Heart, Lock } from 'lucide-react';
import { ParallaxSection } from '../components/ParallaxSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { APP_CONTENT } from '../config';

export const Donate: React.FC = () => {
  const [amount, setAmount] = useState<number>(50);
  const [frequency, setFrequency] = useState<DonationFrequency>(DonationFrequency.ONCE);
  const [customAmount, setCustomAmount] = useState<string>('');
  
  const content = APP_CONTENT.donatePage;
  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    if (val && !isNaN(Number(val))) {
      setAmount(Number(val));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <ParallaxSection 
        backgroundImage={content.heroImage}
        height="min-h-[400px]"
        overlayColor="bg-slate-900/70"
      >
        <div className="container mx-auto px-6 text-center text-white pt-20">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{content.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{content.description}</p>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      <main className="container mx-auto px-6 -mt-20 relative z-20 mb-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
          
          {/* Left Column: Info */}
          <ScrollReveal animation="fade-left" className="bg-slate-900 text-white p-10 md:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-brand-400">Why Donate?</h3>
              <ul className="space-y-6">
                {content.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-500 shrink-0" />
                    <p className="text-sm text-slate-300">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-10 pt-10 border-t border-slate-800">
               <div className="flex items-center gap-2 text-slate-400 mb-2">
                 <Lock className="w-4 h-4" />
                 <span className="text-xs uppercase tracking-wider font-bold">Secure Payment</span>
               </div>
               <p className="text-xs text-slate-500">
                 All transactions are encrypted and secured. We do not store your sensitive financial information.
               </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Form */}
          <ScrollReveal animation="fade-right" className="p-10 md:w-2/3">
            {/* Frequency Toggle */}
            <div className="flex justify-center mb-8 bg-slate-100 p-1 rounded-full w-max mx-auto">
              <button 
                onClick={() => setFrequency(DonationFrequency.ONCE)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${frequency === DonationFrequency.ONCE ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Give Once
              </button>
              <button 
                onClick={() => setFrequency(DonationFrequency.MONTHLY)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${frequency === DonationFrequency.MONTHLY ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Monthly <Heart className="w-3 h-3 fill-current" />
              </button>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-slate-700 font-bold mb-4">Select Amount</label>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {presetAmounts.map((val) => (
                  <button
                    key={val}
                    onClick={() => handleAmountSelect(val)}
                    className={`py-3 px-4 rounded-xl font-bold border-2 transition-all ${
                      amount === val && !customAmount
                        ? 'border-brand-500 bg-brand-50 text-brand-700'
                        : 'border-slate-200 text-slate-600 hover:border-brand-300'
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                <input 
                  type="number" 
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none font-bold text-slate-900"
                />
              </div>
            </div>

            {/* Payment Info Mock */}
            <div className="mb-8">
              <label className="block text-slate-700 font-bold mb-4">Personal Info</label>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:outline-none" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:outline-none" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full mt-4 px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:outline-none" />
            </div>

            <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3">
              <CreditCard className="w-5 h-5" />
              Donate ${amount} {frequency === DonationFrequency.MONTHLY ? '/ month' : ''}
            </button>

            <p className="text-center text-xs text-slate-400 mt-4">
              By clicking Donate, you agree to our Terms and Privacy Policy.
            </p>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};
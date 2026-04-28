import React from 'react';
import { BMC_DATA, BMCSection } from '@/lib/index';
import { Smartphone, Zap, Leaf, CheckCircle, Clock, ShieldCheck, User, Activity, Shirt, Layers, Sparkles, ArrowDown } from 'lucide-react';

function PosterCard({ title, children, className = '' }: { title: string, children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden flex flex-col ${className}`}>
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white px-3 py-1 text-xs font-bold tracking-wide uppercase font-['Outfit']">
        {title}
      </div>
      <div className="px-3 py-2 flex-1 text-slate-700 flex flex-col justify-start font-['Inter']">
        {children}
      </div>
    </div>
  );
}

function renderSectionContent(section: BMCSection | undefined) {
  if (!section) return null;
  if (section.groups && section.groups.length > 0) {
    return (
      <div className="flex flex-col gap-[3px]">
        {section.groups.map((g, i) => (
          <div key={i}>
            {g.groupLabel && <h4 className="font-bold text-[9px] uppercase text-orange-600 mb-[1px] leading-tight font-['Outfit']">{g.groupLabel}</h4>}
            <ul className="list-disc pl-3.5 space-y-0 text-slate-600">
              {g.items.map((item, j) => <li key={j} className="text-[10px] leading-tight">{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  if (section.table) {
    return (
      <div className="w-full flex flex-col h-full mt-1">
        <table className="w-full text-[9px] border-collapse text-left table-fixed font-['Inter'] text-slate-700">
          <thead>
            <tr className="bg-slate-50 text-slate-500 font-['Outfit'] border-b-2 border-orange-400">
              {section.table.headers.map((h, i) => <th key={i} className="px-2 py-1 font-bold uppercase">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {section.table.rows.map((row, i) => (
              <tr key={i} className="border-b border-slate-100">
                <td className="px-2 py-1 font-medium text-slate-800">{row.label}</td>
                {row.values.map((v, j) => <td key={j} className="px-2 py-1">{v}</td>)}
              </tr>
            ))}
          </tbody>
          {section.table.totalsRow && (
            <tfoot className="bg-orange-50 font-bold">
              <tr>
                <td className="px-2 py-1 text-orange-800">{section.table.totalsRow.label}</td>
                {section.table.totalsRow.values.map((v, j) => <td key={j} className="px-2 py-1 text-orange-800">{v}</td>)}
              </tr>
            </tfoot>
          )}
        </table>
        {section.footer && <div className="mt-1 text-[8px] text-slate-400 italic">{section.footer}</div>}
      </div>
    );
  }
  return null;
}

export default function Poster() {
  const getSection = (id: string) => BMC_DATA.find(s => s.id === id);

  return (
    <div className="print-wrapper min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* Dynamic scaled wrapper to perfectly fit the screen without gaps */}
      <div className="poster-wrapper relative shrink-0 shadow-2xl bg-white border border-slate-300 overflow-hidden">
        <div className="poster-content absolute top-0 left-0 w-[1684px] h-[1191px] flex bg-white font-['Inter']">
        
        {/* Left Sidebar */}
        <div className="w-[28%] bg-[#111827] text-slate-300 px-8 py-10 flex flex-col justify-between relative z-10 shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.1)]">
          <div className="absolute top-6 left-6 text-4xl font-black text-orange-500 tracking-tighter font-['Outfit']">ti</div>
          
          {/* Punch in the nose */}
          <div className="mt-10 mb-4">
             <h2 className="text-2xl font-black text-white leading-tight italic font-['Outfit']">
               "Imagine never returning a dress because it didn't fit right. Welcome to TryLo."
             </h2>
          </div>
          
          <div className="mb-4">
             <h3 className="text-base font-bold text-orange-500 mb-1 border-b border-slate-700 pb-1 font-['Outfit'] uppercase">Need for Solution</h3>
             <p className="text-xs leading-snug">
               Online fashion suffers from a 30% return rate mainly due to sizing and fit issues, causing billions in lost revenue and massive environmental waste. Customers lack confidence in visualizing fit.
             </p>
          </div>
          
          <div className="mb-4">
             <h3 className="text-base font-bold text-orange-500 mb-1 border-b border-slate-700 pb-1 font-['Outfit'] uppercase">Market & Target</h3>
             <p className="text-xs leading-snug">
               <strong className="text-white">TAM:</strong> $4.7B Global Virtual Fitting Room Market.<br/>
               <strong className="text-white">SAM:</strong> $800M Indian e-commerce apparel sector.<br/>
               <strong className="text-white">Target:</strong> Gen-Z/Millennials with sizing anxiety and mid-tier B2B brands.
             </p>
          </div>

          <div className="mb-4">
             <h3 className="text-base font-bold text-orange-500 mb-1 border-b border-slate-700 pb-1 font-['Outfit'] uppercase">Competition</h3>
             <p className="text-xs leading-snug">
               Unlike manual measurement apps (FitAnalytics) or generic AR overlays, TryLo provides 99% photorealistic mapping in under 2 seconds using proprietary 3D mesh AI segmentation.
             </p>
          </div>
          
          {/* Conceptual Diagram - Workflow with Icons & Arrows */}
          <div className="flex flex-col items-center justify-center relative my-2 w-full">
            {[
              { text: 'USER IMAGE', icon: User, color: 'text-slate-300', bg: 'bg-slate-800/80 border-slate-700' },
              { text: 'POSE ESTIMATION', icon: Activity, color: 'text-orange-300', bg: 'bg-slate-800/80 border-slate-700' },
              { text: 'GARMENT MAPPING', icon: Shirt, color: 'text-orange-400', bg: 'bg-slate-800/80 border-slate-700' },
              { text: 'AI SEGMENTATION', icon: Layers, color: 'text-orange-500', bg: 'bg-slate-800/80 border-slate-700' },
              { text: 'FINAL RENDER', icon: Sparkles, color: 'text-white', bg: 'bg-gradient-to-r from-orange-600 to-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)] border-orange-500' },
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className={`w-48 p-2 rounded-lg border flex items-center justify-start gap-3 z-10 shadow-sm ${step.bg}`}>
                  <div className={`p-1.5 rounded bg-black/20 shrink-0`}>
                    <step.icon className={`w-5 h-5 ${step.color}`} strokeWidth={2} />
                  </div>
                  <span className="text-[10px] tracking-wide font-bold text-white font-['Outfit'] leading-tight">{step.text}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex flex-col items-center my-0.5 z-0">
                    <ArrowDown className="w-4 h-4 text-orange-500/60" strokeWidth={3} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="mt-auto bg-slate-800/50 p-4 rounded-lg border border-slate-700 shadow-inner">
            <h3 className="text-base font-bold text-orange-500 mb-2 font-['Outfit'] uppercase">The Ask</h3>
            <p className="text-xs leading-snug mb-2 text-slate-300">
              <strong className="text-white">Funds Needed:</strong> ₹75,00,000 for 15% equity (18 month runway).<br/>
              <strong className="text-white">Break-Even:</strong> Expected at Month 14.<br/>
              <strong className="text-white">Investor Return:</strong> 3x ROI projected by Year 3 exit.
            </p>
            
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="w-[72%] bg-[#f8fafc] flex flex-col p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full -z-10 opacity-50"></div>
          
          {/* Header Row */}
          <div className="flex justify-between items-start mb-8 shrink-0">
            <div className="flex flex-col items-center ml-24">
              <h1 className="text-7xl font-black text-slate-900 tracking-tighter font-['Outfit']">TryLO</h1>
              <p className="text-2xl italic text-orange-600 font-medium mt-1 font-['Outfit']">Try Looks On-You </p>
            </div>
            
            <div className="text-right text-[10px] leading-tight">
              <div className="font-black font-['Outfit'] text-orange-600 text-[13px] mb-0.5">GROUP: 3C43_1</div>
              <div className="font-normal text-slate-800 font-['Inter']">
                Piyush Biswal 102303607<br />
                Raghav Pahwa 102303608<br />
                Aadi Sharma 102303612<br />
                Maurya Chander Jain 102303211<br />
                Ridhi Behal 102303461
              </div>
            </div>
          </div>
          
          {/* How It Works & Icons Row */}
          <div className="flex gap-6 mb-8 items-center shrink-0">
            {/* Steps */}
            <div className="flex-1 flex gap-3">
              {[
                { step: '01', title: 'Upload', desc: 'Upload your full-body photo.' },
                { step: '02', title: 'Select', desc: 'Choose a garment.' },
                { step: '03', title: 'Generate', desc: 'AI maps the garment.' },
                { step: '04', title: 'Buy', desc: 'Shop with confidence.' },
              ].map((s, i) => (
                <div key={i} className="flex-1 relative bg-white text-slate-800 rounded-lg p-4 text-center overflow-hidden shadow-sm border-t-4 border-orange-500">
                  <span className="absolute -top-2 right-1 text-4xl font-black text-slate-100 -z-10">{s.step}</span>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">{s.title}</h4>
                  <p className="text-[10px] leading-tight text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Icons */}
            <div className="w-[35%] grid grid-cols-3 gap-y-3 text-center text-slate-700 font-['Outfit']">
              <div className="flex flex-col items-center"><Smartphone className="w-9 h-9 mb-1 text-orange-500" strokeWidth={2} /><span className="text-[10px] font-bold">WEB/APP</span></div>
              <div className="flex flex-col items-center"><Zap className="w-9 h-9 mb-1 text-orange-500" strokeWidth={2} /><span className="text-[10px] font-bold">FAST AI</span></div>
              <div className="flex flex-col items-center"><Leaf className="w-9 h-9 mb-1 text-orange-500" strokeWidth={2} /><span className="text-[10px] font-bold">ECO-FRIENDLY</span></div>
              <div className="flex flex-col items-center"><CheckCircle className="w-9 h-9 mb-1 text-orange-500" strokeWidth={2} /><span className="text-[10px] font-bold">ACCURATE</span></div>
              <div className="flex flex-col items-center"><Clock className="w-9 h-9 mb-1 text-orange-500" strokeWidth={2} /><span className="text-[10px] font-bold">INSTANT</span></div>
              <div className="flex flex-col items-center"><ShieldCheck className="w-9 h-9 mb-1 text-orange-500" strokeWidth={2} /><span className="text-[10px] font-bold">SECURE DATA</span></div>
            </div>
          </div>
          
          {/* BMC Grid */}
          <div className="flex-1 flex flex-col gap-4 overflow-hidden">
            {/* Top Grid (Classic 5-Column Layout) */}
            <div className="grid grid-cols-5 grid-rows-[1fr_1.15fr] gap-4 flex-[2.8] min-h-0">
              {/* Column 1 */}
              <PosterCard title="Key Partners" className="col-start-1 row-span-2">
                {renderSectionContent(getSection('key-partners'))}
              </PosterCard>
              
              {/* Column 2 */}
              <PosterCard title="Key Activities" className="col-start-2 row-start-1">
                {renderSectionContent(getSection('key-activities'))}
              </PosterCard>
              <PosterCard title="Key Resources" className="col-start-2 row-start-2">
                {renderSectionContent(getSection('key-resources'))}
              </PosterCard>

              {/* Column 3 */}
              <PosterCard title="Value Proposition" className="col-start-3 row-span-2">
                {renderSectionContent(getSection('value-proposition'))}
              </PosterCard>
              
              {/* Column 4 */}
              <PosterCard title="Customer Relationships" className="col-start-4 row-start-1">
                {renderSectionContent(getSection('customer-relationships'))}
              </PosterCard>
              <PosterCard title="Channels" className="col-start-4 row-start-2">
                {renderSectionContent(getSection('channels'))}
              </PosterCard>
              
              {/* Column 5 */}
              <PosterCard title="Customer Segments" className="col-start-5 row-span-2">
                {renderSectionContent(getSection('customer-segments'))}
              </PosterCard>
            </div>
            
            {/* Row 3 - Tables */}
            <div className="grid grid-cols-2 gap-4 flex-[1] min-h-0 shrink-0">
              <PosterCard title="Cost Structure" className="h-full">
                {renderSectionContent(getSection('cost-structure'))}
              </PosterCard>
              <PosterCard title="Revenue Streams" className="h-full">
                {renderSectionContent(getSection('revenue-streams'))}
              </PosterCard>
            </div>
          </div>
          
          </div>
          
        </div>
      </div>
    </div>
  );
}

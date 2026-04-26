import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BMC_DATA, type BMCSection, ROUTE_PATHS } from '@/lib/index';

// ─── Card Component ──────────────────────────────────────────────
function BMCCard({
  section,
  className = ''
}: {
  section: BMCSection;
  className?: string;
}) {
  return <div className={`relative border-0 p-3 flex flex-col gap-2 h-full bg-white ${className}`}>
      {/* Section title */}
      <div className="flex items-center gap-1.5 border-b border-black pb-2 mb-0.5">
        <span className="text-base grayscale">{section.emoji}</span>
        <h3 className="text-[13px] font-black uppercase tracking-tight text-black leading-none">
          {section.title}
        </h3>
      </div>

      {/* Groups */}
      {section.groups && section.groups.length > 0 && (
        <div className="flex flex-col gap-2 flex-1">
          {section.groups.map((group, gi) => <div key={gi}>
              {/* Group sub-label */}
              {group.groupLabel && <p className="text-[12px] font-black uppercase tracking-widest text-black mb-1 underline underline-offset-2">
                  {group.groupLabel}:
                </p>}
              <ul className="space-y-1">
                {group.items.map((item, ii) => <li key={ii} className="flex items-start gap-1.5 text-[12px] text-black leading-tight font-medium">
                    <span className="mt-[6px] shrink-0 w-1 h-1 bg-black flex-shrink-0" />
                    <span className="xl:text-xs">{item}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      )}

      {/* Table */}
      {section.table && (
        <div className="w-full mt-1 flex-1 overflow-x-auto">
          <table className="w-full text-[11px] xl:text-xs border-collapse border border-black text-left">
            <thead>
              <tr className="bg-black text-white">
                {section.table.headers.map((h, i) => (
                  <th key={i} className="border border-black px-1.5 py-1 font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="border border-black px-1.5 py-1 font-medium">{r.label}</td>
                  {r.values.map((v, vi) => (
                    <td key={vi} className="border border-black px-1.5 py-1">{v}</td>
                  ))}
                </tr>
              ))}
              {section.table.totalsRow && (
                <tr className="bg-gray-200 text-black font-bold">
                  <td className="border border-black px-1.5 py-1">{section.table.totalsRow.label}</td>
                  {section.table.totalsRow.values.map((v, vi) => (
                    <td key={vi} className="border border-black px-1.5 py-1">{v}</td>
                  ))}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Optional footer note */}
      {section.footer && <p className="mt-auto pt-2 border-t border-black text-[11px] font-black text-black tracking-tight">
          {section.footer}
        </p>}
    </div>;
}

// ─── Header ──────────────────────────────────────────────────────
function Header() {
  return <header className="px-6 py-8 max-w-[1200px] mx-auto w-full border-b-2 border-black mb-0">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          
          <div className="flex items-center gap-6">
            <h1 className="text-4xl font-black text-black tracking-tighter uppercase">
              Business Model Canvas
            </h1>
            <Link to={ROUTE_PATHS.POSTER} className="text-xs font-bold uppercase tracking-widest bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors shrink-0">
              View Poster →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
          <div className="space-y-0.5">
            <span className="text-[10px] font-black text-black uppercase tracking-wider block border-b border-black">
              Designed for
            </span>
            <p className="text-[11px] font-bold text-black uppercase">
              TryLo
            </p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] font-black text-black uppercase tracking-wider block border-b border-black">
              Date
            </span>
            <p className="text-[11px] font-bold text-black">31 MARCH , 2026</p>
          </div>
          <div className="space-y-0.5">
            
            
          </div>
        </div>
      </div>
    </header>;
}

// ─── Main BMC Grid ───────────────────────────────────────────────
function BMCGrid() {
  const [keyPartners, keyActivities, keyResources, valueProposition, customerRelationships, channels, customerSegments, costStructure, revenueStreams] = BMC_DATA;
  return <div className="px-6 pb-12 max-w-[1200px] mx-auto w-full">

      {/* Main 5-column grid – use CSS grid with explicit row+col placement */}
      <div className="border border-black" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: '1fr 1fr'
    }}>
        {/* Key Partners — col 1, rows 1-2 */}
        <div style={{
        gridColumn: '1',
        gridRow: '1 / 3',
        borderRight: '1px solid black'
      }}>
          <BMCCard section={keyPartners} className="h-full" />
        </div>

        {/* Key Activities — col 2, row 1 */}
        <div style={{
        gridColumn: '2',
        gridRow: '1',
        borderRight: '1px solid black',
        borderBottom: '1px solid black'
      }}>
          <BMCCard section={keyActivities} className="h-full" />
        </div>

        {/* Key Resources — col 2, row 2 */}
        <div style={{
        gridColumn: '2',
        gridRow: '2',
        borderRight: '1px solid black'
      }}>
          <BMCCard section={keyResources} className="h-full" />
        </div>

        {/* Value Proposition — col 3, rows 1-2 (center, light gray bg) */}
        <div style={{
        gridColumn: '3',
        gridRow: '1 / 3',
        borderRight: '1px solid black',
        backgroundColor: '#f9f9f9'
      }}>
          <BMCCard section={valueProposition} className="h-full bg-transparent" />
        </div>

        {/* Customer Relationships — col 4, row 1 */}
        <div style={{
        gridColumn: '4',
        gridRow: '1',
        borderRight: '1px solid black',
        borderBottom: '1px solid black'
      }}>
          <BMCCard section={customerRelationships} className="h-full" />
        </div>

        {/* Channels — col 4, row 2 */}
        <div style={{
        gridColumn: '4',
        gridRow: '2',
        borderRight: '1px solid black'
      }}>
          <BMCCard section={channels} className="h-full" />
        </div>

        {/* Customer Segments — col 5, rows 1-2 */}
        <div style={{
        gridColumn: '5',
        gridRow: '1 / 3'
      }}>
          <BMCCard section={customerSegments} className="h-full" />
        </div>
      </div>

      {/* Bottom row: Cost Structure + Revenue Streams */}
      <div className="border-l border-r border-b border-black" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }}>
        <div style={{
        borderRight: '1px solid black'
      }}>
          <BMCCard section={costStructure} />
        </div>
        <div>
          <BMCCard section={revenueStreams} />
        </div>
      </div>
    </div>;
}

// ─── Footer ──────────────────────────────────────────────────────
function Footer() {
  return <footer className="border-t-2 border-black py-5 px-6 text-center bg-white">
      <p className="text-black text-[10px] font-black tracking-widest uppercase">
        Business Model Canvas · Virtual Try-On AI Platform · Mono Blueprint Edition
      </p>
    </footer>;
}

// ─── Page ────────────────────────────────────────────────────────
export default function Home() {
  return <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full">
          <BMCGrid />
        </main>
        <Footer />
      </div>
    </div>;
}
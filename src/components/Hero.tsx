import { Mail, ExternalLink, ArrowDown, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="top">
      <div className="max-w-[1040px] mx-auto px-6 sm:px-8">
        <div className="max-w-[760px]">
          {/* Top Status & Role Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border"
              style={{ 
                borderColor: 'var(--line)', 
                backgroundColor: 'var(--paper-raised)',
                color: 'var(--pine)' 
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Product Design &amp; Full-Stack Development</span>
            </div>

            <div 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                borderColor: 'var(--line)',
                backgroundColor: 'var(--paper-raised)',
                color: 'var(--ink-soft)'
              }}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Available for Internships</span>
            </div>
          </div>

          {/* Main Display Headline */}
          <h1 
            className="font-serif font-medium text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.08] tracking-tight mb-6"
            style={{ color: 'var(--ink)' }}
          >
            I design interfaces, then build them.
          </h1>

          {/* Narrative Body */}
          <p 
            className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-[660px]"
            style={{ color: 'var(--ink-soft)' }}
          >
            B.Tech Information Technology student based in Thiruvarur, Tamil Nadu. I've spent the past few months
            redesigning production interfaces during a design internship, and building full-stack applications
            from scratch the rest of the time — so I design with a working sense of what's feasible to ship.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="mailto:mvaishnavia1@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[3px] text-sm font-medium transition-all shadow-sm cursor-pointer hover:opacity-90"
              style={{
                backgroundColor: 'var(--ink)',
                color: 'var(--paper)',
              }}
            >
              <Mail className="w-4 h-4" />
              <span>Email me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vaishnaviamurugadoss-2005vm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[3px] text-sm font-medium border transition-all cursor-pointer hover:opacity-80"
              style={{
                borderColor: 'var(--line-strong)',
                color: 'var(--ink)',
                backgroundColor: 'transparent',
              }}
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a
              href="https://github.com/vaishnavia499"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[3px] text-sm font-medium border transition-all cursor-pointer hover:opacity-80"
              style={{
                borderColor: 'var(--line-strong)',
                color: 'var(--ink)',
                backgroundColor: 'transparent',
              }}
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <div 
              className="hidden sm:flex items-center gap-1 text-xs px-3 py-2 rounded"
              style={{ color: 'var(--ink-soft)' }}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Thiruvarur, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator hint */}
        <div className="pt-4 flex justify-start border-t" style={{ borderColor: 'var(--line)' }}>
          <a 
            href="#about"
            className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase transition-colors"
            style={{ color: 'var(--ink-soft)' }}
          >
            <span>Explore background &amp; work</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

import { QUICK_FACTS } from '../data';

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 border-t transition-colors duration-200" style={{ borderColor: 'var(--line)' }}>
      <div className="max-w-[1040px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Narrative */}
          <div>
            <div className="mb-6">
              <h2 className="font-serif font-medium text-2xl sm:text-3xl tracking-tight mb-2" style={{ color: 'var(--ink)' }}>
                About
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
              <p>
                I'm a final-year-track B.Tech Information Technology student who works comfortably on both sides of a
                product: the interface someone sees, and the system behind it. During a UI/UX internship at SkillCraft
                Technology I redesigned three production-style products — a fitness app, an e-commerce site, and a
                news website — taking each from usability audit to polished screens in Figma.
              </p>
              <p style={{ color: 'var(--ink-soft)' }}>
                Outside of design work, I build full-stack applications end to end: React and Node on the frontend
                and backend, relational databases underneath, and enough Java, Python, and SQL to be dangerous. I've also
                completed two AI-focused internships, working with agentic AI tooling and applied data analysis. I like
                taking an open-ended brief and turning it into something you can actually click through, under a deadline.
              </p>
            </div>
          </div>

          {/* Facts Table */}
          <div className="rounded-lg p-6 border" style={{ backgroundColor: 'var(--paper-raised)', borderColor: 'var(--line)' }}>
            <h3 className="font-serif font-medium text-lg mb-4" style={{ color: 'var(--pine)' }}>
              Quick Overview
            </h3>
            <ul className="list-none m-0 p-0 divide-y" style={{ borderColor: 'var(--line)' }}>
              {QUICK_FACTS.map((fact, idx) => (
                <li key={idx} className="flex justify-between items-center py-3 text-sm gap-4">
                  <span style={{ color: 'var(--ink-soft)' }}>{fact.label}</span>
                  <span className="font-medium text-right" style={{ color: 'var(--ink)' }}>{fact.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { EDUCATION_LIST, ACHIEVEMENTS } from '../data';
import { Award, GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 border-t transition-colors duration-200" style={{ borderColor: 'var(--line)' }}>
      <div className="max-w-[1040px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <GraduationCap className="w-5 h-5" style={{ color: 'var(--pine)' }} />
              <h2 className="font-serif font-medium text-2xl sm:text-3xl tracking-tight" style={{ color: 'var(--ink)' }}>
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {EDUCATION_LIST.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-lg border transition-colors flex flex-col justify-between"
                  style={{ 
                    backgroundColor: 'var(--paper-raised)', 
                    borderColor: 'var(--line)' 
                  }}
                >
                  <div className="mb-4">
                    <h3 className="font-serif font-medium text-lg sm:text-xl mb-1" style={{ color: 'var(--ink)' }}>
                      {edu.institution}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
                      {edu.degree}
                    </p>
                  </div>
                  <div className="pt-3 border-t flex items-center justify-between text-xs sm:text-sm font-medium"
                       style={{ borderColor: 'var(--line)', color: 'var(--ink-soft)' }}>
                    <span>{edu.period}</span>
                    <span className="font-semibold" style={{ color: 'var(--pine)' }}>{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Award className="w-5 h-5" style={{ color: 'var(--ochre)' }} />
              <h2 className="font-serif font-medium text-2xl sm:text-3xl tracking-tight" style={{ color: 'var(--ink)' }}>
                Achievements
              </h2>
            </div>

            <div 
              className="p-6 rounded-lg border"
              style={{ backgroundColor: 'var(--paper-raised)', borderColor: 'var(--line)' }}
            >
              <ul className="list-none m-0 p-0 divide-y" style={{ borderColor: 'var(--line)' }}>
                {ACHIEVEMENTS.map((item) => (
                  <li key={item.id} className="py-3.5 first:pt-1 last:pb-1 flex items-start gap-3.5 text-sm sm:text-base leading-relaxed">
                    <span 
                      className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: 'var(--ochre)' }}
                    />
                    <span style={{ color: 'var(--ink)' }}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

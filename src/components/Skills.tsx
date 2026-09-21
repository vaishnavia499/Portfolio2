import { SKILL_CATEGORIES } from '../data';

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t transition-colors duration-200" style={{ borderColor: 'var(--line)' }}>
      <div className="max-w-[1040px] mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <h2 className="font-serif font-medium text-2xl sm:text-3xl tracking-tight mb-2" style={{ color: 'var(--ink)' }}>
            Skills
          </h2>
          <p className="text-base" style={{ color: 'var(--ink-soft)' }}>
            Core competencies across design tooling, programming languages, and working methods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.title}
              className="p-6 rounded-lg border transition-colors"
              style={{ 
                backgroundColor: 'var(--paper-raised)', 
                borderColor: 'var(--line)' 
              }}
            >
              <h3 
                className="text-base font-semibold mb-4 pb-2 border-b uppercase tracking-wide"
                style={{ color: 'var(--pine)', borderColor: 'var(--line)' }}
              >
                {category.title}
              </h3>
              <ul className="list-none m-0 p-0 divide-y" style={{ borderColor: 'var(--line)' }}>
                {category.skills.map((skill, sIdx) => (
                  <li 
                    key={sIdx}
                    className="py-2.5 text-sm sm:text-base font-medium flex items-center justify-between"
                    style={{ color: 'var(--ink)' }}
                  >
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

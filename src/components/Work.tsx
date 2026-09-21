import { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';
import { Maximize2, X } from 'lucide-react';

export function Work() {
  const [filter, setFilter] = useState<'all' | 'design' | 'engineering'>('all');
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string; title: string } | null>(null);

  const filteredCases = CASE_STUDIES.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const renderIcon = (type: CaseStudy['iconType']) => {
    switch (type) {
      case 'fitness':
        return (
          <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
            <path d="M12 60 L28 40 L42 52 L60 24 L84 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="84" cy="44" r="4" fill="currentColor"/>
            <line x1="12" y1="76" x2="84" y2="76" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
          </svg>
        );
      case 'ecommerce':
        return (
          <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
            <rect x="14" y="16" width="68" height="64" rx="3" stroke="currentColor" strokeWidth="3"/>
            <line x1="14" y1="34" x2="82" y2="34" stroke="currentColor" strokeWidth="2"/>
            <rect x="24" y="44" width="18" height="18" stroke="currentColor" strokeWidth="2"/>
            <line x1="50" y1="46" x2="72" y2="46" stroke="currentColor" strokeWidth="2"/>
            <line x1="50" y1="56" x2="66" y2="56" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'news':
        return (
          <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
            <line x1="14" y1="20" x2="82" y2="20" stroke="currentColor" strokeWidth="3"/>
            <line x1="14" y1="34" x2="82" y2="34" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            <line x1="14" y1="44" x2="60" y2="44" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            <rect x="14" y="56" width="30" height="24" stroke="currentColor" strokeWidth="2"/>
            <line x1="50" y1="58" x2="82" y2="58" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            <line x1="50" y1="68" x2="82" y2="68" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
            <line x1="50" y1="78" x2="72" y2="78" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
          </svg>
        );
      case 'service':
        return (
          <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
            <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="3"/>
            <circle cx="70" cy="30" r="8" stroke="currentColor" strokeWidth="3"/>
            <circle cx="48" cy="66" r="8" stroke="currentColor" strokeWidth="3"/>
            <line x1="36" y1="35" x2="42" y2="60" stroke="currentColor" strokeWidth="2"/>
            <line x1="64" y1="35" x2="54" y2="60" stroke="currentColor" strokeWidth="2"/>
            <line x1="38" y1="30" x2="62" y2="30" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'booking':
        return (
          <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
            <rect x="14" y="34" width="68" height="30" rx="4" stroke="currentColor" strokeWidth="3"/>
            <circle cx="30" cy="70" r="7" stroke="currentColor" strokeWidth="3"/>
            <circle cx="66" cy="70" r="7" stroke="currentColor" strokeWidth="3"/>
            <line x1="24" y1="34" x2="32" y2="18" stroke="currentColor" strokeWidth="2"/>
            <line x1="32" y1="18" x2="64" y2="18" stroke="currentColor" strokeWidth="2"/>
            <line x1="64" y1="18" x2="72" y2="34" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'ai':
        return (
          <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
            <circle cx="48" cy="48" r="10" stroke="currentColor" strokeWidth="3"/>
            <circle cx="18" cy="24" r="6" stroke="currentColor" strokeWidth="2.5"/>
            <circle cx="78" cy="24" r="6" stroke="currentColor" strokeWidth="2.5"/>
            <circle cx="18" cy="74" r="6" stroke="currentColor" strokeWidth="2.5"/>
            <circle cx="78" cy="74" r="6" stroke="currentColor" strokeWidth="2.5"/>
            <line x1="24" y1="28" x2="40" y2="42" stroke="currentColor" strokeWidth="2"/>
            <line x1="72" y1="28" x2="56" y2="42" stroke="currentColor" strokeWidth="2"/>
            <line x1="24" y1="70" x2="40" y2="54" stroke="currentColor" strokeWidth="2"/>
            <line x1="72" y1="70" x2="56" y2="54" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'maintenance':
        return (
          <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
            <rect x="20" y="14" width="56" height="68" rx="3" stroke="currentColor" strokeWidth="3"/>
            <line x1="30" y1="30" x2="66" y2="30" stroke="currentColor" strokeWidth="2"/>
            <line x1="30" y1="42" x2="66" y2="42" stroke="currentColor" strokeWidth="2"/>
            <path d="M30 58 L40 66 L66 44" stroke="var(--ochre)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="work" className="py-16 md:py-24 border-t transition-colors duration-200" style={{ borderColor: 'var(--line)' }}>
      <div className="max-w-[1040px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif font-medium text-2xl sm:text-3xl tracking-tight mb-2" style={{ color: 'var(--ink)' }}>
              Work
            </h2>
            <p className="text-base max-w-[560px]" style={{ color: 'var(--ink-soft)' }}>
              A mix of interface design and full-stack builds with visual context and domain implementation details.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-md border text-xs font-medium self-start sm:self-auto"
               style={{ backgroundColor: 'var(--paper-raised)', borderColor: 'var(--line)' }}>
            <button
              type="button"
              onClick={() => setFilter('all')}
              className="px-3 py-1.5 rounded transition-colors cursor-pointer"
              style={{
                backgroundColor: filter === 'all' ? 'var(--ink)' : 'transparent',
                color: filter === 'all' ? 'var(--paper)' : 'var(--ink-soft)',
              }}
            >
              All ({CASE_STUDIES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('design')}
              className="px-3 py-1.5 rounded transition-colors cursor-pointer"
              style={{
                backgroundColor: filter === 'design' ? 'var(--ink)' : 'transparent',
                color: filter === 'design' ? 'var(--paper)' : 'var(--ink-soft)',
              }}
            >
              Design (3)
            </button>
            <button
              type="button"
              onClick={() => setFilter('engineering')}
              className="px-3 py-1.5 rounded transition-colors cursor-pointer"
              style={{
                backgroundColor: filter === 'engineering' ? 'var(--ink)' : 'transparent',
                color: filter === 'engineering' ? 'var(--paper)' : 'var(--ink-soft)',
              }}
            >
              Engineering (4)
            </button>
          </div>
        </div>

        {/* Case Studies List */}
        <div className="space-y-16">
          {/* Design Category label if showing all */}
          {filter === 'all' && (
            <div className="border-b pb-3 mb-6" style={{ borderColor: 'var(--line)' }}>
              <span className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--pine)' }}>
                Design work — SkillCraft Technology internship
              </span>
            </div>
          )}

          {filteredCases.map((item, idx) => {
            const isFirstEngineering = filter === 'all' && item.category === 'engineering' && filteredCases[idx - 1]?.category === 'design';

            return (
              <div key={item.id}>
                {isFirstEngineering && (
                  <div className="border-b pb-3 mb-12 mt-16" style={{ borderColor: 'var(--line)' }}>
                    <span className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--pine)' }}>
                      Engineering builds — independent projects
                    </span>
                  </div>
                )}

                <div 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b items-start transition-opacity"
                  style={{ borderColor: 'var(--line)' }}
                >
                  {/* Left Column: Visual Representation (Relevant Project Image & Vector Icon) */}
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    {item.imageUrl ? (
                      <div 
                        className="group relative rounded-lg overflow-hidden border cursor-pointer aspect-video bg-black/5"
                        style={{ borderColor: 'var(--line)' }}
                        onClick={() => setSelectedImage({ url: item.imageUrl!, alt: item.imageAlt || item.title, title: item.title })}
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.imageAlt || item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-medium backdrop-blur-[2px]">
                          <Maximize2 className="w-4 h-4" />
                          <span>View Image</span>
                        </div>
                        <div 
                          className="absolute top-2.5 left-2.5 px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md"
                          style={{
                            backgroundColor: 'rgba(28, 35, 33, 0.75)',
                            color: '#FBFBF8',
                          }}
                        >
                          {item.category === 'design' ? 'UI / UX Design' : 'Full-Stack'}
                        </div>
                      </div>
                    ) : null}

                    {/* Compact Icon Indicator */}
                    <div className="flex items-center gap-2.5 px-1 text-xs" style={{ color: 'var(--ink-soft)' }}>
                      <div 
                        className="w-7 h-7 rounded flex items-center justify-center p-1 shrink-0"
                        style={{ 
                          backgroundColor: 'var(--paper-raised)', 
                          border: '1px solid var(--line)',
                          color: 'var(--pine)' 
                        }}
                      >
                        {renderIcon(item.iconType)}
                      </div>
                      <span className="font-medium truncate">{item.imageAlt || item.title}</span>
                    </div>
                  </div>

                  {/* Right Column: Case Study Details */}
                  <div className="lg:col-span-7 flex flex-col justify-start">
                    <h3 className="font-serif font-medium text-xl sm:text-2xl mb-1.5" style={{ color: 'var(--ink)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm mb-4 font-medium" style={{ color: 'var(--ink-soft)' }}>
                      {item.role}
                    </p>

                    <div className="space-y-3.5 mb-5">
                      <div>
                        <span className="text-xs uppercase font-semibold tracking-wider block mb-1" style={{ color: 'var(--pine)' }}>
                          {item.category === 'design' ? 'Problem' : 'What it does'}
                        </span>
                        <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                          {item.problemOrWhat}
                        </p>
                      </div>

                      <div>
                        <span className="text-xs uppercase font-semibold tracking-wider block mb-1" style={{ color: 'var(--pine)' }}>
                          {item.category === 'design' ? 'Approach' : 'My role'}
                        </span>
                        <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                          {item.approachOrRole}
                        </p>
                      </div>

                      {item.outcome && (
                        <div>
                          <span className="text-xs uppercase font-semibold tracking-wider block mb-1" style={{ color: 'var(--pine)' }}>
                            Outcome
                          </span>
                          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                            {item.outcome}
                          </p>
                        </div>
                      )}
                    </div>

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-[2px] border font-medium"
                            style={{ 
                              borderColor: 'var(--line)', 
                              color: 'var(--ink-soft)',
                              backgroundColor: 'var(--paper-raised)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Preview Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full rounded-lg overflow-hidden border shadow-2xl p-2 sm:p-3"
              style={{ backgroundColor: 'var(--paper-raised)', borderColor: 'var(--line)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2 px-2 border-b mb-2" style={{ borderColor: 'var(--line)' }}>
                <span className="font-serif font-medium text-base truncate" style={{ color: 'var(--ink)' }}>
                  {selectedImage.title}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="p-1 rounded hover:bg-black/10 transition-colors cursor-pointer"
                  style={{ color: 'var(--ink)' }}
                  aria-label="Close image modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded overflow-hidden max-h-[70vh] flex items-center justify-center bg-black/10">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              <p className="text-xs mt-2 px-2 text-center" style={{ color: 'var(--ink-soft)' }}>
                {selectedImage.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

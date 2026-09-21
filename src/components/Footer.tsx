import { useState } from 'react';
import { Mail, Phone, ExternalLink, MapPin, Copy, Check } from 'lucide-react';

export function Footer() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <footer id="contact" className="py-20 text-slate-100 transition-colors duration-200 border-t" style={{ backgroundColor: 'var(--pine-deep)', borderColor: 'var(--line)' }}>
      <div className="max-w-[1040px] mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-serif font-medium text-3xl sm:text-4xl tracking-tight mb-4 text-[#FBFBF8]">
            Let's talk.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#CFDCD6]">
            Open to product design and full-stack internships. Reach out directly or connect on LinkedIn.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <div className="p-4 rounded border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-[#9FB4AC] mb-1.5 uppercase tracking-wider font-semibold">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                Email
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard('mvaishnavia1@gmail.com', 'email')}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
                title="Copy email address"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a 
              href="mailto:mvaishnavia1@gmail.com" 
              className="text-sm sm:text-base font-medium text-[#FBFBF8] hover:underline break-all"
            >
              mvaishnavia1@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="p-4 rounded border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-[#9FB4AC] mb-1.5 uppercase tracking-wider font-semibold">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                Phone
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard('+916383077026', 'phone')}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
                title="Copy phone number"
              >
                {copiedType === 'phone' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a 
              href="tel:+916383077026" 
              className="text-sm sm:text-base font-medium text-[#FBFBF8] hover:underline"
            >
              +91 63830 77026
            </a>
          </div>

          {/* LinkedIn */}
          <div className="p-4 rounded border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="text-xs text-[#9FB4AC] mb-1.5 uppercase tracking-wider font-semibold">
              LinkedIn
            </div>
            <a 
              href="https://www.linkedin.com/in/vaishnaviamurugadoss-2005vm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm sm:text-base font-medium text-[#FBFBF8] hover:underline inline-flex items-center gap-1.5"
            >
              <span>vaishnaviamurugadoss</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* GitHub */}
          <div className="p-4 rounded border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="text-xs text-[#9FB4AC] mb-1.5 uppercase tracking-wider font-semibold">
              GitHub
            </div>
            <a 
              href="https://github.com/vaishnavia499" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm sm:text-base font-medium text-[#FBFBF8] hover:underline inline-flex items-center gap-1.5"
            >
              <span>vaishnavia499</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Location */}
          <div className="p-4 rounded border border-white/10 bg-white/5 backdrop-blur-sm sm:col-span-2 md:col-span-2">
            <div className="text-xs text-[#9FB4AC] mb-1.5 uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Location
            </div>
            <span className="text-sm sm:text-base font-medium text-[#FBFBF8]">
              Thiruvarur, Tamil Nadu, India
            </span>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9FB4AC]">
          <div>
            <span>Vaishnavia M &middot; Product Design &amp; Full-Stack</span>
          </div>
          <div>
            <span>Updated 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

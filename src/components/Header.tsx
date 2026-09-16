import { useState, useEffect } from 'react';
import { Menu, X, Plane, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Group Tour', href: '#packages' },
  { label: 'Custom Trip', href: '#custom-trip' },
  { label: 'Inbound', href: '#packages' },
  { label: 'Outbound', href: '#packages' },
  { label: 'Promo', href: '#packages' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-white/80 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-[#D32F2F] p-2 rounded-lg transition-transform group-hover:scale-105">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold text-gray-900 tracking-tight">
                Aneka Tours
              </span>
              <span className="text-[10px] font-medium text-[#D32F2F] tracking-widest uppercase">
                & Travel
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#D32F2F] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#D32F2F] transition-all group-hover:w-3/4" />
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-red-200 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Kami
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="lg:hidden mt-3 pb-4 flex flex-col gap-1 border-t border-gray-100 pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-[#D32F2F] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-[#D32F2F] text-white px-5 py-3 rounded-full text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Kami
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

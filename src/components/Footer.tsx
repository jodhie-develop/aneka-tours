import { Plane, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top strip */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Phone, title: 'Hubungi Kami', value: '+62 812-3456-7890' },
            { icon: Mail, title: 'Email', value: 'info@anekatours.co.id' },
            { icon: MapPin, title: 'Kantor', value: 'Jakarta Selatan, Indonesia' },
            { icon: Clock, title: 'Jam Operasional', value: 'Senin–Sabtu, 09:00–18:00' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#D32F2F]/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#FF5252]" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">{item.title}</p>
                <p className="text-sm font-semibold text-gray-200">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#D32F2F] p-2 rounded-lg">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-extrabold text-white">Aneka Tours</span>
              <span className="text-[10px] font-medium text-[#FF5252] tracking-widest uppercase">& Travel</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Travel partner terpercaya sejak 1998. Melayani group tour, custom trip,
            inbound & outbound ke seluruh penjuru dunia.
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-[#D32F2F] flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4 text-gray-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          { title: 'Layanan', links: ['Group Tour', 'Custom Trip', 'Inbound Service', 'Outbound Tour', 'MICE & Corporate'] },
          { title: 'Destinasi', links: ['Bali & Lombok', 'Jepang & Korea', 'Turki & Eropa', 'Asia Tenggara', 'Domestik Nusantara'] },
          { title: 'Perusahaan', links: ['Tentang Kami', 'Hubungi Kami', 'Karir', 'Blog & Tips', 'Syarat & Ketentuan'] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-bold text-white mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-[#FF5252] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; 2026 Aneka Tours &amp; Travel. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Licensed by Kementerian Pariwisata Republik Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}

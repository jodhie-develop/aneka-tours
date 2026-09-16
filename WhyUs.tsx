import { ShieldCheck, Headphones, BadgePercent, Globe2 } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Berlisensi Resmi',
    desc: 'Terdaftar di Kemenpar RI & bersertifikat ASITA untuk keamanan perjalanan Anda.',
  },
  {
    icon: Headphones,
    title: 'Dukungan 24/7',
    desc: 'Tour coordinator berdedikasi siap membantu kapan saja selama perjalanan.',
  },
  {
    icon: BadgePercent,
    title: 'Harga Terbaik',
    desc: 'Jaminan harga termurah dengan kualitas terbaik. Garansi uang kembali.',
  },
  {
    icon: Globe2,
    title: '120+ Destinasi',
    desc: 'Jaringan global ke Asia, Eropa, Timur Tengah, dan seluruh Nusantara.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-red-50/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-50 group-hover:bg-[#D32F2F] flex items-center justify-center mb-4 transition-all group-hover:scale-110">
                <f.icon className="w-7 h-7 text-[#D32F2F] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1.5">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

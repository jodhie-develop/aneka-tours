import { useState } from 'react';
import { Clock, Star, Users, FileText, ChevronRight, MapPin } from 'lucide-react';
import { packages, type TourPackage } from '@/data/packages';

function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID').format(amount);
}

function PackageCard({ pkg }: { pkg: TourPackage }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.destination}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Duration badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-[#D32F2F]" />
          <span className="text-xs font-bold text-gray-900">{pkg.duration}</span>
        </div>

        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-[#D32F2F] px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="w-3.5 h-3.5 text-white fill-white" />
          <span className="text-xs font-bold text-white">{pkg.rating}</span>
        </div>

        {/* Seats left tag */}
        {pkg.seatsLeft <= 5 && (
          <div className="absolute bottom-3 left-3 bg-yellow-400 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
            <Users className="w-3.5 h-3.5 text-gray-900" />
            <span className="text-xs font-bold text-gray-900">Sisa {pkg.seatsLeft} Kursi</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#D32F2F]" />
          {pkg.destination}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#D32F2F] transition-colors">
          {pkg.title}
        </h3>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.highlights.slice(0, 2).map((h) => (
            <span
              key={h}
              className="text-[11px] font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded-md border border-gray-100"
            >
              {h}
            </span>
          ))}
          <span className="text-[11px] font-medium text-gray-400 px-2 py-1">
            +{pkg.highlights.length - 2} lainnya
          </span>
        </div>

        {/* Departures */}
        <div className="mb-4">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Keberangkatan</p>
          <div className="flex flex-wrap gap-1.5">
            {pkg.departures.slice(0, 3).map((d) => (
              <span key={d} className="text-[11px] font-medium text-gray-700 bg-red-50 px-2 py-1 rounded-md">
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mt-auto mb-4">
          <p className="text-xs text-gray-500 mb-0.5">Mulai dari</p>
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-semibold text-gray-400">Rp</span>
            <span className="text-2xl font-extrabold text-[#D32F2F]">{formatIDR(pkg.priceFrom)}</span>
            <span className="text-xs text-gray-500">/pax</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetail(!showDetail)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-red-100 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            Detail & Itinerary PDF
          </button>
        </div>

        {/* Expandable detail */}
        {showDetail && (
          <div className="mt-3 pt-3 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Highlight Itinerary</p>
            <ul className="space-y-1.5">
              {pkg.highlights.map((h, i) => (
                <li key={h} className="flex items-center gap-2 text-xs text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-red-50 text-[#D32F2F] flex items-center justify-center font-bold text-[10px]">
                    {i + 1}
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#D32F2F] hover:gap-2.5 transition-all"
            >
              Tanya via WhatsApp
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PackageGrid() {
  const [filter, setFilter] = useState<'all' | 'domestic' | 'international'>('all');

  const filtered = packages.filter((p) => {
    if (filter === 'domestic') return p.destination.includes('Indonesia');
    return filter === 'international' ? !p.destination.includes('Indonesia') : true;
  });

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-[#D32F2F] uppercase tracking-widest mb-2">
            Popular Tours
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Paket Tour Pilihan
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Destinasi paling dicari dengan harga terbaik. Kursi terbatas, amankan sekarang!
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {([
            { key: 'all', label: 'Semua Paket' },
            { key: 'domestic', label: 'Domestik' },
            { key: 'international', label: 'Internasional' },
          ] as const).map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === f.key
                  ? 'bg-[#D32F2F] text-white shadow-lg shadow-red-100'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

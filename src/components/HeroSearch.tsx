import { useState } from 'react';
import { Search, Calendar, MapPin, ChevronDown, Users } from 'lucide-react';
import { destinations, months } from '@/data/packages';

type Tab = 'group' | 'custom';

export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState<Tab>('group');
  const [destination, setDestination] = useState('');
  const [month, setMonth] = useState('');
  const [pax, setPax] = useState('');
  const [destOpen, setDestOpen] = useState(false);
  const [monthOpen, setMonthOpen] = useState(false);
  const [paxOpen, setPaxOpen] = useState(false);

  const paxOptions = ['1 Orang', '2 Orang', '3-5 Orang', '6-10 Orang', '10+ Orang (Grup)'];

  return (
    <section className="relative min-h-[680px] flex items-center justify-center pt-24 pb-12">
      {/* Hero background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/27651087/pexels-photo-27651087.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Tropical paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-in fade-in duration-700">
          <span className="inline-block bg-[#D32F2F]/90 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            Trusted Travel Partner Since 1998
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Jelajahi Dunia Bersama
            <br />
            <span className="text-[#FF5252]">Aneka Tours</span>
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            Paket tour terlengkap ke destinasi domestik & internasional.
            Group tour, custom trip, dan inbound — semua dalam satu klik.
          </p>
        </div>

        {/* Search Widget Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto text-left">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {([
              { key: 'group', label: 'Group Tour' },
              { key: 'custom', label: 'Custom Trip' },
            ] as { key: Tab; label: string }[]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-4 text-sm font-semibold transition-all relative ${
                  activeTab === tab.key
                    ? 'text-[#D32F2F] bg-white'
                    : 'text-gray-500 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#D32F2F]" />
                )}
              </button>
            ))}
          </div>

          {/* Fields */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Destination */}
              <div className="relative">
                <label className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D32F2F]" />
                  Destinasi
                </label>
                <button
                  onClick={() => { setDestOpen(!destOpen); setMonthOpen(false); setPaxOpen(false); }}
                  className="w-full flex items-center justify-between px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-[#D32F2F]/50 transition-colors bg-white"
                >
                  <span className={destination ? 'text-gray-900' : 'text-gray-400'}>
                    {destination || 'Pilih Destinasi'}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${destOpen ? 'rotate-180' : ''}`} />
                </button>
                {destOpen && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-56 overflow-y-auto">
                    {destinations.map((d) => (
                      <button
                        key={d}
                        onClick={() => { setDestination(d); setDestOpen(false); }}
                        className="w-full text-left px-3 py-2.5 text-sm hover:bg-red-50 hover:text-[#D32F2F] transition-colors"
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Month */}
              <div className="relative">
                <label className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D32F2F]" />
                  Bulan Keberangkatan
                </label>
                <button
                  onClick={() => { setMonthOpen(!monthOpen); setDestOpen(false); setPaxOpen(false); }}
                  className="w-full flex items-center justify-between px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-[#D32F2F]/50 transition-colors bg-white"
                >
                  <span className={month ? 'text-gray-900' : 'text-gray-400'}>
                    {month || 'Pilih Bulan'}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${monthOpen ? 'rotate-180' : ''}`} />
                </button>
                {monthOpen && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                    {months.map((m) => (
                      <button
                        key={m}
                        onClick={() => { setMonth(m); setMonthOpen(false); }}
                        className="w-full text-left px-3 py-2.5 text-sm hover:bg-red-50 hover:text-[#D32F2F] transition-colors"
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Pax (custom trip only) */}
              <div className="relative">
                <label className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D32F2F]" />
                  {activeTab === 'custom' ? 'Jumlah Peserta' : 'Jenis Trip'}
                </label>
                {activeTab === 'custom' ? (
                  <>
                    <button
                      onClick={() => { setPaxOpen(!paxOpen); setDestOpen(false); setMonthOpen(false); }}
                      className="w-full flex items-center justify-between px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-[#D32F2F]/50 transition-colors bg-white"
                    >
                      <span className={pax ? 'text-gray-900' : 'text-gray-400'}>
                        {pax || 'Pilih Jumlah'}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${paxOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {paxOpen && (
                      <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                        {paxOptions.map((o) => (
                          <button
                            key={o}
                            onClick={() => { setPax(o); setPaxOpen(false); }}
                            className="w-full text-left px-3 py-2.5 text-sm hover:bg-red-50 hover:text-[#D32F2F] transition-colors"
                          >
                            {o}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-gray-50 flex items-center gap-2">
                    <span className="text-lg">🚌</span>
                    <span>Open Trip Group</span>
                  </div>
                )}
              </div>

              {/* Search button */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    const el = document.getElementById('packages');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-red-200 active:scale-95"
                >
                  <Search className="w-4 h-4" />
                  Cari Paket
                </button>
              </div>
            </div>

            {/* Quick stats */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                120+ destinasi tersedia
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D32F2F]" />
                15.000+ wisatawan puas
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                Rating 4.9/5.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Building2, Calendar, MapPin, Users, ArrowRight, Check, Sparkles, X } from 'lucide-react';

export default function CustomTripBanner() {
  const [formOpen, setFormOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    destination: '',
    duration: '',
    pax: '',
    budget: '',
    departDate: '',
  });

  const steps = [
    { num: 1, label: 'Info Kontak', icon: Building2 },
    { num: 2, label: 'Detail Perjalanan', icon: MapPin },
    { num: 3, label: 'Konfirmasi', icon: Check },
  ];

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormOpen(false);
      setStep(1);
      setForm({
        name: '', company: '', email: '', phone: '',
        destination: '', duration: '', pax: '', budget: '', departDate: '',
      });
    }, 3000);
  };

  const canProceed = () => {
    if (step === 1) return form.name && form.email && form.phone;
    if (step === 2) return form.destination && form.pax && form.departDate;
    return true;
  };

  const steps_list = [
    { icon: MapPin, title: 'Pilih Destinasi', desc: 'Beri tahu kami kemana tujuan Anda' },
    { icon: Users, title: 'Tentukan Peserta', desc: 'Jumlah orang & preferensi grup' },
    { icon: Calendar, title: 'Atur Jadwal', desc: 'Pilih tanggal keberangkatan' },
    { icon: Sparkles, title: 'Dapatkan Quote', desc: 'Rencana khusus dalam 24 jam' },
  ];

  return (
    <section id="custom-trip" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6285113/pexels-photo-6285113.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Corporate travel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#D32F2F]/95 to-[#B71C1C]/80" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 sm:p-12 lg:p-16">
            {/* Left: copy */}
            <div className="text-white">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Custom Trip Builder
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
                Rancang Perjalanan Khusus untuk Korporat & Grup Anda
              </h2>
              <p className="text-white/90 text-base mb-8 max-w-md">
                Dari company outing hingga incentive trip — tim kami menyusun
                itinerary tailor-made sesuai budget dan kebutuhan Anda.
              </p>

              {/* Step indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {steps_list.map((s, i) => (
                  <div key={s.title} className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold relative">
                      <s.icon className="w-5 h-5" />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white text-[#D32F2F] text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">{s.title}</p>
                      <p className="text-[11px] text-white/70 leading-tight">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-[#D32F2F] px-7 py-3.5 rounded-full text-sm font-bold hover:bg-gray-50 transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                Mulai Rancang Trip
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: highlights card */}
            <div className="hidden lg:flex items-end justify-end">
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full">
                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D32F2F]" />
                  Kenapa Custom Trip?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Itinerary 100% disesuaikan kebutuhan grup',
                    'Negosiasi harga grupus & sponsor korporat',
                    'Dedicated tour coordinator selama perjalanan',
                    'Fleksibel: transport, akomodasi, & aktivitas',
                    'Laporan lengkap untuk kebutuhan company',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {formOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setFormOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Custom Trip Builder</h3>
                <p className="text-xs text-gray-500 mt-0.5">Langkah {step} dari 3</p>
              </div>
              <button
                onClick={() => setFormOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Step indicator bar */}
            <div className="flex items-center px-6 pt-4 gap-2">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-center flex-1 last:flex-none">
                  <div
                    className={`flex items-center gap-2 ${
                      step >= s.num ? 'text-[#D32F2F]' : 'text-gray-300'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        step > s.num
                          ? 'bg-green-500 text-white'
                          : step === s.num
                          ? 'bg-[#D32F2F] text-white'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {step > s.num ? <Check className="w-4 h-4" /> : s.num}
                    </div>
                    <span className="text-xs font-medium hidden sm:inline">{s.label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 rounded ${step > s.num ? 'bg-green-500' : 'bg-gray-100'}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Form body */}
            {submitted ? (
              <div className="p-12 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Permintaan Terkirim!</h4>
                <p className="text-sm text-gray-500">
                  Tim kami akan menghubungi Anda dalam 24 jam dengan rencana trip khusus.
                </p>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-2 duration-200">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Nama Lengkap *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/30 focus:border-[#D32F2F]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Perusahaan / Grup</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="PT. Contoh Indonesia"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/30 focus:border-[#D32F2F]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/30 focus:border-[#D32F2F]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">No. WhatsApp *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="0812-3456-7890"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/30 focus:border-[#D32F2F]"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-2 duration-200">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Destinasi yang Diinginkan *</label>
                      <input
                        type="text"
                        value={form.destination}
                        onChange={(e) => setForm({ ...form, destination: e.target.value })}
                        placeholder="Mis. Bali, Yogyakarta, Jepang..."
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/30 focus:border-[#D32F2F]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Tanggal Keberangkatan *</label>
                        <input
                          type="date"
                          value={form.departDate}
                          onChange={(e) => setForm({ ...form, departDate: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/30 focus:border-[#D32F2F]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Jumlah Peserta *</label>
                        <input
                          type="number"
                          value={form.pax}
                          onChange={(e) => setForm({ ...form, pax: e.target.value })}
                          placeholder="20"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/30 focus:border-[#D32F2F]"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Estimasi Durasi</label>
                        <input
                          type="text"
                          value={form.duration}
                          onChange={(e) => setForm({ ...form, duration: e.target.value })}
                          placeholder="4D3N"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/30 focus:border-[#D32F2F]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Budget / Pax (Rp)</label>
                        <input
                          type="text"
                          value={form.budget}
                          onChange={(e) => setForm({ ...form, budget: e.target.value })}
                          placeholder="5.000.000"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/30 focus:border-[#D32F2F]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-3 animate-in fade-in slide-in-from-right-2 duration-200">
                    <div className="bg-gray-50 rounded-xl p-5 space-y-3">
                      <h4 className="text-sm font-bold text-gray-900 mb-3">Konfirmasi Detail Trip</h4>
                      {[
                        { label: 'Nama', value: form.name },
                        { label: 'Perusahaan', value: form.company || '-' },
                        { label: 'Email', value: form.email },
                        { label: 'WhatsApp', value: form.phone },
                        { label: 'Destinasi', value: form.destination },
                        { label: 'Tanggal', value: form.departDate },
                        { label: 'Peserta', value: `${form.pax} orang` },
                        { label: 'Durasi', value: form.duration || '-' },
                        { label: 'Budget/pax', value: form.budget ? `Rp ${form.budget}` : '-' },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between text-sm border-b border-gray-200 last:border-0 pb-2 last:pb-0">
                          <span className="text-gray-500">{row.label}</span>
                          <span className="font-semibold text-gray-900">{row.value || '-'}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 text-center">
                      Dengan mengirim, Anda menyetujui dihubungi tim Aneka Tours.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Footer buttons */}
            {!submitted && (
              <div className="flex items-center justify-between p-6 border-t border-gray-100">
                <button
                  onClick={() => (step === 1 ? setFormOpen(false) : setStep(step - 1))}
                  className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {step === 1 ? 'Batal' : 'Kembali'}
                </button>
                <button
                  onClick={() => (step === 3 ? handleSubmit() : setStep(step + 1))}
                  disabled={!canProceed()}
                  className="px-6 py-2.5 text-sm font-bold text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded-lg transition-all hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
                >
                  {step === 3 ? 'Kirim Permintaan' : 'Lanjut'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

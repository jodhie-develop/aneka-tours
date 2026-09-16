import Header from '@/components/Header';
import HeroSearch from '@/components/HeroSearch';
import WhyUs from '@/components/WhyUs';
import PackageGrid from '@/components/PackageGrid';
import CustomTripBanner from '@/components/CustomTripBanner';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <HeroSearch />
        <WhyUs />
        <PackageGrid />
        <CustomTripBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;

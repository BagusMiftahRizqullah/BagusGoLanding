import React from "react";
import Image from "next/image";
import { 
  Camera, 
  Map, 
  Zap, 
  Clock, 
  Navigation, 
  Package, 
  Smile, 
  CheckCircle,
  Download,
  ChevronDown
} from "lucide-react";

export default function Home() {
  const downloadUrl = "https://github.com/BagusMiftahRizqullah/BagusGoMobile/releases/download/v1.5/BagusGo-v1.5.apk";

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-green-100">
      
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex flex-col justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_mobile.png"
            alt="Kurir BagusGo Mobile Background"
            fill
            className="block md:hidden object-cover object-center"
            priority
            quality={100}
          />
          <Image
            src="/hero.png"
            alt="Kurir BagusGo Desktop Background"
            fill
            className="hidden md:block object-cover object-center"
            priority
            quality={100}
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-xl space-y-6 text-white animate-fade-in-up">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-md border border-green-400/30 px-3 py-1.5 rounded-full text-green-300 font-semibold text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Aplikasi Khusus Kurir
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Kurir Paket? <br />
              <span className="text-green-400">Stop Ribet</span> Catat Alamat.
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-200 leading-relaxed max-w-md drop-shadow-md">
              Cukup foto alamat paket → rute diurutkan otomatis → kirim paket jadi lebih cepat dan santai.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={downloadUrl}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-600/30 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                <Download className="w-5 h-5" />
                Daftar Gratis – 1 Menit
              </a>
              <a 
                href="#cara-kerja"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all"
              >
                Lihat Cara Kerja
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce md:hidden">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Masalah Kurir Sehari-hari</h2>
            <p className="text-gray-500">Pernah ngalamin kayak gini pas lagi on-bid?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Problem 1 */}
            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-2">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Paket Numpuk</h3>
              <p className="text-gray-600 leading-relaxed">
                Pusing lihat alamat beda-beda, bingung mau mulai kirim dari mana dulu.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-2">
                <Navigation className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Salah Rute</h3>
              <p className="text-gray-600 leading-relaxed">
                Sering muter-muter di jalan yang sama, buang waktu dan bensin percuma.
              </p>
            </div>

            {/* Problem 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 mb-2">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Capek Ngetik</h3>
              <p className="text-gray-600 leading-relaxed">
                Harus nulis atau ketik alamat satu-satu ke Google Maps. Ribet!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution Section (How It Works) */}
      <section id="cara-kerja" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Cara Kerja BagusGo</h2>
            <p className="text-gray-500 mt-2">Cuma 3 langkah gampang, gak pake ribet.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 md:before:ml-[50%] before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-200 before:hidden md:before:block">
            
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-16">
              <div className="flex-1 text-center md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Foto Alamat Paket</h3>
                <p className="text-gray-600">
                  Gak perlu ngetik. Cukup arahkan kamera HP ke label alamat paket.
                </p>
              </div>
              <div className="relative z-10 order-1 md:order-2">
                <div className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                  <Camera className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-1 order-3 md:order-3 md:invisible"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-16">
              <div className="flex-1 md:invisible order-3 md:order-1"></div>
              <div className="relative z-10 order-1 md:order-2">
                <div className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left order-2 md:order-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Sistem Susun Otomatis</h3>
                <p className="text-gray-600">
                  AI pintar BagusGo akan mengurutkan rute paling efisien buat kamu.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-16">
              <div className="flex-1 text-center md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Kirim Lebih Cepat</h3>
                <p className="text-gray-600">
                  Tinggal jalan ikutin peta. Hemat bensin, kerjaan cepat beres.
                </p>
              </div>
              <div className="relative z-10 order-1 md:order-2">
                <div className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                  <Navigation className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-1 order-3 md:order-3 md:invisible"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Kenapa Pakai BagusGo?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Hemat Waktu</h4>
              <p className="text-gray-500 text-sm">Selesaikan pengiriman 40% lebih cepat dari biasanya.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4">
                <Map className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Anti Nyasar</h4>
              <p className="text-gray-500 text-sm">Titik lokasi akurat, gak perlu tanya-tanya warga lagi.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Cocok Paket Banyak</h4>
              <p className="text-gray-500 text-sm">Mau 10 atau 100 paket, semua bisa diatur sekali jalan.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600 mb-4">
                <Smile className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Kerja Lebih Tenang</h4>
              <p className="text-gray-500 text-sm">Gak stress mikirin rute, fokus nyetir dengan aman.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Social Proof */}
      <section className="py-20 px-6 bg-green-50">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed">
            "Semenjak pake BagusGo, saya bisa pulang lebih awal. Gak pusing lagi ngatur rute satu-satu. Mantap!"
          </blockquote>
          
          <div>
            <div className="font-bold text-gray-900 text-lg">Budi Santoso</div>
            <div className="text-green-600">Kurir Ekspedisi Jakarta</div>
          </div>

          <div className="pt-8 border-t border-green-200 mt-8">
            <p className="text-gray-500 font-medium">Dipercaya oleh ribuan kurir lokal Indonesia</p>
          </div>
        </div>
      </section>

      {/* 6. Footer & Sticky CTA */}
      <footer className="bg-gray-900 text-white py-12 pb-32 md:pb-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tight">BagusGo</div>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} BagusGo. Dibuat untuk Kurir Indonesia.</p>
        </div>
      </footer>

      {/* Sticky Bottom CTA (Mobile Only) */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden z-50">
        <a 
          href={downloadUrl}
          className="flex items-center justify-center gap-2 bg-green-600 text-white w-full py-4 rounded-xl font-bold text-lg active:bg-green-700"
        >
          Daftar Gratis Sekarang
        </a>
      </div>

    </main>
  );
}

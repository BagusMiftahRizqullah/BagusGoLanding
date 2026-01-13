import React from "react";
import Image from "next/image";
import { Download, ChevronRight, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center text-white overflow-hidden relative">
      {/* Header / Logo */}
      {/* <nav className="absolute top-0 left-0 w-full z-20 px-6 py-6 md:px-12 md:py-8">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/20 shadow-lg">
            <Image 
              src="/icon.png" 
              alt="BagusGo Logo" 
              fill 
              className="object-contain p-1"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white drop-shadow-md">
            BagusGo
          </span>
        </div>
      </nav> */}

      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Hero Image */}
        <Image
          src="/hero_mobile.png"
          alt="BagusGo Hero Background Mobile"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
          priority
          className="block md:hidden scale-105"
        />

        {/* Desktop Hero Image */}
        <Image
          src="/hero.png"
          alt="BagusGo Hero Background Desktop"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
          priority
          className="hidden md:block scale-105" // Slight zoom for depth
        />
        {/* Modern Gradient Overlay: Dark on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl space-y-10 animate-fade-in-up">
          
          {/* Badge / Tagline */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-green-400 font-semibold text-sm tracking-wide uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Solusi Logistik #1 Indonesia
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-2xl">
              Kirim Paket <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Lebih Cepat
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-lg">
              Optimalkan rute pengiriman Anda dengan teknologi AI terbaru. 
              Hemat waktu hingga 40% dan biaya operasional lebih efisien.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-2">
            <a 
              href="https://drive.google.com/uc?export=download&id=1-x7sWJXClntcsW_nBFp_ZG3_qLqiX9mu" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_15px_30px_rgba(34,197,94,0.5)] transform hover:-translate-y-1 active:scale-95 border border-green-500/50"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span>Download Sekarang</span>
            </a>
            
            {/* <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all hover:border-white/30">
              <span>Pelajari Fitur</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button> */}
          </div>

          {/* Social Proof / Stats */}
          <div className="pt-8 border-t border-white/10 flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold leading-none">10k+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Pengguna Aktif</p>
              </div>
            </div>
            
            <div className="w-px h-10 bg-white/10"></div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-bold leading-none">4.8</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Rating App</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

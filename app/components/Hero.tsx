"use client";

import Link from "next/link";
import { Code2, Cpu, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#0a1628]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3b9aff]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b9aff]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b9aff]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
            Build Your Future with{" "}
            <span className="bg-gradient-to-r from-[#3b9aff] to-[#60d5ff] bg-clip-text text-transparent">
              AI and Software
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We create custom web, mobile, and AI solutions for ambitious
            startups and businesses.
          </p>

          {/* CTA Button */}
          <Link href="/contact">
            <button className="bg-[#3b9aff] hover:bg-[#2a89ef] text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-[#3b9aff]/30 hover:shadow-[#3b9aff]/50 hover:scale-105">
              Contact Us
            </button>
          </Link>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[#3b9aff]/50">
              <div className="w-12 h-12 bg-[#3b9aff]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Code2 className="w-6 h-6 text-[#3b9aff]" />
              </div>
              <h3 className="text-white mb-2">Web Development</h3>
              <p className="text-gray-400">
                Modern, responsive websites built with cutting-edge technologies
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[#3b9aff]/50">
              <div className="w-12 h-12 bg-[#3b9aff]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Cpu className="w-6 h-6 text-[#3b9aff]" />
              </div>
              <h3 className="text-white mb-2">AI Solutions</h3>
              <p className="text-gray-400">
                Intelligent systems that transform your business operations
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[#3b9aff]/50">
              <div className="w-12 h-12 bg-[#3b9aff]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Rocket className="w-6 h-6 text-[#3b9aff]" />
              </div>
              <h3 className="text-white mb-2">Mobile Apps</h3>
              <p className="text-gray-400">
                Native and cross-platform apps for iOS and Android
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#3b9aff]/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#3b9aff] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

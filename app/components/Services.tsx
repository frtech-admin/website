"use client";

import { Smartphone, Brain, ShoppingCart } from "lucide-react";

export function Services() {
  return (
    <section className="py-20 bg-[#0f1f3a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3b9aff]/50 to-transparent"></div>

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Our Core Services
          </h2>
          <div className="w-20 h-1 bg-[#3b9aff] mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Web & Mobile Apps */}
          <div className="group bg-gradient-to-br from-[#0a1628] to-[#0a1628]/50 border border-white/10 rounded-2xl p-8 hover:border-[#3b9aff]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#3b9aff]/20">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3b9aff]/20 to-[#3b9aff]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-8 h-8 text-[#3b9aff]" />
            </div>
            <h3 className="text-2xl text-white mb-4">Web & Mobile Apps</h3>
            <p className="text-gray-400 leading-relaxed">
              Custom applications for all platforms.
            </p>
            <div className="mt-6 pt-6 border-t border-white/5">
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3b9aff] rounded-full"></div>
                  <span>Responsive Web Apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3b9aff] rounded-full"></div>
                  <span>iOS & Android Apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3b9aff] rounded-full"></div>
                  <span>Cross-Platform Solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI Solutions */}
          <div className="group bg-gradient-to-br from-[#0a1628] to-[#0a1628]/50 border border-white/10 rounded-2xl p-8 hover:border-[#3b9aff]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#3b9aff]/20">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3b9aff]/20 to-[#3b9aff]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-[#3b9aff]" />
            </div>
            <h3 className="text-2xl text-white mb-4">AI Solutions</h3>
            <p className="text-gray-400 leading-relaxed">
              Intelligent chatbots, data analysis, and custom models.
            </p>
            <div className="mt-6 pt-6 border-t border-white/5">
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3b9aff] rounded-full"></div>
                  <span>AI Chatbots</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3b9aff] rounded-full"></div>
                  <span>Data Analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3b9aff] rounded-full"></div>
                  <span>Custom ML Models</span>
                </li>
              </ul>
            </div>
          </div>

          {/* E-commerce & Edu-Tech */}
          <div className="group bg-gradient-to-br from-[#0a1628] to-[#0a1628]/50 border border-white/10 rounded-2xl p-8 hover:border-[#3b9aff]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#3b9aff]/20">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3b9aff]/20 to-[#3b9aff]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShoppingCart className="w-8 h-8 text-[#3b9aff]" />
            </div>
            <h3 className="text-2xl text-white mb-4">E-commerce & Edu-Tech</h3>
            <p className="text-gray-400 leading-relaxed">
              Bespoke platforms for retail and education.
            </p>
            <div className="mt-6 pt-6 border-t border-white/5">
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3b9aff] rounded-full"></div>
                  <span>Online Stores</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3b9aff] rounded-full"></div>
                  <span>Learning Platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3b9aff] rounded-full"></div>
                  <span>Payment Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

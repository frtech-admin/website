"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section className="py-20 bg-[#0a1628] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3b9aff]/50 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl text-white mb-4">
                About FR Tech Ltd.
              </h2>
              <div className="w-20 h-1 bg-[#3b9aff]"></div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              We are a dynamic team of developers passionate about turning
              innovative ideas into reality. We partner with small businesses
              and startups to build scalable, secure, and intelligent software.
            </p>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl text-[#3b9aff] mb-2">50+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#3b9aff] mb-2">30+</div>
                <div className="text-gray-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#3b9aff] mb-2">5+</div>
                <div className="text-gray-400">Years</div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Team Photo/Tech Graphic */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b9aff]/20 to-transparent rounded-2xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="FR Tech Ltd. Team"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

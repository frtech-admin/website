"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f1f3a] via-[#1a2f4a] to-[#0f1f3a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#3b9aff]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#3b9aff]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Top border decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3b9aff]/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Ready to Start Your Project?
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Let's discuss how FR Tech Ltd. can help you achieve your goals.
          </p>

          {/* CTA Button */}
          <Link href="/contact">
            <button className="group bg-[#3b9aff] hover:bg-[#2a89ef] text-white px-10 py-5 rounded-lg transition-all duration-300 shadow-lg shadow-[#3b9aff]/30 hover:shadow-[#3b9aff]/50 hover:scale-105 inline-flex items-center gap-3">
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#3b9aff]"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#3b9aff]"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span>contact@frtechltd.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

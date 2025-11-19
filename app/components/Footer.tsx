"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              FR Tech
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Build your future with AI and software solutions. We create custom
              web, mobile, and AI solutions for ambitious startups and
              businesses.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/frtechltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#3b9aff] rounded-full flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/frtechltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#3b9aff] rounded-full flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/frtechltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#3b9aff] rounded-full flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/fr_techltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#3b9aff] rounded-full flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#3b9aff] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#3b9aff] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-[#3b9aff] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#3b9aff] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-[#3b9aff] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Dhaka, Bangladesh</li>
              <li>info@frtech.ltd</li>
              <li>+880 1234-567890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} FR Tech Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

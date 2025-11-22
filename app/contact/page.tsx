"use client";

import { Header } from "../components/Header";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        message: "",
      });
      alert("Thank you for your message! We will get back to you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      alert("Failed to send message. Please try again later.");
    } finally {
      setStatus("idle");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-linear-to-br from-[#0a1628] via-[#0f1f3a] to-[#0a1628]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3b9aff]/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#3b9aff]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl text-white mb-6">
              Get in{" "}
              <span className="bg-linear-to-r from-[#3b9aff] to-[#60d5ff] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0f1f3a] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#3b9aff]/50 to-transparent"></div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <div className="bg-linear-to-br from-[#0a1628] to-[#0a1628]/50 border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl text-white mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-gray-300 mb-2"
                  >
                    Full Name <span className="text-[#3b9aff]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#3b9aff] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email Address <span className="text-[#3b9aff]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#3b9aff] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-gray-300 mb-2"
                  >
                    Company Name{" "}
                    <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#3b9aff] transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message <span className="text-[#3b9aff]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#3b9aff] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#3b9aff] hover:bg-[#2a89ef] text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-[#3b9aff]/30 hover:shadow-[#3b9aff]/50 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Right Column - Contact Details */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="bg-linear-to-br from-[#0a1628] to-[#0a1628]/50 border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3b9aff]/20 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-[#3b9aff]" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">Email</h3>
                      <a
                        href="mailto:frtechltd@gmail.com"
                        className="text-gray-400 hover:text-[#3b9aff] transition-colors"
                      >
                        frtechltd@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3b9aff]/20 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-[#3b9aff]" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">Phone</h3>
                      <a
                        href="tel:1234567890"
                        className="text-gray-400 hover:text-[#3b9aff] transition-colors"
                      >
                        +8801608911359
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3b9aff]/20 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-[#3b9aff]" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">Location</h3>
                      <p className="text-gray-400">Mirpur, Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-linear-to-br from-[#0a1628] to-[#0a1628]/50 border border-white/10 rounded-2xl overflow-hidden">
                <div className="h-64 bg-[#0a1628] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6395799827964!2d-122.08624908469193!3d37.42199997982453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale contrast-125 opacity-60 hover:opacity-80 transition-opacity"
                  ></iframe>
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a1628] via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-linear-to-br from-[#0a1628] to-[#0a1628]/50 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Sunday - Thursday</span>
                    <span className="text-[#3b9aff]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-[#3b9aff]">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-[#0a1628] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#3b9aff]/50 to-transparent"></div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl text-white mb-8">
              Prefer to reach out differently?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="bg-linear-to-br from-[#0f1f3a] to-[#0f1f3a]/50 border border-white/10 hover:border-[#3b9aff]/50 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                Schedule a Call
              </a>
              <a
                href="#"
                className="bg-linear-to-br from-[#0f1f3a] to-[#0f1f3a]/50 border border-white/10 hover:border-[#3b9aff]/50 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                View FAQ
              </a>
              <a
                href="#"
                className="bg-linear-to-br from-[#0f1f3a] to-[#0f1f3a]/50 border border-white/10 hover:border-[#3b9aff]/50 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                Live Chat Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

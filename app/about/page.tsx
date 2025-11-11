"use client";

import { Header } from "../components/Header";
import { CTA } from "../components/CTA";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "CEO & Co-Founder",
      bio: "Visionary leader with 10+ years in tech strategy. Passionate about empowering startups through innovative software solutions.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      title: "Lead Developer",
      bio: "Full-stack architect specializing in scalable web applications. Expert in React, Node.js, and cloud infrastructure.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      title: "AI/ML Engineer",
      bio: "Data scientist turning complex algorithms into practical business solutions. PhD in Machine Learning from MIT.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    {
      name: "David Kim",
      title: "Head of Design",
      bio: "Award-winning UX/UI designer creating beautiful, intuitive interfaces. Believes design should be both functional and delightful.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    {
      name: "Priya Sharma",
      title: "Mobile Developer",
      bio: "iOS and Android specialist with a track record of building apps used by millions. Loves creating seamless mobile experiences.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
    },
    {
      name: "Alex Thompson",
      title: "DevOps Engineer",
      bio: "Infrastructure expert ensuring our systems are fast, secure, and scalable. Automation enthusiast and cloud architecture guru.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Lisa Wang",
      title: "Project Manager",
      bio: "Agile methodology champion keeping teams aligned and projects on track. Bridge between technical excellence and client vision.",
      image:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    },
    {
      name: "James Martinez",
      title: "QA Lead",
      bio: "Quality assurance specialist with an eye for detail. Ensures every product we ship meets the highest standards of excellence.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#0a1628]">
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
              About{" "}
              <span className="bg-gradient-to-r from-[#3b9aff] to-[#60d5ff] bg-clip-text text-transparent">
                FR Tech Ltd.
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Building the future of technology, one innovation at a time
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-[#0f1f3a] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3b9aff]/50 to-transparent"></div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text Column */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl text-white mb-4">
                  Our Mission
                </h2>
                <div className="w-20 h-1 bg-[#3b9aff]"></div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                At FR Tech Ltd., our mission is to democratize technology by
                making world-class software development accessible to businesses
                of all sizes. We believe that every company, from ambitious
                startups to established enterprises, deserves innovative
                solutions that drive growth and success.
              </p>

              <p className="text-xl text-gray-300 leading-relaxed">
                We're committed to turning complex technical challenges into
                elegant, user-friendly solutions. Through our expertise in web
                development, mobile apps, and artificial intelligence, we
                empower our clients to achieve their vision and stay ahead in an
                ever-evolving digital landscape.
              </p>

              <div className="pt-6 grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#0a1628] to-[#0a1628]/50 border border-white/10 rounded-xl p-6">
                  <div className="text-3xl text-[#3b9aff] mb-2">2018</div>
                  <div className="text-gray-400">Founded</div>
                </div>
                <div className="bg-gradient-to-br from-[#0a1628] to-[#0a1628]/50 border border-white/10 rounded-xl p-6">
                  <div className="text-3xl text-[#3b9aff] mb-2">100%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b9aff]/20 to-transparent rounded-2xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-[#0a1628] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3b9aff]/50 to-transparent"></div>

        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Meet the Team
            </h2>
            <div className="w-20 h-1 bg-[#3b9aff] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The talented individuals behind FR Tech Ltd., dedicated to
              bringing your vision to life
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#0f1f3a] to-[#0f1f3a]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#3b9aff]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#3b9aff]/10"
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3a] via-transparent to-transparent opacity-60"></div>

                  {/* Social Icons - appear on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="w-8 h-8 bg-[#3b9aff]/90 hover:bg-[#3b9aff] rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-[#3b9aff]/90 hover:bg-[#3b9aff] rounded-full flex items-center justify-center transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-[#3b9aff]/90 hover:bg-[#3b9aff] rounded-full flex items-center justify-center transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl text-white mb-1">{member.name}</h3>
                  <p className="text-[#3b9aff] mb-3">{member.title}</p>
                  <p className="text-gray-400 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}

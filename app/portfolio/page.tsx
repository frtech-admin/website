"use client";

import { Header } from "../components/Header";
import { CTA } from "../components/CTA";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
      tags: ["Web App", "E-commerce", "React"],
    },
    {
      title: "AI Chatbot Assistant",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["AI", "Chatbot", "NLP"],
    },
    {
      title: "Mobile Fitness App",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tags: ["Mobile", "iOS", "Android"],
    },
    {
      title: "Learning Management System",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      tags: ["Web App", "Edu-Tech", "React"],
    },
    {
      title: "Data Analytics Dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Web App", "AI", "Analytics"],
    },
    {
      title: "Restaurant Booking App",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Mobile", "Web App", "Booking"],
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
              Our{" "}
              <span className="bg-gradient-to-r from-[#3b9aff] to-[#60d5ff] bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped businesses
              transform their digital presence
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 bg-[#0f1f3a] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3b9aff]/50 to-transparent"></div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#0a1628] to-[#0a1628]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#3b9aff]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#3b9aff]/10"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-[#0a1628]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* View Project Button - appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-[#3b9aff] hover:bg-[#2a89ef] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl text-white mb-4">{project.title}</h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#3b9aff]/10 border border-[#3b9aff]/30 text-[#3b9aff] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State Message */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-br from-[#0a1628] to-[#0a1628]/50 border border-white/10 rounded-2xl p-8 max-w-2xl">
              <div className="w-16 h-16 bg-[#3b9aff]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#3b9aff]"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-2xl text-white mb-3">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We're constantly working on innovative solutions for our
                clients. Check back soon to see more of our latest work, or
                contact us to discuss your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}

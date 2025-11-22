"use client";

import { Header } from "../components/Header";
import { CTA } from "../components/CTA";
import {
  Code2,
  Smartphone,
  ShoppingCart,
  GraduationCap,
  Bot,
  BarChart3,
  Palette,
  Cloud,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description:
        "We build modern, responsive websites tailored to your business needs using the latest technologies like React, Next.js, and Tailwind CSS. Our web solutions are optimized for performance, SEO, and user experience to help you stand out in the digital landscape.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development (iOS & Android)",
      description:
        "From native iOS and Android apps to cross-platform solutions, we create mobile experiences that users love. Our mobile development expertise ensures smooth performance, intuitive interfaces, and seamless integration with your existing systems.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description:
        "Launch and scale your online store with our custom e-commerce solutions. We integrate secure payment gateways, inventory management, and analytics to help you maximize conversions and grow your retail business efficiently.",
    },
    {
      icon: GraduationCap,
      title: "Educational Applications",
      description:
        "Transform learning with our innovative educational technology platforms. We develop interactive learning management systems, virtual classrooms, and student engagement tools that make education accessible and effective for all learners.",
    },
    {
      icon: Bot,
      title: "AI-Powered Chatbots",
      description:
        "Enhance customer support and engagement with intelligent chatbots powered by advanced AI. Our chatbot solutions provide 24/7 assistance, handle complex queries, and learn from interactions to deliver personalized experiences that boost customer satisfaction.",
    },
    {
      icon: BarChart3,
      title: "Data Analysis & ML Models",
      description:
        "Turn your data into actionable insights with our custom machine learning models and analytics solutions. We help you predict trends, automate decision-making, and uncover patterns that drive business growth and competitive advantage.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Create stunning, user-centered designs that captivate and convert. Our design team combines aesthetic excellence with usability principles to craft interfaces that are not only beautiful but also intuitive and accessible across all devices.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Streamline your development and deployment with our cloud infrastructure and DevOps services. We implement scalable cloud solutions, CI/CD pipelines, and automated workflows that ensure your applications are reliable, secure, and ready to grow with your business.",
    },
  ];

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
              What We{" "}
              <span className="bg-linear-to-r from-[#3b9aff] to-[#60d5ff] bg-clip-text text-transparent">
                Do
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive software solutions designed to transform your
              business and drive innovation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-[#0f1f3a] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#3b9aff]/50 to-transparent"></div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-linear-to-br from-[#0a1628] to-[#0a1628]/50 border border-white/10 rounded-2xl p-8 hover:border-[#3b9aff]/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3b9aff]/10"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-linear-to-br from-[#3b9aff]/20 to-[#3b9aff]/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-[#3b9aff]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}

"use client";

import { Header } from "../components/Header";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-gray-300">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-linear-to-br from-[#0a1628] via-[#0f1f3a] to-[#0a1628]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3b9aff]/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#3b9aff]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your privacy matters. Learn how we protect and handle your personal
            information.
          </p>
        </div>
      </section>

      {/* Detailed Content Sections */}
      <section className="container mx-auto px-6 py-20 space-y-12">
        <div className="bg-[#0f1f3a] border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl text-white mb-4">Information We Collect</h2>
          <div className="w-20 h-1 bg-[#3b9aff] mb-4"></div>
          <p className="mb-4">
            We may collect personal information such as your name, email
            address, phone number, and any other information you voluntarily
            provide when contacting us or using our services. We also collect
            technical data like IP addresses, browser type, and usage patterns
            through cookies and analytics tools.
          </p>
        </div>

        <div className="bg-[#0f1f3a] border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl text-white mb-4">
            How We Use Your Information
          </h2>
          <div className="w-20 h-1 bg-[#3b9aff] mb-4"></div>
          <p className="mb-4">
            Your data helps us provide and improve our services, respond to
            inquiries, send product updates, marketing communications (if you
            have opted in), and comply with legal obligations. We may also use
            aggregated data for analytical purposes to enhance our platform.
          </p>
        </div>

        <div className="bg-[#0f1f3a] border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl text-white mb-4">Sharing of Information</h2>
          <div className="w-20 h-1 bg-[#3b9aff] mb-4"></div>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties.
            We may share data with trusted service providers who assist us in
            operating our website, processing payments, or providing customer
            support, provided they agree to keep the information confidential
            and use it solely for the purposes we specify.
          </p>
        </div>

        <div className="bg-[#0f1f3a] border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl text-white mb-4">
            Cookies and Tracking Technologies
          </h2>
          <div className="w-20 h-1 bg-[#3b9aff] mb-4"></div>
          <p className="mb-4">
            Our site uses cookies and similar technologies to enhance user
            experience, analyze traffic, and personalize content. You can manage
            cookie preferences through your browser settings. Disabling cookies
            may affect certain functionalities of the site.
          </p>
        </div>

        <div className="bg-[#0f1f3a] border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl text-white mb-4">
            International Data Transfers
          </h2>
          <div className="w-20 h-1 bg-[#3b9aff] mb-4"></div>
          <p className="mb-4">
            As an international company, we may transfer your data to servers
            located outside your country. We ensure appropriate safeguards are
            in place, such as standard contractual clauses, to protect your
            information.
          </p>
        </div>

        <div className="bg-[#0f1f3a] border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl text-white mb-4">Security</h2>
          <div className="w-20 h-1 bg-[#3b9aff] mb-4"></div>
          <p className="mb-4">
            We implement reasonable technical and organizational measures to
            protect your data against unauthorized access, loss, or alteration.
            However, no method of transmission over the internet is completely
            secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="bg-[#0f1f3a] border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl text-white mb-4">Your Rights</h2>
          <div className="w-20 h-1 bg-[#3b9aff] mb-4"></div>
          <p className="mb-4">
            You have the right to access, correct, or delete your personal data.
            To exercise these rights, please contact us at{" "}
            <a
              href="mailto:frtechltd@gmail.com"
              className="text-[#3b9aff] underline"
            >
              frtechltd@gmail.com
            </a>
            . We will respond within a reasonable timeframe.
          </p>
        </div>

        <div className="bg-[#0f1f3a] border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl text-white mb-4">Retention Period</h2>
          <div className="w-20 h-1 bg-[#3b9aff] mb-4"></div>
          <p className="mb-4">
            We retain personal data only for as long as necessary to fulfill the
            purposes described in this policy, unless a longer retention period
            is required or permitted by law.
          </p>
        </div>

        <div className="bg-[#0f1f3a] border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl text-white mb-4">Changes to This Policy</h2>
          <div className="w-20 h-1 bg-[#3b9aff] mb-4"></div>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. The "Last
            Updated" date below reflects the most recent revision. Continued use
            of the site after changes indicates your acceptance of the updated
            policy.
          </p>
        </div>

        <p className="mt-8 text-sm">
          This policy may be updated from time to time. The "Last Updated" date
          at the bottom indicates the most recent revision.
        </p>
        <p className="mt-4 text-sm">Last Updated: September 2025</p>
      </section>
    </div>
  );
}

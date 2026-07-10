import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Database, Mail } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}

      <section className="bg-[#0B8F7A] py-20 text-white">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <ShieldCheck className="mx-auto mb-6 h-16 w-16" />

          <h1 className="text-5xl font-bold">
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg text-green-100">
            Your privacy matters to us. This policy explains how OnSell
            collects, uses, stores and protects your information.
          </p>

          <p className="mt-4 text-sm text-green-200">
            Effective Date: July 1, 2026
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="rounded-3xl bg-white p-10 shadow-xl space-y-14">

          {/* Intro */}

          <section>

            <h2 className="mb-4 text-3xl font-bold text-[#073B3A]">
              Introduction
            </h2>

            <p className="leading-8 text-gray-600">
              Welcome to OnSell. We are committed to protecting your privacy
              and safeguarding your personal information. This Privacy Policy
              explains how we collect, use, disclose and protect your
              information whenever you use our website, mobile application,
              waitlist, marketplace and related services.
            </p>

          </section>

          {/* Information */}

          <section>

            <div className="flex items-center gap-3">

              <Database className="text-[#0B8F7A]" />

              <h2 className="text-3xl font-bold text-[#073B3A]">
                Information We Collect
              </h2>

            </div>

            <ul className="mt-6 list-disc pl-8 space-y-3 text-gray-600 leading-8">

              <li>Full Name</li>

              <li>Email Address</li>

              <li>Phone Number</li>

              <li>City and Country</li>

              <li>Profile Picture (optional)</li>

              <li>Marketplace Listings</li>

              <li>Feedback and Suggestions</li>

              <li>Device Information</li>

              <li>Browser Information</li>

              <li>Cookies</li>

            </ul>

          </section>

          {/* Usage */}

          <section>

            <h2 className="text-3xl font-bold text-[#073B3A]">
              How We Use Your Information
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-green-50 p-6">

                <h3 className="font-semibold">
                  Improve Our Services
                </h3>

                <p className="mt-3 text-gray-600">
                  To improve OnSell's marketplace, user experience,
                  recommendations and future updates.
                </p>

              </div>

              <div className="rounded-2xl bg-green-50 p-6">

                <h3 className="font-semibold">
                  Customer Support
                </h3>

                <p className="mt-3 text-gray-600">
                  To respond to questions, complaints,
                  bug reports and feedback.
                </p>

              </div>

              <div className="rounded-2xl bg-green-50 p-6">

                <h3 className="font-semibold">
                  Security
                </h3>

                <p className="mt-3 text-gray-600">
                  To detect fraud, unauthorized access
                  and suspicious activities.
                </p>

              </div>

              <div className="rounded-2xl bg-green-50 p-6">

                <h3 className="font-semibold">
                  Communication
                </h3>

                <p className="mt-3 text-gray-600">
                  To send launch announcements,
                  updates and important notices.
                </p>

              </div>

            </div>

          </section>

          {/* Security */}

          <section>

            <div className="flex items-center gap-3">

              <Lock className="text-[#0B8F7A]" />

              <h2 className="text-3xl font-bold text-[#073B3A]">
                Data Security
              </h2>

            </div>

            <p className="mt-6 leading-8 text-gray-600">

              We implement industry-standard security measures including
              encryption, secure cloud storage, authentication systems,
              controlled access and continuous monitoring to help protect
              your information.

            </p>

          </section>

          {/* Rights */}

          <section>

            <h2 className="text-3xl font-bold text-[#073B3A]">
              Your Rights
            </h2>

            <ul className="mt-6 list-disc pl-8 space-y-3 text-gray-600 leading-8">

              <li>Access your personal data</li>

              <li>Correct inaccurate information</li>

              <li>Delete your account</li>

              <li>Request a copy of your information</li>

              <li>Withdraw consent where applicable</li>

            </ul>

          </section>

          {/* Contact */}

          <section>

            <div className="flex items-center gap-3">

              <Mail className="text-[#0B8F7A]" />

              <h2 className="text-3xl font-bold text-[#073B3A]">
                Contact Us
              </h2>

            </div>

            <div className="mt-6 rounded-2xl bg-gray-100 p-8">

              <p className="text-gray-700">

                If you have any questions regarding this Privacy Policy,
                please contact us.

              </p>

              <div className="mt-5 space-y-2">

                <p>
                  <strong>Email:</strong> hello@onsell.ng
                </p>

                <p>
                  <strong>Website:</strong> www.onsell.ng
                </p>

              </div>

            </div>

          </section>

        </div>

        <div className="mt-10 flex justify-center">

          <Link
            to="/"
            className="rounded-xl bg-[#0B8F7A] px-8 py-4 font-semibold text-white transition hover:bg-[#087565]"
          >
            ← Back to Home
          </Link>

        </div>

      </section>

    </div>
  );
}
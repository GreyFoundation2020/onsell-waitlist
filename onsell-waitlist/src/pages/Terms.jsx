import { Link } from "react-router-dom";
import {
  FileText,
  Scale,
  ShoppingBag,
  ShieldAlert,
  Ban,
  Mail,
} from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-[#073B3A] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <FileText className="mx-auto mb-6 h-16 w-16 text-[#F4B400]" />

          <h1 className="text-5xl font-bold">
            Terms of Service
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            These Terms of Service govern your use of OnSell's website,
            mobile application and marketplace services. Please read them
            carefully before using our platform.
          </p>

          <p className="mt-4 text-sm text-gray-300">
            Effective Date: July 1, 2026
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="rounded-3xl bg-white p-10 shadow-xl space-y-14">

          {/* Acceptance */}

          <section>

            <h2 className="text-3xl font-bold text-[#073B3A]">
              1. Acceptance of Terms
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              By accessing or using OnSell, you agree to be bound by these
              Terms of Service and our Privacy Policy. If you do not agree
              with any part of these Terms, you should discontinue using
              our services immediately.
            </p>

          </section>

          {/* Eligibility */}

          <section>

            <div className="flex items-center gap-3">

              <Scale className="text-[#0B8F7A]" />

              <h2 className="text-3xl font-bold text-[#073B3A]">
                2. Eligibility
              </h2>

            </div>

            <p className="mt-5 leading-8 text-gray-600">
              You must be at least 18 years old or the minimum legal age in
              your jurisdiction to create an account and use OnSell.
              By using our platform, you confirm that you meet these
              eligibility requirements.
            </p>

          </section>

          {/* Marketplace */}

          <section>

            <div className="flex items-center gap-3">

              <ShoppingBag className="text-[#0B8F7A]" />

              <h2 className="text-3xl font-bold text-[#073B3A]">
                3. Marketplace Rules
              </h2>

            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-green-50 p-6">

                <h3 className="font-semibold">
                  Buyers
                </h3>

                <ul className="mt-4 space-y-2 text-gray-600">

                  <li>• Provide accurate information.</li>

                  <li>• Respect sellers.</li>

                  <li>• Make payments honestly.</li>

                  <li>• Avoid fraudulent activities.</li>

                </ul>

              </div>

              <div className="rounded-2xl bg-green-50 p-6">

                <h3 className="font-semibold">
                  Sellers
                </h3>

                <ul className="mt-4 space-y-2 text-gray-600">

                  <li>• Upload genuine products.</li>

                  <li>• Use accurate descriptions.</li>

                  <li>• Deliver items as promised.</li>

                  <li>• Respect buyers.</li>

                </ul>

              </div>

            </div>

          </section>

          {/* Prohibited */}

          <section>

            <div className="flex items-center gap-3">

              <Ban className="text-red-500" />

              <h2 className="text-3xl font-bold text-[#073B3A]">
                4. Prohibited Activities
              </h2>

            </div>

            <ul className="mt-6 list-disc pl-8 space-y-3 text-gray-600 leading-8">

              <li>Fraudulent transactions</li>

              <li>Counterfeit products</li>

              <li>Illegal goods</li>

              <li>Hate speech</li>

              <li>Harassment</li>

              <li>Uploading malware or viruses</li>

              <li>Attempting unauthorized access</li>

              <li>Money laundering</li>

              <li>False advertising</li>

              <li>Impersonating another person or business</li>

            </ul>

          </section>

          {/* Intellectual Property */}

          <section>

            <h2 className="text-3xl font-bold text-[#073B3A]">
              5. Intellectual Property
            </h2>

            <p className="mt-5 leading-8 text-gray-600">

              All trademarks, logos, branding, graphics,
              software, website design, text and content
              available on OnSell remain the exclusive property
              of OnSell Technologies Ltd. or its licensors.

              You may not copy, distribute, modify or reproduce
              any content without written permission.

            </p>

          </section>

          {/* Suspension */}

          <section>

            <div className="flex items-center gap-3">

              <ShieldAlert className="text-yellow-500" />

              <h2 className="text-3xl font-bold text-[#073B3A]">
                6. Suspension and Termination
              </h2>

            </div>

            <p className="mt-5 leading-8 text-gray-600">

              OnSell reserves the right to suspend,
              restrict or permanently terminate accounts
              that violate these Terms, engage in fraudulent
              activities or threaten the safety of other users.

            </p>

          </section>

          {/* Disclaimer */}

          <section>

            <h2 className="text-3xl font-bold text-[#073B3A]">
              7. Disclaimer
            </h2>

            <p className="mt-5 leading-8 text-gray-600">

              OnSell provides its services "as is" and
              "as available". While we strive to maintain
              a secure and reliable platform, we cannot
              guarantee uninterrupted availability or that
              all listings, transactions or communications
              will always be error-free.

            </p>

          </section>

          {/* Liability */}

          <section>

            <h2 className="text-3xl font-bold text-[#073B3A]">
              8. Limitation of Liability
            </h2>

            <p className="mt-5 leading-8 text-gray-600">

              To the fullest extent permitted by applicable law,
              OnSell shall not be liable for indirect, incidental,
              consequential or special damages arising from your
              use of the platform, including loss of profits,
              business interruption or data loss.

            </p>

          </section>

          {/* Changes */}

          <section>

            <h2 className="text-3xl font-bold text-[#073B3A]">
              9. Changes to These Terms
            </h2>

            <p className="mt-5 leading-8 text-gray-600">

              We may revise these Terms periodically to reflect
              changes in our services or legal requirements.
              Updated versions will be published on this page,
              and your continued use of OnSell constitutes
              acceptance of those changes.

            </p>

          </section>

          {/* Contact */}

          <section>

            <div className="flex items-center gap-3">

              <Mail className="text-[#0B8F7A]" />

              <h2 className="text-3xl font-bold text-[#073B3A]">
                10. Contact Us
              </h2>

            </div>

            <div className="mt-6 rounded-2xl bg-gray-100 p-8">

              <p className="text-gray-700">

                If you have questions regarding these Terms of
                Service, please contact us.

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

        {/* Back Button */}

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
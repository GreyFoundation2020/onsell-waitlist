import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import FeedbackForm from "./FeedbackForm";

export default function CTA() {
  
  return (
    <SectionWrapper>
    <section className="relative overflow-hidden py-2 px-6 lg:px-8">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B8F7A] via-[#087A69] to-[#064D44]" />

      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#F4B400]/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
              🚀 Early Access
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Join the Future
              <br />
              of Buying &
              <br />
              Selling.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Be among the first users to experience OnSell.
              Receive launch updates, exclusive rewards,
              and priority access when we go live.
            </p>

            {/* Benefits */}

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">

                <CheckCircle2 className="text-[#F4B400]" />

                <p className="text-white">
                  Free Early Access
                </p>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2 className="text-[#F4B400]" />

                <p className="text-white">
                  Exclusive Launch Rewards
                </p>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2 className="text-[#F4B400]" />

                <p className="text-white">
                  Priority Marketplace Access
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

           <FeedbackForm/>
        </div>

      </div>

    </section>
    </SectionWrapper>
  );
}
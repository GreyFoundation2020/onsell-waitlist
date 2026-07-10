import {
  ShieldCheck,
  MessageCircle,
  Search,
  Zap,
  MapPin,
  BadgeCheck,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const features = [
  {
    title: "Secure Marketplace",
    description:
      "Every listing is protected with smart verification and seller reputation.",
    icon: ShieldCheck,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },

  {
    title: "Real-Time Chat",
    description:
      "Talk directly with buyers and sellers before making a deal.",
    icon: MessageCircle,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },

  {
    title: "Smart Search",
    description:
      "Instantly find exactly what you're looking for using intelligent search.",
    icon: Search,
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },

  {
    title: "Lightning Fast",
    description:
      "Optimized for speed so buying and selling feels effortless.",
    icon: Zap,
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },

  {
    title: "Local Discovery",
    description:
      "Find products around you in Calabar, Uyo and nearby cities.",
    icon: MapPin,
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },

  {
    title: "Verified Sellers",
    description:
      "Build trust with verified accounts and transparent seller profiles.",
    icon: BadgeCheck,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export default function Features() {
  return (

    <SectionWrapper>
    <section
      id="features"
      className="py-24 bg-white px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full bg-[#0B8F7A]/10 px-5 py-2 text-sm font-semibold text-[#0B8F7A]">
            Why Choose OnSell?
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#073B3A]">
            Everything You Need
            <br />
            To Buy & Sell Safely
          </h2>

          <p className="mt-6 text-lg text-gray-500">
            Designed with modern technology to make buying and selling
            simple, secure and enjoyable.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-[#0B8F7A] hover:shadow-2xl"
              >

                {/* Icon */}

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
                >

                  <Icon
                    size={34}
                    className={`${feature.iconColor} transition group-hover:scale-110`}
                  />

                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-[#073B3A]">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-gray-500">
                  {feature.description}
                </p>

                {/* Learn More */}

                <button className="mt-8 font-semibold text-[#0B8F7A] transition-all group-hover:translate-x-2">
                  Learn More →
                </button>

              </div>

            );

          })}

        </div>

      </div>
      
    </section>
    </SectionWrapper>
  );
}
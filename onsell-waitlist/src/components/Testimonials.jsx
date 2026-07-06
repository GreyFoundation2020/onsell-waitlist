import { Star } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Daniel E.",
    location: "Calabar",
    image: "/users/user1.jpg",
    quote:
      "I've been waiting for a marketplace built specifically for our city. OnSell looks clean, modern and exactly what we need.",
  },
  {
    name: "Grace A.",
    location: "Uyo",
    image: "/users/user2.jpg",
    quote:
      "The design alone makes me excited. I can't wait to start selling my unused items on OnSell.",
  },
  {
    name: "Michael O.",
    location: "Calabar",
    image: "/users/user3.jpg",
    quote:
      "Buying and selling locally should be simple. Looking forward to the official launch!",
  },
];

export default function Testimonials() {
  return (
<SectionWrapper>
    <section
      id="testimonials"
      className="bg-[#F9FCFB] py-24 px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#0B8F7A]/10 px-5 py-2 text-sm font-semibold text-[#0B8F7A]">
            Community Feedback
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#073B3A] md:text-5xl">
            What Early Members Are Saying
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            People are already excited about OnSell and can't wait for launch.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Rating */}
              <div className="mb-6 flex gap-1">

                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-[#F4B400] text-[#F4B400]"
                  />
                ))}

              </div>

              {/* Quote */}
              <p className="leading-8 text-gray-600 italic">
                "{item.quote}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover border-2 border-[#0B8F7A]/20"
                />

                <div>

                  <h4 className="font-bold text-[#073B3A]">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    Early Access Member • {item.location}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
 </SectionWrapper>
  );
}
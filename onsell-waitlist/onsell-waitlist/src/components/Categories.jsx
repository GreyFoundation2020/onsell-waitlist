import {
  Smartphone,
  Sofa,
  Car,
  Shirt,
  Laptop,
  Home,
  Briefcase,
  Bike,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const categories = [
  {
    title: "Electronics",
    icon: Smartphone,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    items: "320+ Listings",
  },
  {
    title: "Furniture",
    icon: Sofa,
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    items: "150+ Listings",
  },
  {
    title: "Vehicles",
    icon: Car,
    color: "bg-red-50",
    iconColor: "text-red-600",
    items: "85+ Listings",
  },
  {
    title: "Fashion",
    icon: Shirt,
    color: "bg-pink-50",
    iconColor: "text-pink-600",
    items: "420+ Listings",
  },
  {
    title: "Computers",
    icon: Laptop,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    items: "180+ Listings",
  },
  {
    title: "Property",
    icon: Home,
    color: "bg-green-50",
    iconColor: "text-green-600",
    items: "70+ Listings",
  },
  {
    title: "Jobs",
    icon: Briefcase,
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
    items: "95+ Listings",
  },
  {
    title: "Motorcycles",
    icon: Bike,
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
    items: "40+ Listings",
  },
];

export default function Categories() {
  return (
    <SectionWrapper>
    <section
      id="categories"
      className="bg-[#F9FCFB] py-24 px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-[#0B8F7A]/10 px-4 py-2 text-sm font-semibold text-[#0B8F7A]">
            Browse Categories
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#073B3A] md:text-5xl">
            Everything You Need
            <br />
            In One Marketplace
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            Discover thousands of items across multiple categories.
            Buy and sell locally with confidence.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category, index) => {

            const Icon = category.icon;

            return (

              <div
                key={index}
                className="group cursor-pointer rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${category.color}`}
                >

                  <Icon
                    className={`${category.iconColor}`}
                    size={34}
                  />

                </div>

                <h3 className="text-2xl font-bold text-[#073B3A]">
                  {category.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {category.items}
                </p>

                <button
                  className="mt-6 text-[#0B8F7A] font-semibold transition group-hover:translate-x-2"
                >
                  Explore →
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
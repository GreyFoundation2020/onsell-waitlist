import { Users, ShoppingBag, MapPin, ShieldCheck } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CountUp from "react-countup";

const stats = [
  {
    icon: Users,
    number: "5,000+",
    title: "Early Waitlist",
    description: "People already interested in OnSell",
  },
  {
    icon: ShoppingBag,
    number: "1,200+",
    title: "Items Ready",
    description: "Products expected at launch",
  },
  {
    icon: MapPin,
    number: "2",
    title: "Launch Cities",
    description: "Calabar & Uyo",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    title: "Secure Trading",
    description: "Safe & trusted marketplace",
  },
];

export default function Stats() {
  return (
<SectionWrapper>
    <section className="relative -mt-10 z-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 rounded-3xl bg-white p-8 shadow-2xl md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#0B8F7A] hover:shadow-xl"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B8F7A]/10 transition group-hover:bg-[#0B8F7A]">

                  <Icon
                    size={30}
                    className="text-[#0B8F7A] group-hover:text-white"
                  />

                </div>

            <h2 className="text-4xl font-extrabold text-[#073B3A]">
                  {item.number}

                  +
                </h2> 
                {/* <h2 className="text-5xl font-bold text-[#0B8F7A]">
                 <CountUp
                   end={5000}
                    duration={3}
                    separator=","
                      />
                      +
                </h2> */}

                <h3 className="mt-2 text-xl font-bold text-[#073B3A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section> 
 </SectionWrapper> 
  );
}
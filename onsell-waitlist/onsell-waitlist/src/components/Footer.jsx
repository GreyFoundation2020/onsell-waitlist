 import {

   Mail,
  Phone,
 MapPin,
  ChevronRight,
 } from "lucide-react";
import { FaFacebook,FaTwitterSquare,FaLinkedin} from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <SectionWrapper>
    <footer className="relative overflow-hidden bg-[#073B3A] text-white">

      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#F4B400] blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#0B8F7A] blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src="/logo.png"
                alt="OnSell"
                className="h-14 w-14"
              />

              <div>

                <h2 className="text-3xl font-bold">
                  On<span className="text-[#F4B400]">Sell</span>
                </h2>

                <p className="text-sm text-white/70">
                  Buy • Sell • Save
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-white/70">
              OnSell is building Nigeria's trusted marketplace for
              buying and selling new and fairly used items.
              Join our waitlist and be among the first to experience
              a smarter local marketplace.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                "Home",
                "Features",
                "Categories",
                "Testimonials",
                "FAQs",
                "Join Waitlist",
              ].map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="flex items-center gap-2 text-white/70 transition hover:text-[#F4B400]"
                  >

                    <ChevronRight size={18} />

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Mail className="text-[#F4B400]" />

                <span className="text-white/70">
                  hello@onsell.ng
                </span>

              </div>

              <div className="flex gap-3">

                <Phone className="text-[#F4B400]" />

                <span className="text-white/70">
                  +234 XXX XXX XXXX
                </span>

              </div>

              <div className="flex gap-3">

                <MapPin className="text-[#F4B400]" />

                <span className="text-white/70">
                  Calabar, Nigeria
                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Stay Connected
            </h3>

            <p className="mb-8 text-white/70">
              Follow OnSell for updates,
              launch announcements and exclusive news.
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="rounded-xl bg-white/10 p-4 transition hover:bg-[#0B8F7A]"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="rounded-xl bg-white/10 p-4 transition hover:bg-[#0B8F7A]"
              >
                Insta
              </a>

              <a
                href="#"
                className="rounded-xl bg-white/10 p-4 transition hover:bg-[#0B8F7A]"
              >
                <FaTwitterSquare />
              </a>

              <a
                href="#"
                className="rounded-xl bg-white/10 p-4 transition hover:bg-[#0B8F7A]"
              >
               <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 border-t border-white/10"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-center text-white/60">
            © {new Date().getFullYear()} OnSell. All rights reserved.
          </p>

          <div className="flex gap-8 text-white/60">
            <Link to ="/privacy"> Privacy Policy </Link>
            <Link to="/terms">Terms of Service</Link> 
             <button onClick={() => setCookieModalOpen(true)}>
               Cookie Policy
             </button>
          </div>

        </div>

      </div>

    </footer>
    </SectionWrapper>
  );
}
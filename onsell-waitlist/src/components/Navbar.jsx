
import { useState,useEffect} from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled,setScrolled]=useState(false);

useEffect(()=>{

const handleScroll=()=>{

setScrolled(window.scrollY>40);

}

window.addEventListener("scroll",handleScroll);

return()=>window.removeEventListener("scroll",handleScroll);

},[]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About Us", href: "#about" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

       
        <a href="#" className="flex items-center gap-3"> 
          {/* <img
            src="/logo.png"
            alt="OnSell"
            className="h-12 w-12 object-contain"
          /> */}

          <div>
            <h2 className="text-2xl font-bold text-[#0B8F7A]">
              On<span className="text-[#F4B400]">Sell</span>
            </h2>

            <p className="text-xs text-gray-500">
              Buy • Sell • Save
            </p>
          </div>
        </a>

       
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-[#0B8F7A]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        
        <button className="hidden rounded-xl bg-[#0B8F7A] px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#097665] lg:block">
        <a href="https://wa.me/message/FZA47TULYAHXD1">WhatsApp Chat</a>
        </button>

        
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      
      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="space-y-5 px-6 py-6">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-lg font-medium text-gray-700"
              >
                {item.name}
              </a>
            ))}

            <button className="w-full rounded-xl bg-[#0B8F7A] py-3 font-semibold text-white">
              <a href="http://www.google.com">WhatsApp</a>
            </button>

          </div>
        </div>
      )}
    </header>
  );
}
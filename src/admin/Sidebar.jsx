import {
  LayoutDashboard,
  Users,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

async function logout() {

  await signOut(auth);

  navigate("/admin/login");

}

  const menus = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
    },
    {
      title: "Waitlist",
      icon: Users,
      href: "/admin/waitlist",
    },
    {
      title: "Feedback",
      icon: MessageSquare,
      href: "/admin/feedback",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      href: "/admin/analytics",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/admin/settings",
    },
  ];

  return (
    <>
      {/* Mobile Toggle */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed left-4 top-4 z-50 rounded-xl bg-[#0B8F7A] p-3 text-white lg:hidden"
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 bg-[#073B3A] text-white transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Logo */}

        <div className="flex items-center gap-3 border-b border-white/10 p-6">

          <img
            src="/logo.png"
            alt="OnSell"
            className="h-12 w-12"
          />

          <div>

            <h2 className="text-2xl font-bold">
              On<span className="text-[#F4B400]">Sell</span>
            </h2>

            <p className="text-xs text-gray-300">
              Admin Dashboard
            </p>

          </div>

        </div>

        {/* Menu */}

        <nav className="mt-8 px-4">

          {menus.map((item, index) => {

            const Icon = item.icon;

            return (

              <a
                key={index}
                href={item.href}
                className="mb-3 flex items-center gap-4 rounded-xl px-4 py-3 text-gray-300 transition hover:bg-[#0B8F7A] hover:text-white"
              >
                <Icon size={20} />

                {item.title}

              </a>

            );

          })}

        </nav>

        {/* Logout */}

        <div className="absolute bottom-0 w-full border-t border-white/10 p-4">

          <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-300 transition hover:bg-red-600 hover:text-white"
          >

          <LogOut size={20}/>

          Logout

          </button>

        </div>

      </aside>
    </>
  );
}
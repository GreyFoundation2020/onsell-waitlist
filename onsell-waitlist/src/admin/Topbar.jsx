import { Search, Bell, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Topbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();

    setCurrentDate(
      today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">

      {/* Left */}

      <div>

        <h2 className="text-2xl font-bold text-[#073B3A]">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          {currentDate}
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="hidden items-center rounded-xl border bg-gray-50 px-4 py-2 md:flex">

          <Search
            className="text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-52 bg-transparent outline-none"
          />

        </div>

        {/* Dark Mode */}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-xl border p-3 transition hover:bg-gray-100"
        >
          {darkMode ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>

        {/* Notifications */}

        <button className="relative rounded-xl border p-3 transition hover:bg-gray-100">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 rounded-xl border px-3 py-2">

          <img
            src="/profile.jpg"
            alt="Admin"
            className="h-11 w-11 rounded-full object-cover"
          />

          <div className="hidden md:block">

            <h4 className="font-semibold text-[#073B3A]">
              Gregory
            </h4>

            <p className="text-xs text-gray-500">
              Super Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}
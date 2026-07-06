// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../firebase/firebase";
// import { useState } from "react";
// import { FaAirbnb, FaBicycle } from "react-icons/fa";

// export default function Hero() {
//   const [email, setEmail] = useState("");

//   const submitEmail = async () => {
//     if (!email) return;

//     await addDoc(collection(db, "waitlist"), {
//       email,
//       createdAt: new Date(),
//     });

//     alert("Welcome to OnSell Waitlist!");
//     setEmail("");
//   };

//   return (
 
//  <section className="min-h-screen flex flex-row justify-evenly items-center  px-5 bg-slate-50">
//      <div className="flex flex-col items-start px-5">
//        <span className="bg-yellow-400 text-white px-5 py-2 rounded-full">
//         Coming Soon
//       </span>

//       <h1 className="text-6xl font-bold text-center mt-6">
//       Buy. Sell. Safe.
//       <br />
//         <span className="text-green-600" >OnSell Is The Way.</span>
//       </h1>

//       <p className="text-gray-600 mt-6 text-left max-w-xl">
//         OnSell is Calabar's first dedicated marketplace
//         for buying and selling used items easily,
//         safely and locally. Great deals are closer than you think.
//       </p>

//       <div className="flex mt-10 ">
//         <input
//           placeholder="Enter your email Address"
//           className=" p-4 rounded-l-lg shadow-lg w-80"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <button
//           onClick={submitEmail}
//           className="bg-green-800 shadow-lg px-8 rounded-r-lg text-white"
//         >
//           Join Waitlist  
//         </button>
//        </div>
//        <div className="flex flex-row justify-between col-6 mt-8 items-center">
//           <div className="flex flex-row  justify-center items-center ">
//             <div className="flex h-[40px] w-[60px]">
//             <img   className="rounded-full border-3 border-green-200 shadow-lg" src="/users/user1.jpg" />
//             <img   className="rounded-full border-3 border-green-200 shadow-lg" src="/users/user2.jpg" />
//             <img   className="rounded-full border-3 border-green-200 shadow-lg"src="/users/user3.jpg" />
//             <img   className="rounded-full border-3 border-green-200 shadow-lg"src="/users/user4.jpg" />

//           </div>
//           <p className="pl-16">
//             Join <span className=" text-green-600" >5,000+</span> early users on the waitlist
//           </p>

//          </div>
//           </div>
          
//         <div className="flex mt-8 gap-3 ites-center justify-between">

//           <span className="align-center pt-4 "> Coming soon to</span>

//           <div className=" flex bg-slate-70 p-4 items-center gap-2 rounded-l-lg shadow-lg w-30">
//             <FaAirbnb className="bg-green-100"/> Calabar
//           </div>
//           <div className="flex gap-4 items-center bg-slate-70 p-4 rounded-l-lg shadow-lg w-30">
//             <FaBicycle/> Uyo </div>
//         </div>
//         </div>
//        <div className="hero-right">
//         <div className="yellow-circle"></div>
//         <img
//           src="/mockup1.jpg"
//           alt="OnSell App"
//           className="w-100"
//         />
//         </div>
// </section>
//   );
// }

import { ArrowRight, MapPin, Users } from "lucide-react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase"; 
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import CountUp from "react-countup";
import toast from "react-hot-toast";
import {motion} from "framer-motion";

export default function Hero() {
const [email, setEmail] = useState("");
const [loading,setLoading]=useState(false);

  const submitEmail = async () => {
    if (!email) return;
    setLoading(true);
    await addDoc(collection(db, "waitlist"), {
     email,
     createdAt: new Date(),
   });

    toast.success("Successfully Joined");
    toast.eerror("'Someething went wrong");
    setLoading(false);
    if (result.success)
    setEmail("");
};
  return (
    <SectionWrapper>
    <section className="relative overflow-hidden bg-[#F9FCFB] pt-32 pb-20">
      {/* Background Decorations */}
      <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-[#F4B400]/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#0B8F7A]/10 blur-3xl"></div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:px-8">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">

          <span className="inline-flex items-center rounded-full bg-[#F4B400] px-4 py-2 text-sm font-semibold text-white shadow-lg">
            🚀 COMING SOON
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-[#073B3A] md:text-6xl lg:text-7xl">
            Buy. Sell.
            <span className="text-[#0B8F7A]">Save.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Nigeria's next trusted marketplace for buying and selling used
            items. Join thousands of early users and be the first to experience
            OnSell.
          </p>

          {/* Waitlist Form */}
          <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-white p-3 shadow-xl sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email Address"
              className="flex-1 rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-              [#0B8F7A]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <motion.button 
            whileHover={{
              scale:1.05
            }}
            whileTap={{
              scale:95
            }}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#0B8F7A] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#087767]"  onClick={submitEmail}>
             {loading?"Joining" :"Join Waitlist"} 
              <ArrowRight size={18} />
            </motion.button>

          </div>

          {/* Social Proof */}
          <div className="mt-10 flex flex-wrap items-center gap-8">

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">

                <img
                  src="https://i.pravatar.cc/60?img=1"
                  className="h-11 w-11 rounded-full border-2 border-white"
                />

                <img
                  src="https://i.pravatar.cc/60?img=2"
                  className="h-11 w-11 rounded-full border-2 border-white"
                />

                <img
                  src="https://i.pravatar.cc/60?img=3"
                  className="h-11 w-11 rounded-full border-2 border-white"
                />

                <img
                  src="https://i.pravatar.cc/60?img=4"
                  className="h-11 w-11 rounded-full border-2 border-white"
                />

              </div>

              <div>
                <p className="font-bold text-[#073B3A]">
                  1,100+
                </p>

                <p className="text-sm text-gray-500">
                  Joined Waitlist
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-600">

              <MapPin className="text-[#0B8F7A]" />

              <span>
                Launching in <strong>Calabar</strong> &amp; <strong>Uyo</strong>
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex w-full justify-center lg:w-1/2">

          {/* Yellow Circle */}
          <div className="absolute top-20 h-80 w-80 rounded-full bg-[#F4B400] opacity-25 blur-xl"></div>

          {/* Main Phone Mockup */}
          <div className="relative z-20">

            <motion.img
            animate={{
              y:[0,-15,0]
            }}
            transition={{
              duration:4,
              repeat:Infinity,
              ease:"linear"
            }}
              src="/mockup1.png"
              alt="OnSell App"
              className="w-[300px] drop-shadow-2xl md:w-[380px]"
            />

          </div>

          {/* Floating Card 1 */}
          <div className="absolute me-8 left-[-16px] top-12 hidden rounded-2xl bg-white  p-4 shadow-2xl md:block">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-[#0B8F7A]/10  p-3">
                <Users className="text-[#0B8F7A] " />
              </div>

              <div>

                <p className="font-bold">
                  250+
                </p>

                <p className="text-sm text-gray-500">
                  Early Members
                </p>

              </div>

            </div>

          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-10 right-[-15px] hidden rounded-2xl bg-white p-4 shadow-2xl md:block">

            <p className="font-semibold text-[#073B3A]">
              ⭐ Trusted Marketplace
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Safe buying & selling
            </p>

          </div>

        </div>

      </div>
    </section>
    </SectionWrapper>
  );
}
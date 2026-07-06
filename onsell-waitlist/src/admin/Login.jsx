import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  async function login() {

    try {

      setLoading(true);

      const result = await signInWithPopup(
        auth,
        provider
      );

      const email = result.user.email;

      const allowedAdmins = [
        "gregoryudofa@gmail.com",
        "hello@onsell.ng",
      ];

      if (!allowedAdmins.includes(email)) {

        alert("Access Denied");

        await auth.signOut();

        return;

      }

      navigate("/admin");

    } catch (error) {

      console.log(error);

      alert(error.message);

    }

    setLoading(false);

  }

  return (

    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC]">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

        <img
          src="/logo.png"
          className="mx-auto h-24"
        />

        <h1 className="mt-6 text-center text-3xl font-bold">

          OnSell Admin

        </h1>

        <p className="mt-3 text-center text-gray-500">

          Login to continue

        </p>

        <button

          onClick={login}

          disabled={loading}

          className="mt-10 w-full rounded-xl bg-[#0B8F7A] py-4 text-lg font-semibold text-white transition hover:bg-[#087565]"

        >

          {loading
            ? "Signing In..."
            : "Continue with Google"}

        </button>

      </div>

    </div>

  );

}
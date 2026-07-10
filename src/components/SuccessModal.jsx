import { CheckCircle2, X } from "lucide-react";

export default function SuccessModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl animate-[fadeIn_.3s_ease]">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-[#073B3A]">
          Thank You!
        </h2>

        <p className="mt-4 leading-7 text-gray-600">
          Your feedback has been received successfully.
          <br /><br />
          We appreciate your suggestions and will review them carefully.
        </p>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-xl bg-[#0B8F7A] py-3 font-semibold text-white transition hover:bg-[#087565]"
        >
          Continue
        </button>

      </div>
    </div>
  );
}
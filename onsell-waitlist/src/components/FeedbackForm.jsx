import { useState } from "react";
import { Send } from "lucide-react";
import toast from "react-hot-toast";
import { sendFeedback } from "../utils/sendFeedback";
import SuccessModal from "./SuccessModal";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
  });
const [success,setSuccess]=useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please complete all required fields.");
      return;
    }

    setLoading(true);

    try {
      await sendFeedback(formData);

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  return (
    <section className="py-4 bg-[#F9FCFB]">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-4xl font-bold text-center text-[#073B3A]">
          Help Us Build OnSell
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Share your ideas, suggestions or report something.
        </p>

        <form
          className="mt-10 space-y-5"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          />

          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          />

          <input
            name="subject"
            placeholder="Subject *"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your feedback or suggestion..."
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          />

          <button
            disabled={loading}
            className="w-full bg-[#0B8F7A] text-white py-4 rounded-xl font-semibold hover:bg-[#087565] transition flex items-center justify-center gap-2"
          >
            {loading ? "Submitting..." : "Submit Feedback"}

            <Send size={18} />
          </button>
        </form>
      </div>
    <SuccessModal
    open={success}
    onClose={()=> setSuccess(false)}
     />
    </section>
     
  );
}
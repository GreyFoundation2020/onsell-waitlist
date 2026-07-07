import { useEffect, useMemo, useState } from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  updateDoc,
  getDocs
} from "firebase/firestore";
import {
  Search,
  Trash2,
  MessageSquare,
  Eye,
} from "lucide-react";
import { db } from "../firebase/firebase";

export default function FeedbackTable() {
  const [feedback, setFeedback] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "feedback"),
      (snapshot) => {
        const data = snapshot.docs.map((docItem) => ({
          id: docItem.id,
          ...docItem.data(),
        }));

        setFeedback(data);
      }
    );

    return () => unsubscribe();
  }, []);

  const filteredFeedback = useMemo(() => {
    return feedback.filter((item) => {
      const q = search.toLowerCase();

      return (
        (item.name || "").toLowerCase().includes(q) ||
        (item.email || "").toLowerCase().includes(q) ||
        (item.subject || "").toLowerCase().includes(q)
      );
    });
  }, [feedback, search]);

  async function deleteFeedback(id) {
    if (!window.confirm("Delete this feedback?")) return;

    await deleteDoc(doc(db, "feedback", id));
  }

  async function changeStatus(id, status) {
    await updateDoc(doc(db, "feedback", id), {
      status,
    });
  }

  return (
    <div className="mt-10 rounded-3xl bg-white p-6 shadow-lg">

      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">

        <div className="flex items-center gap-3">

          <MessageSquare className="text-[#0B8F7A]" />

          <h2 className="text-2xl font-bold text-[#073B3A]">
            User Feedback
          </h2>

        </div>

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none md:w-80"
          />

        </div>

      </div>

      <div className="mt-6 overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">Name</th>

              <th className="text-left">Subject</th>

              <th className="text-left">Status</th>

              <th className="text-left">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredFeedback.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-4">

                  <div>

                    <h4 className="font-semibold">
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {item.email}
                    </p>

                  </div>

                </td>

                <td>{item.subject}</td>

                <td>

                  <select
                    value={item.status || "new"}
                    onChange={(e) =>
                      changeStatus(item.id, e.target.value)
                    }
                    className="rounded-lg border p-2"
                  >
                    <option value="new">New</option>

                    <option value="reviewed">
                      Reviewed
                    </option>

                    <option value="resolved">
                      Resolved
                    </option>

                  </select>

                </td>

                <td>

                  <div className="flex gap-2">

                    <button
                      onClick={() => setSelected(item)}
                      className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() =>
                        deleteFeedback(item.id)
                      }
                      className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-xl rounded-3xl bg-white p-8">

            <h2 className="text-2xl font-bold text-[#073B3A]">
              {selected.subject}
            </h2>

            <div className="mt-6 space-y-2">

              <p>
                <strong>Name:</strong> {selected.name}
              </p>

              <p>
                <strong>Email:</strong> {selected.email}
              </p>

              <p>
                <strong>Phone:</strong> {selected.phone}
              </p>

              <p>
                <strong>City:</strong> {selected.city}
              </p>

            </div>

            <div className="mt-6 rounded-xl bg-gray-100 p-5">

              {selected.message}

            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-8 w-full rounded-xl bg-[#0B8F7A] py-3 font-semibold text-white"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}
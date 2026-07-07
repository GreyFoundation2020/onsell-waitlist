import { useEffect, useMemo, useState } from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Search, Trash2, Users } from "lucide-react";
import { db } from "../firebase/firebase";

export default function WaitlistTable() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "waitlist"),
      (snapshot) => {
        const data = snapshot.docs.map((docItem) => ({
          id: docItem.id,
          ...docItem.data(),
        }));

        setUsers(data);
      }
    );

    return () => unsubscribe();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const query = search.toLowerCase();

      return (
        (user.name || "").toLowerCase().includes(query) ||
        (user.email || "").toLowerCase().includes(query) ||
        (user.phone || "").toLowerCase().includes(query) ||
        (user.city || "").toLowerCase().includes(query)
      );
    });
  }, [users, search]);

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Delete this user from the waitlist?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "waitlist", id));
    } catch (error) {
      console.error(error);
      alert("Unable to delete user.");
    }
  }

  return (
    <div className="mt-10 rounded-3xl bg-white p-6 shadow-lg">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3">

          <Users className="text-[#0B8F7A]" />

          <h2 className="text-2xl font-bold text-[#073B3A]">
            Waitlist Users
          </h2>

        </div>

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-[#0B8F7A] md:w-80"
          />

        </div>

      </div>

      {/* Table */}

      <div className="mt-6 overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">Name</th>

              <th className="py-3 text-left">Email</th>

              <th className="py-3 text-left">Phone</th>

              <th className="py-3 text-left">City</th>

              <th className="py-3 text-left">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  className="py-10 text-center text-gray-500"
                >
                  No users found.
                </td>

              </tr>

            ) : (

              filteredUsers.map((user) => (

                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="py-4">{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.phone || "-"}</td>

                  <td>{user.city || "-"}</td>

                  <td>

                    <button
                      onClick={() => handleDelete(user.id)}
                      className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                    >
                      <Trash2 size={18} />
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}
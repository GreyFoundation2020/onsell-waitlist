import {
  Users,
  MessageSquare,
  UserPlus,
  TrendingUp,
} from "lucide-react";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";

export default function StatsCards() {
  const [stats, setStats] = useState({
    waitlist: 0,
    feedback: 0,
    today: 0,
    growth: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    try {
      const waitlistSnapshot = await getDocs(
        collection(db, "waitlist")
      );

      const feedbackSnapshot = await getDocs(
        collection(db, "feedback")
      );

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const todayUsers = waitlistSnapshot.docs.filter((doc) => {
        const data = doc.data();

        if (!data.createdAt) return false;

        const date = data.createdAt.toDate();

        return date >= today;
      });

      setStats({
        waitlist: waitlistSnapshot.size,
        feedback: feedbackSnapshot.size,
        today: todayUsers.length,
        growth: 18.5,
      });

    } catch (error) {
      console.error(error);
    }
  }

  const cards = [
    {
      title: "Total Waitlist",
      value: stats.waitlist,
      icon: Users,
      color: "bg-blue-500",
    },

    {
      title: "Feedback",
      value: stats.feedback,
      icon: MessageSquare,
      color: "bg-green-500",
    },

    {
      title: "Today's Signups",
      value: stats.today,
      icon: UserPlus,
      color: "bg-yellow-500",
    },

    {
      title: "Growth",
      value: `${stats.growth}%`,
      icon: TrendingUp,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card, index) => {

        const Icon = card.icon;

        return (

          <div
            key={index}
            className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-[#073B3A]">
                  {card.value}
                </h2>

              </div>

              <div
                className={`rounded-2xl ${card.color} p-4`}
              >
                <Icon
                  className="text-white"
                  size={28}
                />
              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}
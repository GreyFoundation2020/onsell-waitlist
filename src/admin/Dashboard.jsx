import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatsCards from "./StatsCards";
import WaitlistTable from "./WaitlistTable";
import FeedbackTable from "./FeedbackTable";
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">

        <Topbar />

        <main className="p-6">

          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#073B3A]">
              Welcome, Gregory 👋
            </h1>

            <p className="text-gray-500 mt-2">
              Here's what's happening on OnSell today.
            </p>
          </div>

          {/* Statistics */}
          <StatsCards />

          {/* Waitlist */}
          <div className="mt-10">
            <WaitlistTable />
          </div>

          {/* Feedback */}
          <div className="mt-10">
            <FeedbackTable />
          </div>

        </main>

      </div>

    </div>
  );
}
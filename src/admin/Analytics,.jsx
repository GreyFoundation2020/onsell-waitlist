import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Analytics() {

  const data = {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],
    datasets: [
      {
        label: "New Waitlist Users",
        data: [14, 21, 32, 25, 41, 18, 29],
      },
    ],
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="mb-8 text-3xl font-bold">
        Analytics
      </h2>

      <Bar data={data} />

    </div>
  );
}
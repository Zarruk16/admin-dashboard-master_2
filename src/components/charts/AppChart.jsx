import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

export default function AppChart({ options = {}, width, ...props }) {
  return (
    <Chart
      options={{
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        // responsive: true,
        tension: 0.3,
        plugins: {
          legend: {
            display: false,
          },
        },
        aspectRatio: 2.7,
      }}
      {...props}
    />
  );
}

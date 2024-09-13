import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Excellent", "Good", "Average", "Poor"],
    datasets: [
      {
        label: "Hide number of Satisfied Customers",
        data: [120, 90, 50, 10],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Excellent
          "rgba(54, 162, 235, 0.6)", // Good
          "rgba(255, 206, 86, 0.6)", // Average
          "rgba(255, 99, 132, 0.6)", // Poor
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.chartInstance?.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-8 px-4 md:px-10  rounded-xl shadow-lg w-full">
      <h2 className="text-3xl font-bold mb-5 text-center">
        Customer Satisfaction Levels
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Feedback from customers based on their experience with our coffee
        quality.
      </p>
      <div className="w-full md:w-3/4 lg:w-2/4">
        <Bar
          ref={chartRef}
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: { color: "#000" },
              },
              x: {
                ticks: { color: "#000" },
              },
            },
            plugins: {
              legend: { position: "top", labels: { color: "#000" } },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) =>
                    `Number of customers: ${tooltipItem.raw}`,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Charts;

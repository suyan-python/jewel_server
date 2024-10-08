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
        label: "Customer Feedback",
        data: [120, 90, 50, 10],
        backgroundColor: [
          "rgba(75, 192, 192, 0.8)", // Excellent
          "rgba(54, 162, 235, 0.8)", // Good
          "rgba(255, 206, 86, 0.8)", // Average
          "rgba(255, 99, 132, 0.8)", // Poor
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#4B5563", // Neutral dark gray
          font: {
            size: 14,
            family: "Arial, sans-serif",
          },
        },
        grid: {
          color: "#E5E7EB", // Lighter grid lines
        },
      },
      x: {
        ticks: {
          color: "#4B5563", // Neutral dark gray
          font: {
            size: 14,
            family: "Arial, sans-serif",
          },
        },
        grid: {
          display: false, // Hide grid lines for x-axis
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#374151", // Darker gray for legend text
          font: {
            size: 16,
            family: "Arial, sans-serif",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.dataset.label || "";
            const value = tooltipItem.raw || 0;
            return `${label}: ${value} customers`;
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        borderColor: "#4B5563",
        borderWidth: 1,
      },
    },
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
    <div className="flex flex-col justify-center items-center py-8 px-4 md:px-10 bg-white rounded-xl shadow-lg w-full">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Customer Satisfaction Levels
      </h2>
      <p className="text-gray-600 mb-8 text-center text-lg">
        Our customers share their experience with the quality of our coffee.
      </p>
      <div className="w-full md:w-3/4 lg:w-2/4 h-[400px] md:h-[450px]">
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default Charts;

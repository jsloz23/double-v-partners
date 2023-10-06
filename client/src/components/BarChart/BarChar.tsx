/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const BarChart = ({ value }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Reference to the Chart instance

  const initializeChart = () => {
    if (!chartRef.current) return;

    // Destroy the previous chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a simple data array with the given value
    const data = [value];

    chartInstance.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['Followers'],
        datasets: [
          {
            label: 'Number of followers',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: value + 10, // Set a maximum value for the y-axis
          }
        }
      }
    });
  };

  useEffect(() => {
    initializeChart();

    // Cleanup: Destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [value]);

  return (
    <div>
      <h2>Bar Chart</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

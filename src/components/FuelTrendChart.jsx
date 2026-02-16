import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const FuelTrendChart = () => {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [
            {
                label: 'Fuel Efficiency (kmpl)',
                data: [62, 65, 68, 72, 75, 78],
                borderColor: 'rgba(56, 189, 248, 1)',
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;
                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, 'rgba(56, 189, 248, 0)');
                    gradient.addColorStop(1, 'rgba(56, 189, 248, 0.4)');
                    return gradient;
                },
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(56, 189, 248, 1)',
                pointBorderColor: '#0b1220',
                pointBorderWidth: 2,
                pointHoverRadius: 7,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: 'rgba(31, 41, 55, 0.95)',
                titleColor: '#f9fafb',
                bodyColor: '#f9fafb',
                padding: 12,
                borderColor: 'rgba(56, 189, 248, 0.3)',
                borderWidth: 1,
                callbacks: {
                    label: (context) => `${context.parsed.y} kmpl`,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 60,
                max: 80,
                ticks: {
                    color: '#9ca3af',
                    callback: (value) => `${value} kmpl`,
                },
                grid: {
                    color: 'rgba(156, 163, 175, 0.1)',
                },
            },
            x: {
                ticks: {
                    color: '#9ca3af',
                },
                grid: {
                    color: 'rgba(156, 163, 175, 0.1)',
                },
            },
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart',
        },
    };

    return (
        <div className="chart-card">
            <h3 className="chart-title">📈 Fuel Saving Trend</h3>
            <div className="chart-container">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default FuelTrendChart;

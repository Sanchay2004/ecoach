import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const EmissionChart = () => {
    const data = {
        labels: ['CO₂', 'HC', 'NOₓ', 'CO'],
        datasets: [
            {
                label: 'Baseline',
                data: [120, 85, 65, 95],
                backgroundColor: 'rgba(239, 68, 68, 0.8)',
                borderColor: 'rgba(239, 68, 68, 1)',
                borderWidth: 2,
            },
            {
                label: 'Optimized',
                data: [75, 52, 38, 55],
                backgroundColor: 'rgba(34, 197, 94, 0.8)',
                borderColor: 'rgba(34, 197, 94, 1)',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#f9fafb',
                    padding: 15,
                    font: {
                        size: 12,
                        weight: '600',
                    },
                    usePointStyle: true,
                    pointStyle: 'circle',
                },
            },
            tooltip: {
                backgroundColor: 'rgba(31, 41, 55, 0.95)',
                titleColor: '#f9fafb',
                bodyColor: '#f9fafb',
                padding: 12,
                borderColor: 'rgba(56, 189, 248, 0.3)',
                borderWidth: 1,
                callbacks: {
                    label: (context) => `${context.dataset.label}: ${context.parsed.y} g/km`,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#9ca3af',
                    callback: (value) => `${value} g/km`,
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
                    display: false,
                },
            },
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutQuart',
        },
    };

    return (
        <div className="chart-card">
            <h3 className="chart-title">🌍 Emission Reduction</h3>
            <div className="chart-container">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default EmissionChart;

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const EcoScoreChart = () => {
    const data = {
        labels: ['Eco Score', 'Remaining'],
        datasets: [
            {
                data: [85, 15],
                backgroundColor: [
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(31, 41, 55, 0.3)',
                ],
                borderColor: [
                    'rgba(34, 197, 94, 1)',
                    'rgba(31, 41, 55, 0.5)',
                ],
                borderWidth: 2,
                cutout: '75%',
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
            },
        },
        animation: {
            animateRotate: true,
            animateScale: true,
            duration: 1500,
            easing: 'easeInOutQuart',
        },
    };

    return (
        <div className="chart-card">
            <h3 className="chart-title">🌿 Eco Riding Score</h3>
            <div className="chart-container">
                <Doughnut data={data} options={options} />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    pointerEvents: 'none'
                }}>
                    <div style={{ fontSize: '3rem', fontWeight: '800', color: '#22c55e' }}>85</div>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '-0.5rem' }}>
                        Excellent
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoScoreChart;

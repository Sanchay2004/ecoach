import React from 'react';
import MetricCard from './components/MetricCard';
import EcoScoreChart from './components/EcoScoreChart';
import FuelTrendChart from './components/FuelTrendChart';
import EmissionChart from './components/EmissionChart';

function App() {
    return (
        <div className="app">
            <header className="header">
                <h1>HERO S3 Mobility Platform — ECO-COACH</h1>
                <p>AI-Driven Combustion Optimization & Rider Behavior Analytics</p>
            </header>

            <div className="dashboard-grid">
                {/* Metric Cards */}
                <MetricCard
                    icon="⚡"
                    title="Real-Time Mileage"
                    value="78 kmpl"
                    description="AI combustion optimization active"
                />

                <MetricCard
                    icon="💰"
                    title="Running Cost"
                    value="₹1.28/km"
                    comparison="Reduced from ₹1.54/km"
                />

                <MetricCard
                    icon="🔋"
                    title="Energy Utilisation"
                    value="40%"
                    description="Improved usable fuel energy"
                />

                {/* Chart Components */}
                <EcoScoreChart />
                <FuelTrendChart />
                <EmissionChart />
            </div>
        </div>
    );
}

export default App;

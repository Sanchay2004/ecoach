import React from 'react';

const MetricCard = ({ icon, title, value, description, comparison }) => {
    return (
        <div className="metric-card">
            <div className="metric-header">
                <span className="metric-icon">{icon}</span>
                <h3 className="metric-title">{title}</h3>
            </div>
            <div className="metric-value">{value}</div>
            {description && <p className="metric-description">{description}</p>}
            {comparison && (
                <div className="metric-comparison">
                    <span>📈</span>
                    <span>{comparison}</span>
                </div>
            )}
        </div>
    );
};

export default MetricCard;

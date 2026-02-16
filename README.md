# HERO S3 Eco-Coach Dashboard 🚀

A modern, futuristic React dashboard for visualizing AI-driven combustion optimization, energy recovery, and rider behavior insights for the HERO S3 Mobility Platform.

## ✨ Features

- **Real-Time Metrics**: Mileage, Running Cost, Energy Utilisation
- **Interactive Charts**: 
  - 🌿 Eco Riding Score (Doughnut Chart)
  - 📈 Fuel Saving Trend (Line Chart)
  - 🌍 Emission Reduction (Bar Chart)
- **Premium Dark Theme** with glassmorphism effects
- **Smooth Animations** and micro-interactions
- **Fully Responsive** 3-column grid layout

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Fast build tool
- **Chart.js** - Data visualization
- **React-Chartjs-2** - React wrapper for Chart.js
- **CSS3** - Custom styling with gradients and animations

## 📋 Prerequisites

You need to install **Node.js** (version 16 or higher) to run this project.

### Install Node.js:
1. Visit [nodejs.org](https://nodejs.org/)
2. Download and install the LTS version
3. Verify installation by running:
   ```bash
   node --version
   npm --version
   ```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The dashboard will automatically open in your browser at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## 📊 Dashboard Sections

### Metric Cards
1. **Real-Time Mileage**: 78 kmpl with AI combustion optimization
2. **Running Cost**: ₹1.28/km (reduced from ₹1.54/km)
3. **Energy Utilisation**: 40% improved usable fuel energy

### Charts
1. **Eco Riding Score**: Shows rider behavior efficiency (85/100)
2. **Fuel Saving Trend**: 6-week improvement from 62 to 78 kmpl
3. **Emission Reduction**: Baseline vs optimized comparison for CO₂, HC, NOₓ, CO

## 🎨 Design Features

- **Dark Mode**: Futuristic automotive UI theme
- **Glassmorphism**: Modern card effects with backdrop blur
- **Gradient Text**: Eye-catching header and values
- **Hover Animations**: Smooth card lift and glow effects
- **Responsive Grid**: Adapts from mobile (1 column) to desktop (3 columns)

## 📁 Project Structure

```
ecoach/
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main dashboard component
│   ├── index.css          # Global styles
│   └── components/
│       ├── MetricCard.jsx      # Reusable metric card
│       ├── EcoScoreChart.jsx   # Doughnut chart
│       ├── FuelTrendChart.jsx  # Line chart
│       └── EmissionChart.jsx   # Bar chart
```

## 🌟 Innovation Context

This dashboard is part of the **HERO S3 Mobility Platform**, supporting:
- Smart Combustion Core
- Energy Recovery Layer
- Connected Safety & Eco-Coach

**Key Metrics Visualized**:
- Mileage improvement
- Running cost reduction
- Energy utilisation increase
- Emission reduction

## 📝 License

This project is created for the HERO S3 Mobility Platform innovation demonstration.

---

**Made with ⚡ for sustainable mobility**

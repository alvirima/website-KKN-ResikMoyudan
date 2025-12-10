import React from "react";
import "./JenisSampahHome.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const JenisSampah = () => {
  const data = [
    { name: "Kardus", value: 35 },
    { name: "Botol Plastik", value: 28 },
    { name: "Kertas", value: 15 },
    { name: "Kaleng", value: 12 },
    { name: "Besi", value: 10 },
  ];

  const COLORS = ["#375C3F", "#1F4529", "#4F7355", "#678A6B", "#97A997"];

  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        fontSize={20}
        fontWeight="semiBold"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="jenis-container">
      <div className="jenis-content">
        {/* PIE CHART */}
        <div className="pie-wrapper">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderLabel}
                outerRadius={150}
                innerRadius={0}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* KETERANGAN */}
        <div className="legend-box">
          <h3>Keterangan:</h3>

          {data.map((item, index) => (
            <div className="legend-item" key={index}>
              <div
                className="circle"
                style={{ backgroundColor: COLORS[index] }}
              ></div>
              <span className="label-name">{item.name}</span>
              <span className="label-value">
                : {item.value}% = {item.value} Kg
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JenisSampah;

import { useState, useEffect } from "react";
import "./Pengumpulan.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

const Pengumpulan = () => {
  const data = [
    { month: "Januari", total: 95 },
    { month: "Februari", total: 110 },
    { month: "Maret", total: 108 },
    { month: "April", total: 105 },
    { month: "Mei", total: 120 },
    { month: "Juni", total: 160 },
    { month: "Juli", total: 200 },
    { month: "Agustus", total: 160 },
    { month: "September", total: 120 },
    { month: "Oktober", total: 105 },
    { month: "November", total: 110 },
    { month: "Desember", total: 95 },
  ];

  const colors = [
    "#466C4B",
    "#9EBC9E",
    "#466C4B",
    "#9EBC9E",
    "#466C4B",
    "#9EBC9E",
    "#466C4B",
    "#9EBC9E",
    "#466C4B",
    "#9EBC9E",
    "#466C4B",
    "#9EBC9E",
  ];

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="chart-container">
      <div className="chart-box">
        <ResponsiveContainer width="100%" height={isTablet ? 380 : 420}>
          <BarChart
            data={data}
            barCategoryGap={20}
            margin={{
              top: 40,
              right: isTablet ? 10 : 50,
              left: isTablet ? 10 : 50,
              bottom: 20,
            }}
          >
            <text
              x={isTablet ? 20 : 60}
              y={15}
              textAnchor="start"
              style={{
                fontFamily: "Inter",
                fontSize: 16,
                fill: "#1F4529",
                fontWeight: 600,
              }}
            >
              Kilogram
            </text>

            {/* X Axis */}
            <XAxis
              dataKey="month"
              tick={{ fontSize: isTablet ? 10 : 12 }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />

            {/* Y Axis */}
            <YAxis
              tickFormatter={(value) => value.toLocaleString("id-ID")}
              tick={{ fontSize: 12 }}
              axisLine={false}
            />

            <Tooltip
              formatter={(val) => val.toLocaleString("id-ID")}
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
            />

            {/* Bar dengan warna alternating */}
            <Bar
              dataKey="total"
              radius={[0, 0, 0, 0]}
              barSize={isTablet ? 40 : 65}
            >
              <LabelList
                dataKey="total"
                position="top"
                formatter={(value) => value.toLocaleString("id-ID")}
                style={{ fontSize: 12, fill: "#1F4529" }}
              />

              {/* apply alternating color */}
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Pengumpulan;

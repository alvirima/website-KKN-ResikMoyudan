import { useState, useEffect } from "react";
import "../Pendapatan/Bar.css";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1000);
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBarSize = () => {
    if (isMobile) {
      return Math.max(18, window.innerWidth / 15);
    }
    if (isTablet) {
      return Math.max(40, window.innerWidth / 10);
    }
    return 75;
  };

  return (
    <div className="chart-container">
      <div className="chart-box">
        <ResponsiveContainer
          width="100%"
          height={isMobile ? 260 : isTablet ? 360 : 400} // Diperkecil
        >
          <BarChart
            data={data}
            barGap={isMobile ? 2 : 5}
            margin={{
              top: isMobile ? 10 : 30,
              right: isMobile ? 5 : isTablet ? 5 : 30, // Diperkecil
              left: isMobile ? 10 : isTablet ? 5 : 30, // Diperkecil
              bottom: isMobile ? 30 : 20, // Diperkecil
            }}
          >
            {!isMobile && (
              <text
                x={isTablet ? 20 : 50}
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
            )}

            {/* X Axis */}
            <XAxis
              dataKey="month"
              tick={{ fontSize: isMobile ? 8 : isTablet ? 10 : 12 }}
              axisLine={false}
              tickLine={false}
              interval={0}
              angle={isMobile ? -45 : 0}
              textAnchor={isMobile ? "end" : "middle"}
              height={isMobile ? 60 : 30}
              tickMargin={isMobile ? 5 : 10} // Menyusutkan jarak label ke bar
            />

            {/* Y Axis */}
            {!isMobile && (
              <YAxis
                tickFormatter={(value) => value.toLocaleString("id-ID")}
                tick={{ fontSize: 12 }}
                axisLine={false}
              />
            )}

            <Tooltip
              formatter={(val) => val.toLocaleString("id-ID")}
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
            />

            <Bar
              dataKey="total"
              radius={[0, 0, 0, 0]}
              barSize={getBarSize()} // Dinamis
            >
              {!isMobile && (
                <LabelList
                  dataKey="total"
                  position="top"
                  formatter={(value) => value.toLocaleString("id-ID")}
                  style={{
                    fontSize: 12,
                    fill: "#1F4529",
                  }}
                />
              )}

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

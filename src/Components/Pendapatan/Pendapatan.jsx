import { useState, useEffect } from "react";
import "./Pendapatan.css";
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

const Pendapatan = () => {
  const data = [
    { month: "Januari", income: 95000 },
    { month: "Februari", income: 110000 },
    { month: "Maret", income: 108000 },
    { month: "April", income: 105000 },
    { month: "Mei", income: 120000 },
    { month: "Juni", income: 160000 },
    { month: "Juli", income: 200000 },
    { month: "Agustus", income: 160000 },
    { month: "September", income: 120000 },
    { month: "Oktober", income: 105000 },
    { month: "November", income: 110000 },
    { month: "Desember", income: 95000 },
  ];

  // warna bar bergantian (gelap–terang persis Figma)
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

  return (
    <div className="chart-container">
      <div className="chart-box">
        <ResponsiveContainer
          width="100%"
          height={isMobile ? 280 : isTablet ? 380 : 420}
        >
          <BarChart
            data={data}
            barCategoryGap={isMobile ? 70 : 20}
            margin={{
              top: isMobile ? 20 : 40,
              right: isMobile ? 5 : isTablet ? 10 : 50,
              left: isMobile ? 15 : isTablet ? 10 : 50,
              bottom: isMobile ? 40 : 20,
            }}
          >
            {!isMobile && (
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
                Rupiah
              </text>
            )}

            {/* X Axis */}
            <XAxis
              dataKey="month"
              tick={{ fontSize: isMobile ? 9 : isTablet ? 10 : 12 }}
              axisLine={false}
              tickLine={false}
              interval={0}
              angle={isMobile ? -45 : 0}
              textAnchor={isMobile ? "end" : "middle"}
              height={isMobile ? 60 : 30}
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
              dataKey="income"
              radius={[0, 0, 0, 0]}
              barSize={isMobile ? 18 : isTablet ? 40 : 65} // bar lebih pendek di HP
            >
              {!isMobile && (
                <LabelList
                  dataKey="income"
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

export default Pendapatan;

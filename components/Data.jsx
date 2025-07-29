"use client";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// Data for the temperature anomaly chart
const temperatureData = [
  { year: "1900", anomaly: -0.2 },
  { year: "1920", anomaly: -0.1 },
  { year: "1940", anomaly: 0.1 },
  { year: "1960", anomaly: 0.0 },
  { year: "1980", anomaly: 0.2 },
  { year: "2000", anomaly: 0.6 },
  { year: "2020", anomaly: 1.0 },
  { year: "2024", anomaly: 1.2 }, // Mock data for recent years
];

// Data for CO2 concentration chart
const co2Data = [
  { year: "1950", ppm: 310 },
  { year: "1960", ppm: 317 },
  { year: "1970", ppm: 325 },
  { year: "1980", ppm: 338 },
  { year: "1990", ppm: 354 },
  { year: "2000", ppm: 369 },
  { year: "2010", ppm: 389 },
  { year: "2020", ppm: 412 },
  { year: "2024", ppm: 420 }, // Mock data for recent years
];

export default function Data() {
  return (
    <section id="dataSec" className="bg-white backdrop-blur-md px-2 sm:px-6">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center mt-20 sm:mt-40">
        Key Climate Data
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto my-10 sm:my-15">
        {/* Temperature Anomaly Chart */}
        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800">
            Global Temperature Anomaly ($^\circ$C)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="anomaly" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* CO2 Concentration Chart */}
        <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-green-800">
            Atmospheric CO2 Concentration (ppm)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={co2Data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="ppm"
                stroke="#22c55e"
                fill="#86efac"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

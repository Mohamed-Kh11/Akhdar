'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const lineData = [
  { year: 2000, co2: 370 },
  { year: 2005, co2: 380 },
  { year: 2010, co2: 390 },
  { year: 2015, co2: 400 },
  { year: 2020, co2: 412 },
  { year: 2025, co2: 420 },
];

const LineChartAkhdar = ({ title }) => {
  return (
    <div className="bg-white mt-16 rounded-xl p-6 shadow-md w-full max-w-3xl mx-auto">
      <h3 className="text-xl font-bold text-green-800 text-center mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="co2" stroke="#16a34a" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartAkhdar;

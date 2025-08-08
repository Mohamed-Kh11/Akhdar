'use client';

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  Legend,
  BarChart,
  Bar,
} from 'recharts';

const COLORS = ['#16a34a', '#56ed5d'];

const areaData = [
  { year: 2000, renewable: 10, fossil: 90 },
  { year: 2005, renewable: 15, fossil: 85 },
  { year: 2010, renewable: 20, fossil: 80 },
  { year: 2015, renewable: 25, fossil: 75 },
  { year: 2020, renewable: 30, fossil: 70 },
  { year: 2025, renewable: 35, fossil: 65 },
];

const pieData = [
  { name: 'الطاقة المتجددة', value: 30 },
  { name: 'الطاقة الأحفورية', value: 70 },
];

const radialData = [
  { country: 'مصر', renewable: 22, fill: '#16a34a' },
  { country: 'فرنسا', renewable: 40, fill: '#15803d' },
  { country: 'ألمانيا', renewable: 55, fill: '#65a30d' },
];

const CombinedChartAkhdar = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-10 mt-10 px-4">

      {/* Area Chart */}
      {/* Bar Chart: Energy Comparison by Year */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-green-800 text-center mb-4">
          مقارنة مصادر الطاقة عبر السنين
        </h3>
        <ResponsiveContainer width="100%" height={315}>
          <BarChart data={areaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tick={{ dy: 2 }} dataKey="year" />
            <YAxis tick={{ dx: -30 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="renewable" fill="#16a34a" name="  متجددة" />
            <Bar dataKey="fossil" fill="#56ed5d" name="  أحفورية" />
          </BarChart>
        </ResponsiveContainer>
      </div>


      {/* Pie Chart */}
      <div className=" bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-green-800 text-center mb-4">
          توزيع الطاقة العالمية
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-700">
          {pieData.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              ></span>
              {entry.name}: {entry.value}%
            </div>
          ))}
        </div>
      </div>

      {/* Radial Bar Chart */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-green-800 text-center mb-4">
          نسبة الاعتماد على الطاقة المتجددة (٪)
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="90%"
            barSize={15}
            data={radialData}
          >
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff', fontSize: 12 }}
              background
              clockWise
              dataKey="renewable"
            />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-700">
          {radialData.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.fill }}
              ></span>
              {entry.country}: {entry.renewable}%
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CombinedChartAkhdar;

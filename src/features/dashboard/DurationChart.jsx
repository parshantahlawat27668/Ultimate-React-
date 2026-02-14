import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';


const startDataLight = [
  {
    duration: "1 night",
    value: 0,
    fill: "#dc2626", // red-600
  },
  {
    duration: "2 nights",
    value: 0,
    fill: "#ea580c", // orange-600
  },
  {
    duration: "3 nights",
    value: 0,
    fill: "#ca8a04", // yellow-600
  },
  {
    duration: "4-5 nights",
    value: 0,
    fill: "#65a30d", // lime-600
  },
  {
    duration: "6-7 nights",
    value: 0,
    fill: "#16a34a", // green-600
  },
  {
    duration: "8-14 nights",
    value: 0,
    fill: "#0d9488", // teal-600
  },
  {
    duration: "15-21 nights",
    value: 0,
    fill: "#2563eb", // blue-600
  },
  {
    duration: "21+ nights",
    value: 0,
    fill: "#9333ea", // purple-600
  },
];



function prepareData(startData, stays) {
  // A bit ugly code, but sometimes this is what it takes when working with real data 😅

  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }
  console.log(startData, stays);
  const data = stays?.reduce((arr, cur) => {
      const num = cur.numNights;
      if (num === 1) return incArrayValue(arr, "1 night");
      if (num === 2) return incArrayValue(arr, "2 nights");
      if (num === 3) return incArrayValue(arr, "3 nights");
      if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 nights");
      if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 nights");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 nights");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 nights");
      if (num >= 21) return incArrayValue(arr, "21+ nights");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}

const DurationChart = ({ confirmedStays }) => {
  const data = prepareData(startDataLight, confirmedStays);
  return (
    <div className='bg-gray-800 rounded-lg col-span-2 relative pt-10'>
      <h2 className='text-md   ml-4 py-1 absolute top-2'>Stay duration summary</h2>

      <ResponsiveContainer>
        <PieChart responsive >
          <Pie data={data} nameKey="duration" dataKey="value" innerRadius={75} outerRadius={105} cx="50%" cy="50%" paddingAngle={3} />
          <Tooltip />

          <Legend verticalAlign='middle' align='right' width="28%" layout='vertical' iconSize={13} iconType='circle' wrapperStyle={{
            fontSize: "14px",
            fontWeight: "700",
          }} />
        </PieChart>
      </ResponsiveContainer>

    </div>
  )
}

export default DurationChart

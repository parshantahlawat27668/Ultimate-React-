import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns'
import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const SalesChart = ({bookings, numDays}) => {

   const allDates =  eachDayOfInterval({
        start:subDays(new Date(), numDays-1),
        end: new Date()
    });

    const data = allDates.map((date)=>{
        return {
            label:format(date, "MMM dd"),
            totalSales:bookings?.filter(booking=> isSameDay(date, new Date(booking.created_at))).reduce((acc, cur)=> acc  + cur.totalPrice,0),
            extraSales:bookings?.filter((booking)=>isSameDay(date, new Date(booking.created_at))).reduce((acc, cur)=>acc + cur.extraPrice, 0)

        }
    });

    console.log(data);
  return (
    <div className='col-span-full bg-gray-800 p-2 rounded-lg    '>
        <h2 className='mb-3 text-md  ml-5 mt-2 '>
          Sales from {format(allDates.at(0),"MMM dd yyyy")} &mdash; {format(allDates.at(-1),"MMM dd yyyy")}</h2>
        {/* <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data} >
        <CartesianGrid strokeDasharray={4}/>
        <XAxis dataKey="label"/>
        <YAxis unit='$'/>
        <Tooltip/>
        <Area
        dataKey="totalSales"
        type={'monotone'}
        stroke='purple'
        fill='gray'
        strokeWidth={2}
        name='Total sales'
        unit="$"
        />

         <Area
        dataKey="extraSales"
        type={'monotone'}
        stroke='green'
        fill='yellow'
        strokeWidth={2}
        name='Extra sales'
        unit="$"
        />
        </AreaChart>
        </ResponsiveContainer> */}

        <ResponsiveContainer height={300} width="100%">
  <AreaChart data={data}>

    <defs>
      <linearGradient id="totalSalesColor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.4} />
        <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.05} />
      </linearGradient>

      <linearGradient id="extraSalesColor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.05} />
      </linearGradient>
    </defs>

    <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />

    <XAxis 
      dataKey="label" 
      tick={{ fill: "#6b7280", fontSize: 12 }}
      tickLine={false}
      axisLine={false}
    />

    <YAxis 
      unit="$"
      tick={{ fill: "#6b7280", fontSize: 12 }}
      tickLine={false}
      axisLine={false}
    />

    <Tooltip
      wrapperStyle={{ outline: "none" }}   // 🔥 outline remove
      contentStyle={{
        backgroundColor: "#f9fafb",
        borderRadius: "10px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}
      labelStyle={{ color: "#6b7280" }}
    />

    <Area
      dataKey="totalSales"
      type="monotone"
      stroke="#7c3aed"
      fill="url(#totalSalesColor)"
      strokeWidth={3}
      name="Total sales"
      unit="$"
      activeDot={{ r: 6 }}
    />

    <Area
      dataKey="extraSales"
      type="monotone"
      stroke="#06b6d4"
      fill="url(#extraSalesColor)"
      strokeWidth={3}
      name="Extra sales"
      unit="$"
      activeDot={{ r: 6 }}
    />

  </AreaChart>
</ResponsiveContainer>


    </div>
  )
}

export default SalesChart

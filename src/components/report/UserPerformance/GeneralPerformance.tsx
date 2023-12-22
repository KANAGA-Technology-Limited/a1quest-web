import { TopicPerformanceType } from '@/types/test_mode';
import React from 'react';
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const GeneralPerformance = ({ data }: { data: TopicPerformanceType }) => {
  return (
    <div className='w-full'>
      <ResponsiveContainer width='100%' height={800}>
        <BarChart
          width={500}
          height={800}
          data={data.tests.slice(0, 10)}
          layout='vertical'
          margin={{
            left: 30,
          }}
          barCategoryGap={14}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey='percentage'
            type='number'
            tickFormatter={(label) => (label ? `${label}%` : label)}
            domain={[0, 100]}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            dataKey='sub_topic'
            type='category'
            // minTickGap={20}
          />
          <Tooltip />
          <Bar
            dataKey='percentage'
            fill='#059669'
            activeBar={<Rectangle fill='#F0AC27' />}
            barSize={15}
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GeneralPerformance;

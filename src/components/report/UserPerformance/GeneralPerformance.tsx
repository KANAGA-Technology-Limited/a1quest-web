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
      <ResponsiveContainer width='100%' height={300}>
        <BarChart width={500} height={300} data={data.tests}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='sub_topic' axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar
            dataKey='percentage'
            fill='#059669'
            activeBar={<Rectangle fill='#F0AC27' />}
            barSize={15}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GeneralPerformance;

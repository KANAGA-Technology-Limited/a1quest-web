import { TopicIcon } from '@/icons';
import { LessonReportType } from '@/types/test_mode';
import React from 'react';

const ReportCard = ({ data }: { data: LessonReportType }) => {
  return (
    <div className='w-full bg-white py-8 px-6 rounded-[10px] border-[0.6px] border-[#D0D5DD]'>
      <div className='mb-5 flex items-start justify-between w-full'>
        <TopicIcon />
        <span className='text-secondary text-xl font-semibold'>
          {data.takenLessons}/{data.allLessons}
        </span>
      </div>
      <p className='text-[#06102B] font-semibold'>{data.title}</p>
    </div>
  );
};

export default ReportCard;

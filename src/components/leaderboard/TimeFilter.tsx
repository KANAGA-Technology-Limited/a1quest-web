import Dropdown from '@/common/Dropdown';
import React from 'react';
import { TimeFilterType } from './types';

const TimeFilter = ({
  setTimeFilter,
  timeFilter,
}: {
  timeFilter: TimeFilterType;
  setTimeFilter: React.Dispatch<React.SetStateAction<TimeFilterType>>;
}) => {
  return (
    <Dropdown
      values={['daily', 'weekly', 'monthly', 'yearly'].map((item) => ({
        value: item,
        label: item,
      }))}
      label=''
      name='timeFilter'
      useFormik={false}
      className='mb-4 !w-fit capitalize'
      value={{
        label: timeFilter,
        value: timeFilter,
      }}
      onChange={(e) => setTimeFilter(e?.value)}
    />
  );
};

export default TimeFilter;

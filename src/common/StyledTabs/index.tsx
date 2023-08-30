'use client';

import React, { useEffect, useRef, useState } from 'react';
import autoAnimate from '@formkit/auto-animate';

interface Props {
  tabs: string[];
  panels: React.ReactNode[];
}

const StyledTabs = ({ panels, tabs }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  return (
    <div>
      {/* Tabs */}
      <nav className='border border-[#D0D5DD] rounded-lg w-full px-4 py-[10px] flex overflow-x-auto max-w-full gap-[15px] flex-nowrap whitespace-nowrap'>
        {tabs.map((tab, index) =>
          index === selectedTab ? (
            <div
              key={index}
              className='w-fit bg-secondary p-3 text-black rounded-lg font-semibold cursor-pointer duration-500 transition-colors'
            >
              {tab}
            </div>
          ) : (
            <div
              key={index}
              className='w-fit bg-transparent p-3 text-[#323A46] rounded-lg font-normal cursor-pointer duration-500 transition-colors'
              onClick={() => setSelectedTab(index)}
            >
              {tab}
            </div>
          )
        )}
      </nav>

      {/* Panels */}
      <div className='mt-6' ref={parentRef}>
        {panels && panels.length > 0 && panels[selectedTab]}
      </div>
    </div>
  );
};

export default StyledTabs;

'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import autoAnimate from '@formkit/auto-animate';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Props {
  tabs: string[];
  panels: React.ReactNode[];
}

const StyledTabs = ({ panels, tabs }: Props) => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState<number>(Number(params.get('tab')) || 0);
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  const createQueryString = useCallback(
    (name: string, value: string | number) => {
      const newParams = new URLSearchParams(params.toString());
      newParams.set(name, value.toString());

      return newParams.toString();
    },
    [params]
  );
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
              onClick={() => {
                setSelectedTab(index);
                router.push(pathname + '?' + createQueryString('tab', index));
              }}
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

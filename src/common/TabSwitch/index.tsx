import React from 'react';

const TabSwitch = ({
  tabs,
  setSelectedTab,
  selectedTab,
}: {
  tabs: string[];
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <nav className='w-full flex overflow-x-auto max-w-full gap-8 flex-nowrap whitespace-nowrap'>
      {tabs.map((tab) =>
        tab === selectedTab ? (
          <div
            key={tab}
            className='w-fit text-[#06102B] pb-[14px] font-medium duration-500 transition-colors border-b-[#06102B] border-b-[4px]'
          >
            {tab}
          </div>
        ) : (
          <div
            key={tab}
            className='w-fit pb-[14px] text-[#64748B] font-normal cursor-pointer duration-500 transition-colors'
            onClick={() => {
              setSelectedTab(tab);
            }}
          >
            {tab}
          </div>
        )
      )}
    </nav>
  );
};

export default TabSwitch;

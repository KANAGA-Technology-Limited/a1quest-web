import React from 'react';

const LevelBadge = ({
  containerClass,
  ...props
}: { containerClass?: string } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={
        'bg-primary text-white px-3 py-[6px] text-sm font-normal w-fit rounded-[40px] ' +
        containerClass
      }
      {...props}
    >
      Level Badge
    </div>
  );
};

export default LevelBadge;

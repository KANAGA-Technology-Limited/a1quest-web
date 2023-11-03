export const DropdownIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M6 9.5L12 15.5L18 9.5'
        stroke='#4B5768'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const NavArrowRight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
  >
    <path
      d='M6.9126 13.825L10.7293 10L6.9126 6.175L8.0876 5L13.0876 10L8.0876 15L6.9126 13.825Z'
      fill='#1D4ED8'
    />
  </svg>
);

import React from 'react';

export interface HeroNavProps {}

const HeroNav: React.FC<HeroNavProps> = () => {
  return (
    <div className='p-[14px] bg-primaryLinear text-center text-white w-full  mb-2'>
      <p className='text-[12px] md:text-[15px]'>
        <strong className='text-[17px] pr-4'>$7,500 Federal Tax Credit</strong>{' '}
        Available for new Model 3 and Model Y. Reductions to tax credit likely
        after Dec 31.{' '}
        <a className='border-b-[1px]' href='#'>
          See Details
        </a>
      </p>
    </div>
  );
};

export default HeroNav;

import accesorios from '../../assets/img/Homepage-Accessories-Desktop-NA-APAC.avif';
export interface FinalSectionProps {}

const FinalSection: React.FC<FinalSectionProps> = () => {
  return (
    <section className='bg-black h-screen w-screen text-center relative overflow-hidden py-6'>
      <div className='z-30 relative h-full flex flex-col'>
        <header className=''>
          <h2 className='text-black pt-20 max-sm:pt-36 pb-2 text-[2.8rem] font-semibold'>
            Accessories
          </h2>
        </header>
        <footer className='flex flex-col flex-grow justify-end pb-14 '>
          <div>
            <a
              className=' border-[3.5px] border-white rounded  px-[85px] py-2  text-[15px] bg-white opacity-70 font-semibold text-black transition-colors w-[100%]'
              href='#'
            >
              Shop Now
            </a>
          </div>
        </footer>
      </div>

      <div className='absolute top-0 w-full z-10'>
        <img
          src={accesorios}
          alt='model-3'
          className=' w-full object-cover object-center h-[100vh]'
        />
      </div>
    </section>
  );
};

export default FinalSection;

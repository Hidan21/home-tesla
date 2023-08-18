import video from '../../assets/video/Homepage-Demo-Drive-Desktop-NA.webm';
import videoMobile from '../../assets/video/Homepage-Demo-Drive-Mobile-NA.webm';
import { useWindowSize } from '@uidotdev/usehooks';

export interface MainSectionsProps {}

const MainSections: React.FC<MainSectionsProps> = () => {
  const size = useWindowSize();

  function ancho() {
    return size?.width != null ? size.width < 600 : false;
  }

  return (
    <section className='bg-black h-screen w-screen text-center relative overflow-hidden py-8 max-md:py-20'>
      <div className='z-30 relative h-full flex flex-col'>
        <header className=''>
          <h2
            className='text-white pt-20 pb-2 text-[2.8rem] font-semibold'
            data-aos='fade-up'
            data-aos-anchor-placement='center-center'
            data-aos-delay='400'
            data-aos-duration='1000'
          >
            Experience Tesla
          </h2>
          <p
            className='text-white text-base'
            data-aos='fade-up'
            data-aos-anchor-placement='center-center'
            data-aos-delay='500'
            data-aos-duration='1000'
          >
            Schedule a Demo Drive Today
          </p>
        </header>
        <footer className='flex flex-col flex-grow justify-end pb-14 '>
          <div>
            <a
              className='text-white border-[3.5px] border-white rounded  px-[85px] py-2 font-normal text-[15px] hover:bg-white hover:text-black transition-colors'
              href='#'
              data-aos='fade-zoom-in'
              data-aos-easing='ease-in-back'
              data-aos-delay='300'
              data-aos-offset='0'
              data-aos-duration='1000'
            >
              Demo Drive
            </a>
          </div>
        </footer>
      </div>
      <div className='absolute top-0 w-full z-10 h-full '>
        <video
          className='object-center object-cover h-full w-[100%]'
          autoPlay
          muted
          loop
          src={ancho() ? videoMobile : video}
        ></video>
      </div>
    </section>
  );
};

export default MainSections;

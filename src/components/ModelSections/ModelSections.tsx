import { useWindowSize } from '@uidotdev/usehooks';

export interface ModelSectionsProps {
  title: string;
  textone?: string;
  texttrue?: string;
  btnone: string;
  btntrue: string;
  img?: string;
  imgm?: string;
  textsub?: string;
}

const ModelSections: React.FC<ModelSectionsProps> = ({
  title,
  textone,
  texttrue,
  btnone,
  btntrue,
  img,
  imgm,
  textsub,
}) => {
  const size = useWindowSize();

  function ancho() {
    return size?.width != null ? size.width < 600 : false;
  }

  return (
    <section className='bg-black h-screen w-screen text-center relative overflow-hidden py-8 max-md:pt-20'>
      <div className='z-30 relative h-full flex flex-col'>
        <header className=''>
          <h2 className='text-black pt-24 pb-2 text-[2.8rem] font-semibold'>
            {title}
          </h2>
          <p className='text-black text-base'>{textone}</p>
          <p className='text-black text-base'>{texttrue}</p>
          <p className='text-black text-base underline cursor-pointer'>
            {textsub}
          </p>
        </header>
        <footer className='flex flex-col  flex-grow justify-end pb-14  '>
          <div className='gap-x-4 flex mx-auto max-md:flex-col max-md:gap-3'>
            <a
              className='bg-white text-sm rounded font-medium px-1y py-[11px] w-64 transition-all hover:opacity-80  inline-flex justify-center items-center text-black text-[17px] opacity-70 max-md:flex max-sm:w-[100%] '
              href='#'
            >
              {btnone}
            </a>
            <a
              className='bg-gray-900 text-sm rounded font-medium text-white px-16 py-[11px] w-64  max-sm:w-[100%] transition-all hover:opacity-80  inline-flex justify-center items-center text-[17px] opacity-90'
              href='#'
            >
              {btntrue}
            </a>
          </div>
        </footer>
      </div>
      <div className='absolute top-0 w-full z-10'>
        <img
          src={ancho() ? imgm : img}
          alt='model-3'
          className=' w-full object-cover object-center h-[100vh]'
        />
      </div>
    </section>
  );
};

export default ModelSections;

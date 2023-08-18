import React, { useEffect, useState } from 'react';

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [open, setOpen] = useState(true);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    // console.log(open);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 400 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <nav
        className={
          open ? 'md:flex flex-grow basis-0 justify-end hidden ' : 'block '
        }
      >
        <ul
          className={`flex text-sm  [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:font-[600] [&>li>a]:py-2 ${
            open
              ? 'flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:font-[600] [&>li>a]:py-2'
              : 'max-md:flex max-md:flex-col max-md:absolute max-md:top-0 max-md:left-0 max-md:right-0 max-md:bg-white max-md:text-black py-3  max-md:h-[100vh] [&>li>a]:py-5 max-md:py-11'
          }`}
        >
          <p
            className='absolute right-4 text-2xl cursor-pointer md:hidden'
            onClick={toggleMenu}
          >
            x
          </p>
          <li className='hover:bg-black/5 '>
            <a href='#'>Vehicles</a>
          </li>
          <li className='hover:bg-black/5 '>
            <a href='#'>Energy</a>
          </li>
          <li className='hover:bg-black/5 hover:rounded'>
            <a href='#'>Charging</a>
          </li>
          <li className='hover:bg-black/5 hover:rounded'>
            <a href='#'>Discover</a>
          </li>
          <li className='hover:bg-black/5 hover:rounded'>
            <a href='#'>Shop</a>
          </li>
          <div className='md:hidden  [&>li>a]:inline-block flex flex-col  [&>li>a]:font-[600] [&>li>a]:py-1 gap-8 px-4'>
            <li className='hover:bg-black/5 hover:rounded'>
              <a href='#'>Suport</a>
            </li>
            <li className='hover:bg-black/5 hover:rounded'>
              <a href='#'>United State</a>
              <p>English</p>
            </li>
            <li className='hover:bg-black/5 hover:rounded'>
              <a href='#'>Account</a>
            </li>
          </div>
        </ul>
      </nav>
      <nav className='md:flex flex-grow basis-0 justify-end hidden  '>
        <ul
          className={`flex text-sm  [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-2 [&>li>a>svg]:w-6 ${
            sticky ? '[&>li>a]:text-black' : '[&>li>a]:text-white'
          }`}
        >
          <li className='hover:bg-black/5 hover:rounded'>
            <a href='#'>
              <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill='currentColor'
                  d='M12 20.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Zm0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm.053-3.533a7.8 7.8 0 0 1 .92-.767 6.97 6.97 0 0 0 .746-.61 2.31 2.31 0 0 0 .468-.635c.126-.253.188-.548.188-.883 0-.374-.082-.723-.246-1.048-.158-.324-.415-.588-.771-.792-.356-.203-.81-.305-1.362-.305-.575 0-1.045.116-1.411.347a1.991 1.991 0 0 0-.788.89c-.06.134-.11.272-.148.413-.111.414-.445.767-.874.767-.428 0-.784-.35-.71-.772.07-.407.2-.79.386-1.15.301-.583.758-1.048 1.37-1.394C10.435 6.176 11.185 6 12.07 6c.93 0 1.687.181 2.273.544.59.358 1.014.803 1.271 1.337.257.533.386 1.07.386 1.608 0 .545-.085 1.012-.254 1.403-.17.385-.375.698-.616.94-.235.242-.55.514-.943.817-.312.247-.561.46-.747.635-.18.176-.33.385-.451.627-.05.099-.087.2-.113.302-.108.424-.422.787-.86.787-.437 0-.806-.356-.76-.79a2.948 2.948 0 0 1 .797-1.743Z'
                ></path>
              </svg>
            </a>
          </li>
          <li className='hover:bg-black/5 hover:rounded'>
            <a href='#'>
              <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill='currentColor'
                  d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z'
                ></path>
              </svg>
            </a>
          </li>
          <li className='hover:bg-black/5 hover:rounded'>
            <a href='#'>
              <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill='currentColor'
                  d='M12 20.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Zm0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm.053-3.533a7.8 7.8 0 0 1 .92-.767 6.97 6.97 0 0 0 .746-.61 2.31 2.31 0 0 0 .468-.635c.126-.253.188-.548.188-.883 0-.374-.082-.723-.246-1.048-.158-.324-.415-.588-.771-.792-.356-.203-.81-.305-1.362-.305-.575 0-1.045.116-1.411.347a1.991 1.991 0 0 0-.788.89c-.06.134-.11.272-.148.413-.111.414-.445.767-.874.767-.428 0-.784-.35-.71-.772.07-.407.2-.79.386-1.15.301-.583.758-1.048 1.37-1.394C10.435 6.176 11.185 6 12.07 6c.93 0 1.687.181 2.273.544.59.358 1.014.803 1.271 1.337.257.533.386 1.07.386 1.608 0 .545-.085 1.012-.254 1.403-.17.385-.375.698-.616.94-.235.242-.55.514-.943.817-.312.247-.561.46-.747.635-.18.176-.33.385-.451.627-.05.099-.087.2-.113.302-.108.424-.422.787-.86.787-.437 0-.806-.356-.76-.79a2.948 2.948 0 0 1 .797-1.743Z'
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <div
        id='menu-backdrop'
        className={`
      absolute bg-black/5 backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-500
      ease-in-out opacity-0 -z-10
    `}
      />
      <button
        className='border py-0 px-2 rounde md:hidden'
        onClick={toggleMenu}
      >
        Menu
      </button>
    </>
  );
};

export default NavBar;

import Image from 'next/image';
import Logo from '../../../public/assets/MYAR-White.png';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type NavigationProps = {
  isBlur?: boolean;
};
const Navigation = ({ isBlur }: NavigationProps) => {
  const navigationList = [
    { name: 'company', link: '/' },
    { name: 'hire', link: '/' },
    { name: 'portfolio', link: '/' },
    { name: 'contact', link: '/' },
  ];

  const [showIcon, setShowicon] = useState(false);
  useEffect(() => {
    if (!isBlur) {
      setTimeout(() => {
        console.log('nkjanskcn');
        setShowicon(true);
      }, 900);
    } else {
      setShowicon(false);
    }
  }, [isBlur]);

  const [toggle, setToggle] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const toggleClass = () => {
    setIsNavOpen(!isNavOpen);
    const closeAfterClick = document.querySelector('#nav-icon4');
    closeAfterClick?.classList?.toggle('open');
  };

  return (
    <div
      className={`px-9 w-full fixed top-0 bg-[#ffffff1a] z-10  md:backdrop-blur-sm backdrop-filter text-white ${
        isBlur ? 'hidden' : 'flex'
      }`}
    >
      <div className="max-w-[1728px] mx-auto w-full flex justify-between">
        <div className="hidden sm:flex py-[26px] gap-10 lg:gap-[117px]">
          <div className="text-xl font-normal py-px cursor-pointer z-[100]">
            company
          </div>
          <div className="text-xl font-normal py-px cursor-pointer">hire</div>
        </div>
        {showIcon && (
          <div className={`flex items-center scale-75 sm:scale-100`}>
            <Image src={Logo} alt="logo" className="cursor-pointer" />
          </div>
        )}
        <div className="hidden sm:flex py-[26px] gap-10 lg:gap-[117px]">
          <div className="text-xl font-normal py-px cursor-pointer">
            portfolio
          </div>
          <div className="text-xl font-normal py-px cursor-pointer">
            contact
          </div>
        </div>

        <div className={` flex items-center  sm:hidden`}>
          <button
            className="w-12 h-12 relative focus:outline-none md:hidden overscroll-none sm:hidden"
            onClick={() => {
              toggleClass();
              setToggle(!toggle);
            }}
          >
            <div className="block w-5 absolute left-5 top-6 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <span
                className={`
                    block absolute h-0.5 w-7 text-[#b7b7b7] bg-current transform transition duration-300 ease-in-out
                    ${toggle ? 'rotate-45' : '-translate-y-1.5'}`}
              ></span>
              <span
                className={`
                    block absolute h-0.5 w-7 text-[#b7b7b7] bg-current transform transition duration-300 ease-in-out
                    ${toggle && 'opacity-0'}`}
              ></span>
              <span
                className={`
                    block absolute h-0.5 w-7 text-[#b7b7b7] bg-current transform transition duration-300 ease-in-out
                    ${toggle ? '-rotate-45' : 'translate-y-1.5'}`}
              ></span>
            </div>
          </button>
        </div>
        <div
          className={`bg-[#b7b7b7] rounded-xl absolute top-20 right-5 block md:hidden p-0.5 z-20 ${
            toggle ? 'visible sm:invisible' : 'invisible'
          }`}
        >
          <div className="bg-[#050C24] p-3 rounded-xl text-center">
            {navigationList?.map((data, index) => (
              <div key={index} className="p-3">
                <Link
                  href={''}
                  className="font-medium  hover:font-bold text-sm text-white"
                  onClick={() => {
                    toggleClass();
                    setToggle(!toggle);
                  }}
                >
                  {data?.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

import { Layout } from '@/components/ui';
import { NextPageWithLayout } from './_app';
import BgImage from '../../public/assets/Video.png';
import HomeText from '../../public/assets/myar-text.png';
import Entors from '../../public/assets/entors.png';
import Vuzec from '../../public/assets/bg-vuzec.png';
import Perl from '../../public/assets/bg-perl.png';
import Mycube from '../../public/assets/bg-mycube.png';
import Block from '../../public/assets/bg-block.png';
import BlurLogo from '../../public/assets/blur-logo.png';
import Image from 'next/image';
import { useState } from 'react';

const Home: NextPageWithLayout = () => {
  const [isBlur, setIsBlur] = useState(true);
  return (
    <Layout isBlur={isBlur}>
      <div
        className={` bg-white/10 absolute z-20 w-full  backdrop-blur-[10px]  flex flex-col items-center justify-center gap-6  sm:gap-14 lg:gap-24 ${
          isBlur
            ? 'top-0 min-h-screen h-full'
            : 'transition-all ease-in-out duration-1000 h-0'
        }`}
      >
        <div
          className={`${
            isBlur
              ? 'scale-100'
              : 'transition-all ease-in-out duration-1000 scale-0'
          }`}
        >
          <Image src={BlurLogo} alt="logo" className={``} />
        </div>
        {isBlur && (
          <div
            className="px-[35px] rounded-[100px] pb-1 pt-px text-[#FFFFFF] bg-[#18161A] backdrop-blur-[10px]  font-montserrat text-[25px] font-normal text-start cursor-pointer"
            onClick={() => setIsBlur(false)}
          >
            enter myar
          </div>
        )}
      </div>
      <div
        className={`min-h-screen h-full relative flex justify-end  ${
          isBlur ? 'pt-0' : ' pt-[112px]'
        }`}
      >
        <Image
          src={BgImage}
          fill
          className="object-cover  xl:object-fill"
          alt=""
        />
        {!isBlur && (
          <div className="absolute bottom-8 lg:bottom-[70px] left-10 2xl:left-[129px] w-2/5 ">
            <Image
              src={HomeText}
              height={330}
              width={702}
              alt=""
              className="!z-10"
            />
          </div>
        )}
        <div
          className={`relative flex flex-col justify-start items-end gap-2.5 overflow-hidden ${
            isBlur ? 'h-0 overflow-hidden' : 'min-h-max'
          }`}
        >
          <div
            className={`relative cursor-pointer w-[250px] hover:w-[320px] sm:w-[357px] sm:hover:w-[520px] transition-all ease-in-out duration-1000`}
          >
            <div
              className={`relative w-[320px] sm:w-[520px] overflow-hidden transition-all ease-in-out delay-[900ms] duration-1000 ${
                isBlur ? ' -right-[47px] sm:-right-[357px]' : 'right-0'
              }`}
            >
              <Image src={Entors} alt="Entors" />
            </div>
          </div>
          <div
            className={`relative cursor-pointer w-[250px] hover:w-[320px] sm:w-[357px] sm:hover:w-[520px] transition-all ease-in-out duration-1000`}
          >
            <div
              className={`relative w-[320px] sm:w-[520px] overflow-hidden transition-all ease-in-out delay-700 duration-1000 ${
                isBlur ? ' -right-[47px] sm:-right-[357px]' : 'right-0'
              }`}
            >
              <Image src={Vuzec} alt="Vuzec" />
            </div>
          </div>
          <div
            className={`relative cursor-pointer w-[250px] hover:w-[320px] sm:w-[357px] sm:hover:w-[520px] transition-all ease-in-out duration-1000`}
          >
            <div
              className={`relative cursor-pointer w-[320px] sm:w-[520px] overflow-hidden transition-all ease-in-out delay-500 duration-1000 ${
                isBlur ? ' -right-[47px] sm:-right-[357px]' : 'right-0'
              }`}
            >
              <Image src={Mycube} alt="Mycube image" />
            </div>
          </div>

          <div
            className={`relative cursor-pointer w-[250px] hover:w-[320px] sm:w-[357px] sm:hover:w-[520px] transition-all ease-in-out duration-1000`}
          >
            <div
              className={`relative w-[320px] sm:w-[520px] overflow-hidden transition-all ease-in-out delay-300 duration-1000 ${
                isBlur ? ' -right-[47px] sm:-right-[357px]' : 'right-0'
              }`}
            >
              <Image src={Perl} alt="Perl" />
            </div>
          </div>

          <div
            className={`relative cursor-pointer w-[250px] hover:w-[320px] sm:w-[357px] sm:hover:w-[520px] transition-all ease-in-out duration-1000`}
          >
            <div
              className={`relative w-[320px] sm:w-[520px] overflow-hidden transition-all ease-in-out delay-100 duration-1000 ${
                isBlur ? ' -right-[47px] sm:-right-[357px]' : 'right-0'
              }`}
            >
              <Image src={Block} alt="Block" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

/**
 * * To apply the next layout we created we first need to apply the return type to the page as you can see the above.
 * * Next step is to call the getLayout prop and wrap our page with the custom layout component that we created.
 * * Learn More: https://nextjs.org/docs/basic-features/layouts
 */
// Home.getLayout = (page) => <Layout hide>{page}</Layout>;

export default Home;

import Image from 'next/image';

function DesktopHero() {

  return (
    <>
      <section className="flex mt-[-1px] flex-col items-center justify-center w-screen h-[660px] bg-center bg-no-repeat bg-cover bg-gray-hero
Zorb Flux Drek Rize Kaid Brio Lime Taze Nerd Fizz
" style={{ backgroundImage: "url(/assets/images/hero/Rectangle-2-1.jpg)" }}>
        <div className="w-9/10 max-w-[77.5rem] h-[100vh] flex flex-col items-center justify-center md:flex-row xl:h-[650px] ">
          <div className="flex flex-col items-center justify-between px-[5%] w-full h-1/2 md:px-[0] md:py-[5%] md:w-1/2 md:h-full md:items-start ">
            <h1 className="w-full font-black font-primary lg:text-[64px] lg:leading-[64px] md:text-[40px] md:leading-[60px]"> FIND CLOTHES THAT MATCHES YOUR STYLE </h1>
            <p className="w-full text-sm font-secondary text-black/60 leading-[20px]"> Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. </p>
            <button className=" text-white bg-black rounded-full font-secondary px-[.5rem] py-[1rem] md:w-[30%]"> Shop Now </button>
            
            <div className="flex flex-wrap items-center justify-between md:w-full md:divide-x md:divide-black/10 ">
              <div className="flex flex-col items-center justify-center w-1/2 border-r md:w-1/3 md:items-start">
                <div className="flex flex-col items-center justify-center w-8/10 h-1/2">
                  <div className="w-full sm:text-[26px]  md:text-[30px] lg:text-[40px] font-bold font-secondary whitespace-nowrap"> 200+ </div>
                  <div className="font-secondary whitespace-nowrap text-xs leading-[20px] w-full"> International Brands </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-1/2 md:w-1/3">
                <div className="flex flex-col items-center justify-center w-8/10 h-1/2">
                  <div className="w-full sm:text-[26px]  md:text-[30px] lg:text-[40px] font-bold font-secondary whitespace-nowrap"> 2,000+ </div>
                  <div className="font-secondary whitespace-nowrap text-xs leading-[20px] w-full "> High-Quality Products </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full translate-x-[10%] md:w-1/3">
                <div className="flex flex-col items-center justify-center w-8/10 h-1/2">
                  <div className="w-full sm:text-[26px]  md:text-[30px] lg:text-[40px] font-bold font-secondary whitespace-nowrap"> 30,000+ </div>
                  <div className="font-secondary whitespace-nowrap text-xs leading-[20px] w-full"> Happy Customers </div>
                </div>
              </div>
            </div>

            
          </div>
          <div className="relative w-full h-1/2 md:w-1/2 md:h-full ">
            <Image src="/assets/images/vectors/Vector.png" alt="" className="absolute top-[10%] right-[2%] spin "
                     width={104}
  height={104}
  />
            <Image src="/assets/images/vectors/Vector-1.png" alt="" className="absolute top-[40%] left-[2%] spin"
                     width={56}
  height={56}
  />
          </div>
        </div>
      </section>
    </>
  );
}

export default DesktopHero;

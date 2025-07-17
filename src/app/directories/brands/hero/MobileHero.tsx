import Image from "next/image";

function MobileHero() {
  return (
    <>
      <section className="w-full h-[100vh] bg-gray-hero  flex flex-col justify-center items-center md:hidden">
        <div className="flex flex-col items-center justify-between px-[5%] w-full  h-1/2">
          <h1 className="w-full font-black tracking-[1px] text-heading-sm font-primary">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="w-full text-sm font-secondary text-black/60 leading-[20px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-full text-white bg-black rounded-full font-secondary px-[.5rem] py-[1rem]">
            Shop Now
          </button>
          <div className="flex flex-wrap items-center justify-between ">
            <div className="flex flex-col items-center justify-center w-1/2 border-r border-black/10">
              <div className="flex flex-col items-center justify-center w-8/10 h-1/2">
                <div className="w-full text-xl font-bold font-secondary">
                  200+
                </div>
                <div className="font-secondary text-xs leading-[20px] w-full">
                  International Brands
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-center justify-center w-1/2">
              <div className="flex flex-col items-center justify-center w-8/10 h-1/2">
                <div className="w-full text-xl font-bold font-secondary">
                  2,000+
                </div>
                <div className="font-secondary text-xs leading-[20px] w-full  ">
                  High-Quality Products
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-center justify-center w-full mt-5 translate-x-[10%]">
              <div className="flex flex-col items-center justify-center w-1/2 h-1/2">
                <div className="w-full text-xl font-bold font-secondary">
                  30,000+
                </div>
                <div className="font-secondary text-xs leading-[20px]  w-full">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-1/2">
          <Image
            src="/assets/images/hero/Rectangle 2.jpg"
            alt=""
            className="relative object-fill w-full h-full "
              sizes="(max-width: 1200px) 100vw, 1200px"

fill
          />
          <Image
            src="/assets/images/vectors/Vector.png"
            alt=""
            className="spin absolute top-[10%] right-[2%] spin "
                     width={102}
  height={102}
  
          />
          <Image
            src="/assets/images/vectors/Vector-1.png"
            alt=""
            className="spin absolute top-[40%] left-[2%] spin"
                     width={56}
  height={56}
  
          />
        </div>
      </section>
    </>
  );
}


export default MobileHero;

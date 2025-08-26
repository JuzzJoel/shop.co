import Link from "next/link";
import NewsLetter from "./components/NewsLetter";
import Image from "next/image";

function Footer() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center w-screen mt-45 min-h-auto  ">
        <div className="flex flex-col items-center justify-center w-[90vw] h-auto max-w-[77.5rem]">
          <NewsLetter />

          {/* bottom nav */}
          <div className="flex items-end w-full justify-end h-[670px] border-b  border-black/20  md:h-[500px]  ">
            <div className="flex flex-col justify-between items-center h-[500px] w-full md:h-[400px] md:flex-row ">
              <div className="flex flex-col justify-around item-start h-[180px]  w-full md:w-1/4   md:h-[180px] md:translate-y-[50px]">
                <Link href="/home" className="flex-col items-center justify-center w-full text-left h-1/4">
                  <h1 className="font-primary font-black text-[34px]">SHOP.CO</h1>
                </Link>

                <p className="text-sm text-black/60 font-secondary leading-[20px]  ">
                { ` We have clothes that suits your style and which you're proud to wear. From women to men.`}
                </p>
                <div className="flex w-full gap-3">
                  <Image
                    src="/assets/images/Icons/twitter.png"
                    alt="Twitter Icon"
                    className="hover:invert aspect-square"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/assets/images/Icons/facebook.png"
                    alt="Facebook Icon"
                    className="invert hover:invert-0 aspect-square"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/assets/images/Icons/insta.png"
                    alt="Instagram Icon"
                    className=" hover:invert aspect-square"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/assets/images/Icons/github.png"
                    alt="Github Icon"
                    className="hover:invert aspect-square"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center w-full h-full item-start md:w-3/4 md:flex-row md:flex-nowrap md:h-[300px] md:items-end md:justify-end">
                <div className="flex flex-col items-start justify-between w-1/2 text-sm text-black h-4/10 font-secondary/60md:items-end md:h-[180px]">
                  <ul className="flex flex-col justify-between h-full ">
                    <li className="text-sm text-black/60 leading-[18px]  font-semibold font-secondary uppercase tracking-[3px]">
                      Company
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">About </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">Features</li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary "> Works</li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary "> Career</li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-between w-1/2 text-sm text-black h-4/10 font-secondary/60md:items-end md:h-[180px]">
                  <ul className="flex flex-col justify-between h-full ">
                    <li className="text-sm text-black/60 leading-[18px] font-secondary  font-semibold uppercase tracking-[3px]">
                      HELP
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">Customer Support</li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">Delivery Details</li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary "> Terms & Conditions</li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary "> Privacy Policy</li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-between w-1/2 text-sm text-black h-4/10 font-secondary/60md:items-end md:h-[180px]">
                  <ul className="flex flex-col justify-between h-full ">
                    <li className="text-sm text-black/60 leading-[18px] font-secondary  font-semibold uppercase tracking-[3px]">
                      FAQ
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">Account</li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">Manage Deliveries</li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">Orders</li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">Payment</li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-between w-1/2 text-sm text-black h-4/10 font-secondary/60md:items-end md:h-[180px]">
                  <ul className="flex flex-col justify-between h-full md:items-center ">
                    <li className="text-sm text-black/60 leading-[18px] font-secondary font-semibold uppercase tracking-[3px] ">
                      {" "}
                      RESOURCES
                    </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">Free eBook</li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary "> Development Tutorial </li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary "> How to Blog</li>
                    <li className="text-sm text-black/60 leading-[16px] font-secondary ">Youtube Playlist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* footer bottom */}
          <div className="flex flex-col items-center w-full justify-center gap-3 h-[135px]  text-sm text-black/60 w-font-secondary md:flex-row md:justify-between">
            <p>
              Designed by{" "}
              <a className="font-bold hover:underline" href="https://www.figma.com/@hamzauix">
                Hamza Naeem
              </a>{" "}
              , Coded by
              <a
                href="https://startbootstrap-personal.vercel.app/"
                className="font-bold hover:underline hover:text-black/80 in-hover:translate-x-[10px] ml-1"
              >
                Olajire Joel
              </a>
              .
            </p>
            <div className="flex items-center justify-center">
              <Image src="/assets/images/Icons/visa.png" alt="Visa Icon" className="w-1/6" width={50} height={50} />
              <Image
                src="/assets/images/Icons/mastercard.png"
                alt="Mastercard Icon"
                className="w-1/6"
                width={50}
                height={50}
              />
              <Image src="/assets/images/Icons/paypal.png" alt="Paypal Icon" className="w-1/6" width={50} height={50} />
              <Image
                src="/assets/images/Icons/apple-pay.png"
                alt="Apple Pay Icon"
                className="w-1/6"
                width={50}
                height={50}
              />
              <Image
                src="/assets/images/Icons/google-pay.png"
                alt="Google Pay Icon"
                className="w-1/6"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

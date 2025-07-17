import React from 'react'

function NewsLetter() {
  return (
    <>
               {/* newsletter */}
          <div className="absolute bg-black top-[-20%] left-[50%] px-[15px] py-4  translate-x-[-50%] h-[300px] w-9/10 rounded-2xl flex flex-col items-center justify-center md:flex-row sm:py-[0px] md:px-[5%] max-w-[77.5rem]">
            <h1 className="text-heading-sm text-white font-bold leading-[32px] my-2 mx-auto sm:text-[45px] h-4/10  sm:leading-[40px] md:leading-[45px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
            <form
              action=""
              className="flex flex-col justify-around w-full gap-[10%] h-4/10 "
            >
              {/* newsletter */}
              <div className="relative w-full border-none rounded-full focus:border-none focus:outline-none">
                <input
                  type="email"
                  alt=""
                  placeholder="              Enter your email address"
                  className="relative w-full px-4 py-3 text-base bg-white border-none rounded-full cursor-pointer font-secondary text-black/40 h1/2 focus:border-none focus:outline-none"
                />
                <img
                  src="/assets/images/Icons/mail.png"
                  className="absolute left-[5%] top-[50%] translate-y-[-50%]"
                />
              </div>
              <button className="w-full px-4 py-3 text-sm text-black bg-white rounded-full hover:">
                {" "}
                Subscribe to Newsletter
              </button>
            </form>
          </div>

      
    </>
  )
}

export default NewsLetter

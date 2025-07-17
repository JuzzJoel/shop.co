import Image from "next/image"

function BrandsAside() {
  return (
    <>
      <aside className=" debug-screens w-screen flex items-center justify-center h-[146px] md:h-[122px] bg-black">
<div className="h-[47px] md:h-[40px] gap-7 md:gap-2 flex flex-wrap items-center justify-between w-9/10 max-w-[77.7rem] [&>img]:w-27 [&>img]:h-6 md:[&>img]:w-30 md:[&>img]:h-auto">
  <Image src="/assets/images/vectors/Group.png" alt=""           width={100}
  height={100}
  />
  <Image src="/assets/images/vectors/zara-logo.png" alt=""           width={100}
  height={100}
  />
  <Image src="/assets/images/vectors/gucci-logo.png" alt=""           width={100}
  height={100}
  />
  <Image src="/assets/images/vectors/prada-logo.png" alt=""           width={100}
  height={100}
  />
  <Image src="/assets/images/vectors/Group2.png" alt=""           width={100}
  height={100}
  />
</div>

      </aside>
    </>
  )
}

export default BrandsAside

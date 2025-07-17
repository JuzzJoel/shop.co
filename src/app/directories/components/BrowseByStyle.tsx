import Image from "next/image";
import Link from "next/link";
const categories = [
  {
    label: "Casual",
    image:
      "/assets/images/categories/image 11.png",
  },
  {
    label: "Formal",
    image:
      "/assets/images/categories/image 12.png",
  },
  {
    label: "Party",
    image:
      "/assets/images/categories/image 13.png",
  },
  {
    label: "Gym",
    image:
      "/assets/images/categories/image 14.png",
  },
];

export default function BrowseStyle() {
  return (
    <section className="flex items-center justify-center w-screen">
          <div className="h-auto w-9/10 max-w-[77.5rem] p-6 font-bold bg-gray-medium  rounded-[20px]  md:rounded-[40px] font-secondary">
      <h1 className="mb-10 text-[32px] mt-10  font-black md:text-[48px] font-primary text-center md:text-4xl">
        BROWSE BY DRESS STYLE
      </h1>

    <div className="hidden max-w-[1110px] grid-cols-10 gap-[20px] mt-15 mb-15 mx-auto md:grid">
  {categories.map((cat, index) => (
    <Link href={`/${cat.label.toLowerCase()}`} key={index} className={`block ${index === 0 || index === 3 ? 'col-span-3' : 'col-span-7'}`}>
      <div className="relative overflow-hidden bg-white shadow-xs rounded-xl h-[290px]">
        <Image src={cat.image} alt={cat.label}
          className="object-cover w-full h-full"
          fill
  sizes="(max-width: 1200px) 100vw, 1200px"

  />
        <div className="absolute left-0 p-4 text-[36px] font-bold text-black top-2">
          {cat.label}
        </div>
      </div>
    </Link>
  ))}
</div>


      {/* Fallback stacked layout for mobile */}
      <div className="space-y-4 md:hidden">
  {categories.map((cat, index) => (
    <Link href={`/${cat.label.toLowerCase()}`} key={index}>
      <div className="relative overflow-hidden mb-5 bg-white shadow-sm h-[190px] rounded-xl" >
        <Image src={cat.image} alt={cat.label} className="object-cover w-full full"
          fill
  sizes="(max-width: 1200px) 100vw, 1200px"

  />
        <div className="absolute left-0 p-4 text-[32px] font-bold text-black top-2">
          {cat.label}
        </div>
      </div>
    </Link>
  ))}
</div>

    </div>
    </section>

  );
}

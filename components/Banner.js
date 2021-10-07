import Image from "next/image";
import heroImage from "../assets/hero.png";

function Banner() {
  return (
    <>
      <div className="relative h-[500px] sm:h-[500px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image src={heroImage} layout="fill" objectFit="cover" />
        <div className="absolute top-1/2 w-full text-center">
          <p className="text-sm sm:text-lg text-white pb-[10px]">
            Don't Know Where to Go? Perfect!
          </p>

          <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transistion duration-150">
            I'm Flexible
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;

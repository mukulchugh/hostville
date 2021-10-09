import { HeartIcon, StarIcon } from "@heroicons/react/outline";
import Image from "next/dist/client/image";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 pr-4 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          objectFit="cover"
          layout="fill"
          className="flex rounded-2xl"
        />
      </div>
      <div className="flex flex-grow flex-col pl-5">
        <div className="flex justify-between">
          <p className="text-xs">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl mt-[-5px]">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-gray-500 text-sm flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight"> {total} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;

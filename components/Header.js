import Image from "next/image";
import { useState } from "react";
import hvLogo from "../assets/logo/HostVille.svg";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div
        onClick={() => {
          router.push("/");
        }}
        className="relative flex items-center h-12 cursor-pointer my-auto"
      >
        <Image
          src={hvLogo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />

        <SearchIcon className="hidden md:inline-flex h-8 bg-blue-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex item-center space-x-2 p-2 border-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-10">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#2962FF"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guest
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-blue-600"
            />
          </div>
          <div className="flex ">
            <button
              onClick={resetInput}
              className="flex-grow bg-blue-500 hover:bg-blue-900 text-white px-10 py-4 rounded-l-full  font-bold my-3 hover:shadow-xl active:scale-90 active:rounded-full transition duration-150"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow bg-blue-500 text-white px-10 py-4 rounded-r-full  font-bold my-3 hover:shadow-xl hover:bg-blue-900 active:scale-90 active:rounded-full transition duration-150"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

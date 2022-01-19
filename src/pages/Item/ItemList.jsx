import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ItemCard } from "./ItemCard";

export const ItemList = () => {
  return (
    <div>
      <div className="sticky top-0 shadow-xl h-24 flex justify-center items-center">
        <p className="text-2xl font-semibold">Items</p>
      </div>
      <div className="px-36">
        <p className="text-[#0063d4] text-xl my-2">All Items</p>
        <div className="flex justify-center items-center my-3 bg-gray-100">
          <span className="mx-4 my-2">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-transparent"
          />
        </div>
        <div>
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

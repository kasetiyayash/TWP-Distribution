import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ItemCard = () => {
  return (
    <div className="h-14 flex justify-between items-center bg-gray-200 ">
      <div>
        <span className="font-semibold">Amici 2008 Cabernet Sauvignon</span>
      </div>
      <div className="text-center items-center rounded-full bg-green-600 w-8 h-8">
        <span className="text-[#fff]">12</span>
      </div>

      <span>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </div>
  );
};

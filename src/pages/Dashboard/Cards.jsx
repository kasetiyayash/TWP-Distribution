import React from "react";
import logos from "../../assets/Images/Items.png";

export const Cards = ({ data }) => {
  return (
    <div key={data.key} className="m-3 w-[27%] ">
      <a
        onClick={() => {
          alert(`${data.title} was Clicked`);
        }}
      >
        <div className="shadow-md flex items-center p-[10px] cursor-pointer ">
          <div className="h-12 w-12 m-1.5">
            <img src={logos} />
          </div>
          <div className="mx-4 border-l-[0.1px] border-[#ededed] h-[60px]"></div>
          <div>
            <span
              id="price"
              style={{ color: `${data.color}` }}
              className="font-bold"
            >
              {data.title}
            </span>
            <span className="mx-1 font-semibold">{data.stitle}</span>
            <br />
            <span>
              {data.subtitle}
              <span className="text-[red] mx-1">{data.badge}</span>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};
// style="color: #f65e96;"

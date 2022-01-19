import React from "react";
import { Cards } from "./Cards";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Dollar from "../../assets/Images/Dollar.png";
import Items from "../../assets/Images/Items.png";

const datas = [
  {
    key: 1,
    color: "#f65e96",
    title: "$50,150.00",
    stitle: null,
    subtitle: "Sales month to date ( Dec )",
    logo: { Dollar },
    badge: null,
  },
  {
    key: 2,
    color: "#4d9ae4",
    title: "405",
    stitle: null,
    subtitle: "Items",
    logo: { Items },
    badge: "( 2 new )",
  },
  {
    key: 3,
    color: "#fc8c43",
    title: "$76,000.00",
    stitle: null,
    subtitle: "Open Invoices",
    logo: { Items },
    badge: "( 6 new )",
  },
  {
    key: 4,
    color: "#f65e96",
    title: "257",
    stitle: null,
    subtitle: "Customers",
    logo: { Items },
    badge: null,
  },
  {
    key: 5,
    color: "red",
    title: "9",
    stitle: "( $1,15,000 )",
    subtitle: "Pending Orders",
    logo: { Items },
    badge: "( 666 in QB )",
  },
  {
    key: 6,
    color: "#03956a",
    title: "49",
    stitle: null,
    subtitle: "Documents",
    logo: { Items },
    badge: null,
  },
];

export const Dashboard = () => {
  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row flex-wrap justify-center items-start h-max my-4">
        {datas.map((data) => (
          <Cards data={data} />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

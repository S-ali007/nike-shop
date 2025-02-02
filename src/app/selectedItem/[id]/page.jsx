import React from "react";
import OpenItem from "../OpenItem";
import { ShoeSize, shop } from "../../../../utils/shop";

const SelectedItems = ({ params }) => {
  const openData = shop.find((data) => data.id == params.id);

  return (
    <div className=" ">
      <OpenItem openData={openData} />
    </div>
  );
};

export default SelectedItems;

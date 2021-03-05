import React from "react";
import ShipIcon from "../../assets/images/ship-icon.svg";
import CarIcon from "../../assets/images/car-icon.svg";
import SnowIcon from "../../assets/images/snow-icon.svg";
import TreeIcon from "../../assets/images/tree-icon.svg";
export default function Activity() {
  return (
    <div class="tag d-flex mt-2">
      <span class="mr-2 mt-1">
        <img src={ShipIcon} alt="ship" class="mt-2"></img>
      </span>
      <span class="mr-2 mt-1">
        <img src={CarIcon} alt="car" class="mt-2"></img>
      </span>

      <span class="mr-2 mt-1">
        <img src={SnowIcon} alt="snow" class="mt-2"></img>
      </span>
      <span class="mr-2 mt-1">
        <img src={TreeIcon} alt="snow" class="mt-2"></img>
      </span>
    </div>
  );
}

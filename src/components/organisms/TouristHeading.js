import React from "react";
import { CardTitle } from "reactstrap";
import Telescope from "../../assets/images/telescope.svg";
export default function TouristHeading() {
  return (
    <div class="media">
      <img src={Telescope} alt="Telescope Icon" class="mt-3"></img>
      <div class="media-body">
        <CardTitle tag="h2" className="text-white text-title display-4 ml-2">
          Burj al Khalifa
        </CardTitle>
      </div>
    </div>
  );
}

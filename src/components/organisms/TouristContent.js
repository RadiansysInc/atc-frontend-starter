import React from "react";
import { CardText } from "reactstrap";
import Exclamation from "../../assets/images/exclamation.svg";

export default function TouristContent() {
  return (
    <CardText className="text-lg mb-2">
      Burj Khalifa is the tallest tower in the world and it's one of the top
      attractions to visit in Dubai. Visit our website and book your Burj
      Khalifa ticke... <img src={Exclamation} alt="Exclamation Icon"></img>
    </CardText>
  );
}

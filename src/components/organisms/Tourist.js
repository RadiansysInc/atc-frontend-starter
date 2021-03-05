import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import Button from "./Button";
import Activity from "./Activity";
import Review from "./Review";
import TouristHeading from "./TouristHeading";
import TouristContent from "./TouristContent";
import GroupIcon from "../../assets/images/group.svg";

export default function Tourist() {
  return (
    <div class="card-section">
      <Card className="text-left bg-transparent border-0">
        <CardBody className="p-0">
          <TouristHeading />
          <TouristContent />
          <div class="d-flex justify-content-between pb-1">
            <div class="d-flex">
              <Activity />
              <Review />
            </div>
            <div>
              <img src={GroupIcon} alt="Text Icon" />
            </div>
          </div>
          <div class="d-flex mt-3 ">
            <Button />
            <span class="mt-2 ml-4 text-xl">$150</span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

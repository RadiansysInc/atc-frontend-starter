import React from "react";
import User from "../../assets/images/user.png";

export default function Review() {
  return (
    <div class="media ml-2">
      <img src={User} class="mr-2 mt-2" alt="User" />
      <div class="media-body">
        <p class="text-md mb-0 pr-5">
          I really enjoyed this <br></br> activity everytime...
        </p>
      </div>
    </div>
  );
}

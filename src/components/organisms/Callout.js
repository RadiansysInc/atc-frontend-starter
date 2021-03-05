import React from "react";

import Weather from "./Weather";
import Tourist from "./Tourist";

export default function Callout() {
  return (
    <div class="card-section">
      <Weather />
      <Tourist />
    </div>
  );
}

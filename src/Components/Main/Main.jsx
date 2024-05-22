import React from "react";
import Banner from "./Banner";
import Shopping from "./Shopping";
import Services from "./Serves/Services";
import Landing from "./LandingPage/Landing";

export default function Main() {
  return (
    <div className="">
      <Landing />
      <Services />
      <Shopping />
      <Banner />
    </div>
  );
}

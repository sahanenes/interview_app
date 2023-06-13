import React from "react";

import logo from "../assets/logo.jpeg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-5 " src={logo} alt="React logo" width="400" />
    <h1 className="mb-4">Welcome to Marvel World</h1>
  </div>
);

export default Hero;

import React from "react";
import { Typography, Button } from "@material-tailwind/react";

const Homee = () => {
  return (
    <section
      id="home"
      className="flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/img/heroimg.png)` }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 w-full max-w-7xl">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <Typography
            variant="h1"
            className="text-white font-extrabold text-4xl md:text-6xl leading-tight"
          >
            Empowering Women in Tech
          </Typography>
          <Typography
            variant="lead"
            className="text-white/80 text-lg md:text-xl"
          >
            Learn, lead, and innovate in computing with confidence and community.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Homee;

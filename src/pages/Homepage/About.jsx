import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import Footermain from "./FooterMain.jsx";
const About = () => {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/img/about.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/70 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                ACM-W : Supporting, Celebrating, and Advocating for Women in
                Computing Machinery
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                <strong>
                  The GGSIP USS ACM-W Student Chapter, established in 2023 at
                  GGSIP University, Delhi, operates under the guidance of Dr.
                  Khyati Chopra and Dr. Rahul Johari, with Ms. Gauranshi Gupta
                  as the inaugural Chair. This dynamic club hosts a spectrum of
                  events, including online and offline sessions, workshops, and
                  hackathons. With a robust community, it boasts 100+ active
                  members, fostering a collaborative environment for students to
                  engage, learn, and excel in CS and technology.
                </strong>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Footermain />
    </>
  );
};

export default About;

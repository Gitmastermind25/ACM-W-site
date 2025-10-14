// src/pages/Homepage/Event.jsx
import React from "react";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const allEvents = [
  { title: "IoT Workshop", desc: "Hands-on IoT session with Eigen Technologies", image: "/img/eigen.jpeg", date: "Jan 2024" },
  { title: "Python Workshop", desc: "Data preprocessing workshop by Abhijeet Tripathy", image: "/img/python.jpeg", date: "March 2024" },
  { title: "Carvaan", desc: "Cultural event in collaboration with IISC Bangalore", image: "/img/carvaan.jpeg", date: "May 2024" },
  { title: "VidyaMitra", desc: "Career guidance event for students from underprivileged backgrounds", image: "/img/vd.jpeg", date: "Sep 2024" },
  { title: "Seminar", desc: "Career guidance event for students from underprivileged backgrounds", image: "/img/seminar.png", date: "Jan 2025" },
  { title: "FANG Weekend 1", desc: "Career guidance event for students from underprivileged backgrounds", image: "/img/Fang1.png", date: "Sep 2025" },
  { title: "FANG Weekend 2", desc: "Career guidance event for students from underprivileged backgrounds", image: "/img/Fang2.png", date: "Sep 2025" },
  { title: "TriCode Showdown", desc: "Career guidance event for students from underprivileged backgrounds", image: "/img/event.png", date: "Oct 2025" },
];

const Event = () => {
  return (
    <section id="event" className="py-20 text-white relative">
      <div className="container mx-auto text-center mb-12">
        <Typography variant="h2" className="mb-4 font-bold text-pink-500">
          Our Events Timeline
        </Typography>
      </div>

      <div className="container mx-auto relative">
        {/* Center vertical line */}
        <div className="border-l-2 border-pink-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>

        <ul className="space-y-20">
          {allEvents.map((event, index) => {
            // Motion variant: slide from left
            const variants = {
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            };

            return (
              <motion.li
                key={index}
                className="flex justify-between items-center w-full relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
              >
                {/* Text on left */}
                <div className="w-1/2 pr-8 text-left">
                 <h3 className="text-pink-400 text-lg md:text-6xl font-semibold">{event.date}</h3>
                 <h4 className="text-3xl md:text-3xl font-bold mt-2">{event.title}</h4>
                 <p className="mt-3 text-gray-300 text-base md:text-lg">{event.desc}</p>

                </div>

                {/* Timeline dot */}
                <div className="rounded-full bg-pink-500 w-6 h-6 absolute left-1/2 transform -translate-x-1/2"></div>

                {/* Image on right */}
                <div className="w-1/2 pl-8">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-lg shadow-lg w-full h-100 object-cover"
                  />
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Event;

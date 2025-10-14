// src/pages/Homepage/Club.jsx
import React from "react";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const clubMentors = [
  { name: "Dr. Rahul Johari", role: "Faculty Mentor", image: "/img/rahulsir.jpg" },
  { name: "Dr. Khyati Chopra", role: "Co-Mentor", image: "/img/khyatimam.jpg" },
  
];

const Club = () => {
  return (
    <section id="club" className="py-20  text-white relative">
      <div className="container mx-auto text-center mb-12">
        <Typography variant="h2" className="mb-4 font-bold text-pink-500 text-4xl md:text-5xl">
          Our Club Mentors
        </Typography>
        <Typography className="opacity-80 text-lg md:text-xl">
          Guiding us with their wisdom, expertise, and passion.
        </Typography>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 px-6 justify-items-center">
  {clubMentors.map((mentor, index) => (
    <motion.div
      key={mentor.name}
      className=" rounded-2xl shadow-2xl overflow-hidden relative group w-80 md:w-96"
      whileHover={{ scale: 1.07 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-72 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <Typography
          variant="h5"
          className="text-pink-400 font-semibold text-2xl md:text-3xl mb-2"
        >
          {mentor.name}
        </Typography>
        <Typography className="text-white/80 text-lg md:text-xl">
          {mentor.role}
        </Typography>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  ))}
</div>

    </section>
  );
};

export default Club;

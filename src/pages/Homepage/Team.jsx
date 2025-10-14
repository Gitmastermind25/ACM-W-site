// src/pages/Homepage/Team.jsx
import React from "react";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Tanushree", role: "Chair", image: "/img/Tanushree.png" },
  { name: "Harshita Singh", role: "Vice Chair", image: "/img/harshita.png" },
  { name: "Mehak Srivastava", role: "Secretary", image: "/img/mehakk.png" },
  { name: "Riya Malhotra", role: "Joint Secretary", image: "/img/riyam.png" },
  { name: "Tanya Gupta", role: "Treasurer", image: "/img/tanya.png" },
];

const Team = () => {
  return (
    <section id="team" className="py-20  text-white relative">
      <div className="container mx-auto text-center mb-12">
        <Typography variant="h2" className="mb-4 font-bold text-pink-500 text-4xl md:text-5xl">
          Meet Our Team
        </Typography>
        <Typography className="opacity-80 text-lg md:text-xl">
          Passionate individuals driving ACM-W forward.
        </Typography>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className=" rounded-xl shadow-lg overflow-hidden relative group"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <Typography
                variant="h5"
                className="text-pink-400 font-semibold text-xl md:text-2xl mb-2"
              >
                {member.name}
              </Typography>
              <Typography className="text-white/80 text-base md:text-lg">
                {member.role}
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

export default Team;

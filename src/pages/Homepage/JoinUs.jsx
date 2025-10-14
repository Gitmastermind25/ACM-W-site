// src/pages/Homepage/JoinUs.jsx
import React from "react";
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";

const JoinUs = () => {
  return (
    <section
      id="joinus"
      className="py-20 relative bg-[url('/img/joinus-bg.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 container mx-auto px-4 max-w-3xl text-center text-white">
        <Typography variant="h2" className="mb-6 font-bold text-pink-500">
          Join ACM-W
        </Typography>
        <Typography className="mb-8 opacity-80">
          Fill the form below to collaborate, learn, and grow with us.
        </Typography>

        <form className="space-y-4">
          <Input variant="standard" size="lg" label="Full Name" className="text-white" />
          <Input variant="standard" size="lg" label="Email" className="text-white" />
          <Input variant="standard" size="lg" label="Year" className="text-white" />
          <Input variant="standard" size="lg" label="Branch" className="text-white" />
          <Textarea variant="standard" size="lg" label="Any message?" rows={4} className="text-white" />

          <Button
            variant="gradient"
            className="bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 mt-4"
            fullWidth
          >
            Register
          </Button>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;

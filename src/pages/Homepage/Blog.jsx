// src/pages/Homepage/Blog.jsx
import React from "react";
import { Typography } from "@material-tailwind/react";

const blogs = [
  {
    title: "Web Design with Tailwind CSS",
    author: "Gauranshi Gupta",
    image: "/img/Screenshot (1220).png",
    url: "https://medium.com/@gauranshigupta2000/mastering-responsive-web-design-with-tailwind-css-a-complete-guide-for-beginners-d620538aec0d",
  },
  {
    title: "RoadMap to Learn AI",
    author: "Benedict Neo",
    image: "/img/Screenshot (1224).png",
    url: "https://medium.com/bitgrit-data-science-publication/a-roadmap-to-learn-ai-in-2024-cc30c6aa6e16",
  },
  {
    title: "Supervised Learning",
    author: "Gauranshi Gupta",
    image: "/img/Screenshot (1219).png",
    url: "https://medium.com/acm-usict/understanding-supervised-learning-a-comprehensive-guide-to-classification-and-regression-models-4d82c35a70ea",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 text-white">
      <div className="container mx-auto text-center mb-12">
        <Typography variant="h2" className="mb-4 font-bold text-pink-500">
          Blogs
        </Typography>
        <Typography className="opacity-80">Learn and explore tech insights from our community.</Typography>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {blogs.map((blog) => (
          <a key={blog.title} href={blog.url} target="_blank" rel="noopener noreferrer" className="group">
            <div className=" p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
              <img src={blog.image} alt={blog.title} className="rounded-lg mb-4 h-48 w-full object-cover" />
              <Typography variant="h5" className="text-pink-400 font-semibold mb-2 group-hover:underline">
                {blog.title}
              </Typography>
              <Typography className="text-white/80">{blog.author}</Typography>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog

import React, { useState } from "react";

// Sample project data with categories, images, and links
const projects = [
  {
    title: "Finance",
    category: "Web development",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "https://github.com/your-username/finance-project", // Replace with actual project URL
  },
  {
    title: "Orizon",
    category: "Web development",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/orizon-project",
  }, {
    title: "Orizon",
    category: "Web development",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/orizon-project",
  },
  {
    title: "Fundo",
    category: "Web design",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/fundo-project",
  },
  {
    title: "Fundo",
    category: "Web design",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/fundo-project",
  },
  {
    title: "Brawlhalla",
    category: "Applications",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/brawlhalla-project",
  },
  {
    title: "DSM",
    category: "Web design",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/dsm-project",
  },
  {
    title: "MetaSpark",
    category: "Web design",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/metaspark-project",
  },
  {
    title: "Summary",
    category: "Web development",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/summary-project",
  },
  {
    title: "Task Manager",
    category: "Applications",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/task-manager-project",
  },
  {
    title: "Task Manager",
    category: "Applications",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/task-manager-project",
  },
  {
    title: "Task Manager",
    category: "Applications",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/task-manager-project",
  },
  {
    title: "Arrival",
    category: "Web development",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/your-username/arrival-project",
  },
];

// Categories for filtering
const categories = ["All", "Web design", "Applications", "Web development"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-gray-900 text-white p-8">
      {/* Filter Navigation Bar */}
      <div className="flex justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 text-sm font-medium rounded-lg hover:bg-yellow-500 transition duration-300 ${
              selectedCategory === category ? "bg-yellow-500" : "bg-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-xl font-semibold text-blue-400 hover:underline">
                {project.title}
              </h3>
            </a>
            <p className="text-sm text-gray-400">{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

import React from 'react';

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "React",
    "Tailwind CSS",
    "MongoDB",
    "Node.js",
    "Express",
    "Java",
  ];

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition duration-300"
          >
            <p className="text-lg font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

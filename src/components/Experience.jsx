const Experience = () => {
  const experienceD = [
    {
      company: "Flair IT Solutions Pvt. Ltd. (Frontend Developer)",
      years: "2023 — 2024",
      description:
        "Developed responsive and user-friendly web applications using HTML, CSS, and JavaScript, while utilizing jQuery for enhanced application interactivity. Implemented Bootstrap for designing responsive layouts and integrated React.js to build reusable components and manage state effectively. Collaborated with backend developers to integrate frontend with server-side logic, optimizing web applications for speed and scalability. Conducted code reviews, provided constructive feedback to team members, and resolved cross-browser compatibility issues. Improved UI/UX designs based on usability testing and feedback, ensuring best practices for web development were followed.",
    },
  ];

  const certifications = [
    {
      title: "Full Stack Web Development Certification",
      institution: "Pwskills",
      year: "2023",
    },
    {
      title: "React Developer Certification",
      institution: "KG-coading",
      year: "2022",
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="relative border-l border-gray-700">
        {experienceD.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
            <div>
              <h3 className="text-xl font-semibold">{item.company}</h3>
              <span className="block text-sm text-gray-400">{item.years}</span>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-6">Certifications</h2>
      <div className="relative border-l border-gray-700">
        {certifications.map((cert, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
            <div>
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <span className="block text-sm text-gray-400">{cert.institution} - {cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

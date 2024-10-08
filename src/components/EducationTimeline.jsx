

const EducationTimeline = () => {
  const educationData = [
    {
      school: "Madhya Pradesh Board of Secondary Education (10th)",
      years: "2013 — 2014",
      description: "Percentage: 67%",
    },
    {
      school: "Madhya Pradesh Board of Secondary Education (12th)",
      years: "2015 — 2016",
      description: "Percentage: 60%",
    },
    {
      school: "Awadhesh Pratap Singh University, Rewa (M.P.) - B.Sc. CS",
      years: "2016 — 2019",
      description: "Percentage: 67%",
    },
    {
      school: "Govt. T.R.S. College, Rewa (M.P.) - M.Sc. CS",
      years: "2021 — 2023",
      description: "Percentage: 65%",
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="relative border-l border-gray-700">
        {educationData.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
            <div>
              <h3 className="text-xl font-semibold">{item.school}</h3>
              <span className="block text-sm text-gray-400">{item.years}</span>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;

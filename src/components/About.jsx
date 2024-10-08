import Heading from "./Heading";

const About = () => {
  return (
    <section className="bg-gray-900 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <Heading name="About" />

        <div className="text-zinc-200 text-base leading-relaxed space-y-6">
          <p>
            Hi, I’m <span className="font-semibold text-white">Ritesh Singh</span>, a passionate Web Developer from Indore, Madhya Pradesh. 
            With over a year of hands-on experience, I specialize in building user-friendly, responsive web applications that provide seamless user experiences. 
            My journey as a developer has allowed me to craft intuitive interfaces using 
            <span className="font-semibold text-white"> HTML, CSS, JavaScript</span>, and <span className="font-semibold text-white">React</span> while collaborating with teams to create robust solutions.
          </p>

          <p>
            From integrating APIs for data handling to managing complex application states with <span className="font-semibold text-white">React Hooks</span>, 
            I am always keen to learn and adopt new technologies. I’m also a **MERN stack** full-stack developer, 
            proficient in working across both the frontend and backend using <span className="font-semibold text-white">MongoDB, Express, React, and Node.js</span>.
            Whether it’s designing elegant UI/UX layouts, building RESTful APIs, or ensuring smooth performance, I aim to solve real-world problems through technology.
          </p>

          <p>
            Currently, I am proud to have worked on projects like <span className="font-semibold text-white">Maashree Travels</span>, 
            a platform for flight and hotel bookings, and <span className="font-semibold text-white">Pratiyogitanirdeshika</span>, which provides educational resources for competitive exams in Hindi. 
            My focus is not just on writing code but also on creating impactful digital solutions that enhance user experience.
          </p>

          <p>
            When I'm not coding, you can find me exploring new frameworks, improving my backend skills, or brainstorming ideas for my next project. 
            Let’s connect and build something awesome!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

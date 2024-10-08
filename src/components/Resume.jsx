import EducationTimeline from "./EducationTimeline";
import Experience from "./Experience";
import Heading from "./Heading";
import Skills from "./Skills";

const Resume = ()=>{


  return(<>
    <div className="container">
    <div className="">
       <Heading  name="Resume"/>
    </div>
    
    <EducationTimeline/>

    <Experience/>
    <Skills/>
    </div>
    
    
    </>)

}

export default Resume;
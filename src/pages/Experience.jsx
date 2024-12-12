import ExperienceItem from "../components/ExperienceItem";
import { experiences } from "../data/all_data";

const Experience = () => {

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Work Experience</h1>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;


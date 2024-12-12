import { FaAward, FaCode } from 'react-icons/fa';
import { educationData, certifications } from '../data/all_data';
import EducationItem from '../components/EducationItem';


const Education = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Education</h1>
      {educationData.map((edu, index) => (
        <EducationItem key={index} {...edu} />
      ))}

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaAward className="mr-2 text-yellow-500" />
          Certifications
        </h2>
        <ul className="list-disc list-inside">
          {certifications.map((cert, index) => (
            <li key={index} className="mb-2">{cert}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaCode className="mr-2 text-green-500" />
          Additional Training
        </h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">Responsive Web Design</li>
          <li className="mb-2">System Design</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;


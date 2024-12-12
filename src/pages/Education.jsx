import { FaGraduationCap, FaAward, FaCode } from 'react-icons/fa';

const EducationItem = ({ degree, institution, period, details }) => (
  <div className="mb-8 bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-2 flex items-center">
      <FaGraduationCap className="mr-2 text-blue-500" />
      {degree}
    </h2>
    <h3 className="text-xl text-gray-600 mb-2">{institution}</h3>
    <p className="text-gray-500 mb-4">{period}</p>
    <ul className="list-disc list-inside">
      {details.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  </div>
);

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "School of Electrical Engineering and Computer Science, NUST, Islamabad",
      period: "September 2022 - May 2026 (Expected)",
      details: [
        "GPA: 3.6/4.0",
        "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development, Machine Learning",
        "Senior project: Developing an AI-powered personal finance management application"
      ]
    },
    {
      degree: "Intermediate in Computer Sciences",
      institution: "Punjab Group of Colleges",
      period: "May 2020 - June 2022",
      details: [
        "Graduated with honors",
        "President of the Computer Science Club",
        "Received an Award from The Institute of Charterted Accountants of Pakistan (ICAP)"
      ]
    }
  ];

  const certifications = [
    "Full Stack Developer Profressional Certificate - IBM",
    "Machine Learning Specialization - DeepLearning.AI",
  ];

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


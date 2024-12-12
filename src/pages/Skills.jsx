import { FaCode, FaDatabase, FaTools, FaCloud } from 'react-icons/fa';
import SkillsCard from '../components/SkillsCard';

const Skills = () => {
  const programmingLanguages = ['JavaScript', 'Python', 'TypeScript', 'C++', 'HTML', 'CSS'];
  const frameworks = ['React', 'Node.js', 'Express', 'Django', 'Spring Boot', 'TensorFlow'];
  const databases = ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Appwrite'];
  const tools = ['Git', 'Docker', 'Kubernetes', 'Postman'];
  const cloudPlatforms = ['AWS', 'Google Cloud Platform', 'Azure', 'Heroku'];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Skills</h1>
      <SkillsCard title="Programming Languages" skills={programmingLanguages} icon={<FaCode className="text-blue-500" />} />
      <SkillsCard title="Frameworks & Libraries" skills={frameworks} icon={<FaCode className="text-green-500" />} />
      <SkillsCard title="Databases" skills={databases} icon={<FaDatabase className="text-yellow-500" />} />
      <SkillsCard title="Tools & Technologies" skills={tools} icon={<FaTools className="text-red-500" />} />
      <SkillsCard title="Cloud Platforms" skills={cloudPlatforms} icon={<FaCloud className="text-purple-500" />} />
    </div>
  );
};

export default Skills;


const SkillsCard = ({ title, skills, icon }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold mb-4 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {skills.map((skill, index) => (
        <li key={index} className="bg-gray-100 rounded px-3 py-1 text-sm">{skill}</li>
      ))}
    </ul>
  </div>
);

export default SkillsCard;
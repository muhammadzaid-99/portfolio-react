const ExperienceItem = ({ title, company, period, description }) => (
    <div className="mb-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <h3 className="text-xl text-gray-600 mb-2">{company}</h3>
      <p className="text-gray-500 mb-4">{period}</p>
      <ul className="list-disc list-inside">
        {description.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );

  export default ExperienceItem
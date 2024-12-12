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

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Deep Learning Lab NUST",
      period: "June 2022 - August 2022",
      description: [
        "Contributed to the development and optimization of machine learning models focused on computer vision and natural language processing tasks.",
        "Assisted in implementing and training neural network architectures using TensorFlow and PyTorch, achieving improved model accuracy and performance.",
        "Collaborated with a team of researchers to preprocess datasets, apply feature engineering techniques, and evaluate model performance using various metrics.",
        "Presented findings and model results in team meetings, contributing to the lab's ongoing research projects and academic publications."
      ]
    },
    {
      title: "Research Assistant - LLMs",
      company: "BlueDiamond Austria",
      period: "October 2022 - Ongoing (Part-time)",
      description: [
        "Currently researching and developing techniques for optimizing large language models (LLMs) in natural language processing tasks.",
        "Worked on fine-tuning and training LLMs for specific applications, including text summarization, sentiment analysis, and question-answering.",
        "Collaborated with senior researchers to explore advanced deep learning architectures and their real-world applications in business and AI-driven solutions.",
        "Regularly contribute to academic papers and presentations on LLM advancements, participating in industry conferences and workshops."
      ]
    },
    {
      title: "Full-Stack Web Developer",
      company: "Various Projects",
      period: "Ongoing",
      description: [
        "Developing and deploying full-stack web applications, including front-end UI design, back-end APIs, and database management.",
        "Utilizing technologies such as React, Node.js, Express, MongoDB, and PostgreSQL to build scalable, high-performance applications.",
        "Collaborating with clients to understand business requirements, ensuring that the final product meets functional and technical expectations.",
        "Implementing secure authentication mechanisms, integrating third-party services, and optimizing application performance for better user experience and scalability."
      ]
    }
  ];


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


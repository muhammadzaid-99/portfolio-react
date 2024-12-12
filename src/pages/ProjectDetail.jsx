import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-700 mb-4">{project.long_description}</p>
      <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;


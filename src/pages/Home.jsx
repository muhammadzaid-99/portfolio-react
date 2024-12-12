import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
      <img src="src\assets\profile.jpeg" height={200} width={200} alt="Profile Image" className="rounded-full mx-auto mb-6" />
      <p className="text-xl mb-8">
        Hi, I'm <span className='font-medium'>Muhammad Zaid</span>. I'm a passionate Software Engineering student with a keen interest in building innovative solutions and exploring cutting-edge technologies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/projects" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          View My Projects
        </Link>
        <Link to="/contact" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Home;


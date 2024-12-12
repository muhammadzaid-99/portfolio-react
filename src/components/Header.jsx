import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap justify-center space-x-4">
          <li><Link to="/" className="hover:font-medium">Home</Link></li>
          <li><Link to="/about" className="hover:font-medium">About</Link></li>
          <li><Link to="/projects" className="hover:font-medium">Projects</Link></li>
          <li><Link to="/skills" className="hover:font-medium">Skills</Link></li>
          <li><Link to="/experience" className="hover:font-medium">Experience</Link></li>
          <li><Link to="/education" className="hover:font-medium">Education</Link></li>
          <li><Link to="/contact" className="hover:font-medium">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


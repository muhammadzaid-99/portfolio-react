export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    short_description: "A full-stack e-commerce platform with user authentication and payment integration.",
    long_description: "I developed a complete e-commerce platform aimed at providing an intuitive shopping experience for users and an efficient management system for retailers. The platform features secure user authentication, a dynamic product catalog, integrated payment systems via Stripe for seamless transactions, and an interactive user interface built with React. Additionally, I implemented an admin dashboard for managing products, orders, and customers, while ensuring the platform's scalability using Node.js, Express, and MongoDB for the backend and database management.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Task Management App",
    short_description: "A task management app enabling team collaboration and real-time updates.",
    long_description: "The Task Management App is designed to improve team productivity through efficient task assignment, tracking, and real-time updates. I created a user-friendly interface with React Native for a mobile-first approach, providing cross-platform support. Real-time data synchronization was implemented using Firebase, allowing users to collaborate effectively, set task priorities, and receive instant notifications. The app also includes features for task categorization, deadline tracking, and team member management. I utilized Redux for state management to ensure smooth performance even with large datasets.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Machine Learning Image Classifier",
    short_description: "A machine learning model to classify handwritten digits using TensorFlow and Keras.",
    long_description: "This project involved the development of a machine learning model to classify images of handwritten digits from the MNIST dataset, a classic problem in computer vision. Using Python, I built the model utilizing TensorFlow and Keras frameworks for deep learning. The model architecture consisted of convolutional neural networks (CNNs) to effectively capture spatial hierarchies in the images. I also implemented data preprocessing techniques using NumPy to scale and normalize the images for optimal training. The final model achieved high accuracy and demonstrated the potential for solving real-world image classification tasks.",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
    image: "/placeholder.svg?height=200&width=300",
  },
];

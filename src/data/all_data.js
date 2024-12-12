export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    short_description: "A full-stack e-commerce platform with user authentication and payment integration.",
    long_description: "I developed a complete e-commerce platform aimed at providing an intuitive shopping experience for users and an efficient management system for retailers. The platform features secure user authentication, a dynamic product catalog, integrated payment systems via Stripe for seamless transactions, and an interactive user interface built with React. Additionally, I implemented an admin dashboard for managing products, orders, and customers, while ensuring the platform's scalability using Node.js, Express, and MongoDB for the backend and database management.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "\\src\\assets\\ecommerce.jpeg",
  },
  {
    id: 2,
    title: "Task Management App",
    short_description: "A task management app enabling team collaboration and real-time updates.",
    long_description: "The Task Management App is designed to improve team productivity through efficient task assignment, tracking, and real-time updates. I created a user-friendly interface with React Native for a mobile-first approach, providing cross-platform support. Real-time data synchronization was implemented using Firebase, allowing users to collaborate effectively, set task priorities, and receive instant notifications. The app also includes features for task categorization, deadline tracking, and team member management. I utilized Redux for state management to ensure smooth performance even with large datasets.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "\\src\\assets\\task_management_tool.jpeg",
  },
  {
    id: 3,
    title: "Machine Learning Image Classifier",
    short_description: "A machine learning model to classify handwritten digits using TensorFlow and Keras.",
    long_description: "This project involved the development of a machine learning model to classify images of handwritten digits from the MNIST dataset, a classic problem in computer vision. Using Python, I built the model utilizing TensorFlow and Keras frameworks for deep learning. The model architecture consisted of convolutional neural networks (CNNs) to effectively capture spatial hierarchies in the images. I also implemented data preprocessing techniques using NumPy to scale and normalize the images for optimal training. The final model achieved high accuracy and demonstrated the potential for solving real-world image classification tasks.",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
    image: "\\src\\assets\\machine_learning.jpg",
  },
];

export const experiences = [
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

export const educationData = [
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

export const certifications = [
  "Full Stack Developer Profressional Certificate - IBM",
  "Machine Learning Specialization - DeepLearning.AI",
];
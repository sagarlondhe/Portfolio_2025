const mongoose = require('mongoose');
require('dotenv').config();

const Profile = require('../models/Profile');
const Experience = require('../models/Experience');
const Education = require('../models/Education');
const Skill = require('../models/Skill');
const Project = require('../models/Project');
const Certification = require('../models/Certification');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');

    // Clear existing data
    await Profile.deleteMany({});
    await Experience.deleteMany({});
    await Education.deleteMany({});
    await Skill.deleteMany({});
    await Project.deleteMany({});
    await Certification.deleteMany({});

    // Seed Profile
    const profile = new Profile({
      name: 'Sagar Dnyaneshwar Londhe',
      title: 'Software Developer',
      email: 'londhesagar2000@gmail.com',
      phone: '+91-7028661897',
      location: 'Mumbai, Maharashtra',
      professionalSummary: 'Software Developer with hands-on experience in developing dynamic web applications, RESTful APIs, and MongoDB data models. Skilled in React.js, Node.js, Express.js, and MongoDB with a strong focus on scalable architecture, clean code, and performance optimization. Passionate about building efficient, secure, and user-friendly software solutions.',
      socialLinks: {
        linkedin: '',
        github: '',
        twitter: '',
        instagram: ''
      }
    });
    await profile.save();

    // Seed Experiences
    const experiences = [
      {
        title: 'Software Developer',
        company: 'Divergent Insights',
        location: 'Ghatkopar, Mumbai',
        startDate: new Date('2025-09-01'),
        isCurrent: true,
        description: [
          'Developing and optimizing MERN stack applications with scalable and modular architecture.',
          'Enhancing GMOS 2.0 and OSM SaaS platforms for vendor management, survey workflows, and real-time operations.',
          'Building secure RESTful APIs, integrating MongoDB with Mongoose, and implementing authentication using JWT/OAuth.',
          'Collaborating with cross-functional teams to deliver reliable and maintainable code.'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OAuth']
      },
      {
        title: 'Software Developer Intern',
        company: 'Divergent Insights',
        location: 'Ghatkopar, Mumbai',
        startDate: new Date('2025-03-01'),
        endDate: new Date('2025-09-01'),
        isCurrent: false,
        description: [
          'Built and maintained dynamic MERN stack applications with reusable React components.',
          'Designed REST APIs, managed MongoDB with Mongoose, and implemented JWT/OAuth authentication.',
          'Worked on GMOS 2.0 and OSM SaaS platforms, focusing on survey workflows and vendor management.',
          'Used Postman for API testing and debugging.'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Postman']
      },
      {
        title: 'Software Developer',
        company: 'OneRoof Technologies LLP',
        location: 'Mulund, Mumbai',
        startDate: new Date('2022-07-01'),
        endDate: new Date('2023-05-01'),
        isCurrent: false,
        description: [
          'Developed and maintained multiple client projects and web applications.',
          'Resolved over 30+ bugs, improving overall system performance by 20%.',
          'Created APIs for mobile teams and performed system design & API integration from scratch.',
          'Worked on-site at ICICI Lombard for project deployment and client coordination.'
        ],
        technologies: ['.NET', 'ASP.NET MVC', 'SQL Server', 'C#']
      },
      {
        title: 'Software Developer Intern',
        company: 'OneRoof Technologies LLP',
        location: 'Mulund, Mumbai',
        startDate: new Date('2021-12-01'),
        endDate: new Date('2022-06-01'),
        isCurrent: false,
        description: [
          'Applied theoretical knowledge to real-world development tasks through hands-on projects.',
          'Built responsive web frontends using HTML, CSS, JavaScript, and Bootstrap.',
          'Developed backend REST APIs using .NET Framework and SQL Server.'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', '.NET', 'SQL Server']
      }
    ];
    await Experience.insertMany(experiences);

    // Seed Education
    const educations = [
      {
        degree: 'Master of Computer Application (MCA)',
        institution: 'NCRD Sterling Institute of Management Studies',
        location: 'Nerul, Navi Mumbai',
        startDate: new Date('2023-08-01'),
        endDate: new Date('2025-07-01'),
        isPursuing: false,
        grade: 'CGPI: 8.32 / 10'
      },
      {
        degree: 'Bachelor of Science – Information Technology (B.Sc-IT)',
        institution: 'Sonubhau Baswant College of Arts and Commerce',
        location: 'Shahapur, Mumbai',
        endDate: new Date('2021-05-01'),
        isPursuing: false,
        grade: 'CGPA: 8.57 / 10'
      },
      {
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'Saraswati Junior College',
        location: 'Vasind, Mumbai',
        endDate: new Date('2018-06-01'),
        isPursuing: false,
        grade: 'Percentage: 54.77%'
      },
      {
        degree: 'Secondary School Certificate (SSC)',
        institution: 'Saraswati Vidyalaya',
        location: 'Vasind, Mumbai',
        endDate: new Date('2016-06-01'),
        isPursuing: false,
        grade: 'Percentage: 78.20%'
      }
    ];
    await Education.insertMany(educations);

    // Seed Skills
    const skills = [
      { name: 'JavaScript', category: 'Programming Languages', proficiency: 90 },
      { name: 'Node.js', category: 'Programming Languages', proficiency: 85 },
      { name: 'C#', category: 'Programming Languages', proficiency: 80 },
      { name: 'HTML5', category: 'Web Technologies', proficiency: 95 },
      { name: 'CSS3', category: 'Web Technologies', proficiency: 90 },
      { name: 'jQuery', category: 'Web Technologies', proficiency: 85 },
      { name: 'React.js', category: 'Frameworks & Libraries', proficiency: 90 },
      { name: 'Express.js', category: 'Frameworks & Libraries', proficiency: 85 },
      { name: 'Bootstrap', category: 'Frameworks & Libraries', proficiency: 90 },
      { name: 'Tailwind CSS', category: 'Frameworks & Libraries', proficiency: 85 },
      { name: 'ASP.NET MVC', category: 'Frameworks & Libraries', proficiency: 80 },
      { name: 'MongoDB', category: 'Databases', proficiency: 85 },
      { name: 'MySQL', category: 'Databases', proficiency: 80 },
      { name: 'SQL Server', category: 'Databases', proficiency: 85 },
      { name: 'Git', category: 'Tools & Platforms', proficiency: 90 },
      { name: 'GitHub', category: 'Tools & Platforms', proficiency: 90 },
      { name: 'Postman', category: 'Tools & Platforms', proficiency: 85 },
      { name: 'Visual Studio Code', category: 'Tools & Platforms', proficiency: 95 },
      { name: 'Windows', category: 'Operating Systems', proficiency: 95 }
    ];
    await Skill.insertMany(skills);

    // Seed Projects
    const projects = [
      {
        title: 'Job Portal Application',
        description: 'A full-stack job portal application built with MERN stack, featuring job listings, user authentication, and application management.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        features: [
          'User authentication and authorization',
          'Job posting and search functionality',
          'Application tracking system',
          'Responsive design'
        ]
      },
      {
        title: 'Society Management System',
        description: 'A comprehensive society management system for managing residents, maintenance, and administrative tasks.',
        technologies: ['.NET', 'ASP.NET MVC', 'SQL Server', 'C#', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        features: [
          'Resident management',
          'Maintenance tracking',
          'Complaint management',
          'Payment integration'
        ]
      },
      {
        title: 'Online Spare Part Ordering System',
        description: 'An e-commerce platform for ordering automotive spare parts with inventory management and order tracking.',
        technologies: ['.NET', 'ASP.NET MVC', 'SQL Server', 'C#', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        features: [
          'Product catalog',
          'Shopping cart',
          'Order management',
          'Inventory tracking'
        ]
      }
    ];
    await Project.insertMany(projects);

    // Seed Certifications
    const certifications = [
      {
        title: 'ReactJS Complete Course',
        issuer: 'Udemy',
        issueDate: new Date('2024-01-01')
      },
      {
        title: 'HTML5 Ultimate Course',
        issuer: 'Udemy',
        issueDate: new Date('2023-01-01')
      },
      {
        title: 'CSS Essentials',
        issuer: 'Simplilearn',
        issueDate: new Date('2023-02-01')
      },
      {
        title: 'JavaScript Fundamentals',
        issuer: 'Simplilearn',
        issueDate: new Date('2023-03-01')
      },
      {
        title: 'Git & GitHub Masterclass',
        issuer: 'Udemy',
        issueDate: new Date('2023-04-01')
      },
      {
        title: 'Database Management Systems (DBMS)',
        issuer: 'SWAYAM',
        issueDate: new Date('2023-05-01')
      }
    ];
    await Certification.insertMany(certifications);

    console.log('Data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();


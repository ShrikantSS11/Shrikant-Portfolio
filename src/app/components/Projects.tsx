import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import transportImage from '@/imports/image.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Zepto Quick Commerce Product Page',
      description: 'A comprehensive mobile-first product detail page design for Zepto\'s quick commerce platform. This project showcases a complete e-commerce product interface featuring dynamic pricing modules, multiple size variants with discount badges, and an innovative "Frequently Bought Together" section that encourages upselling. The design emphasizes user-friendly navigation with a sticky header, high-quality product imagery with carousel indicators, and clear call-to-action buttons. Detailed product information including country of origin, shelf life, manufacturer details, and expiry dates are organized in an easily scannable format. The interface incorporates Zepto\'s signature pink-purple gradient brand colors throughout interactive elements, creating a cohesive and engaging shopping experience. Special attention was given to the visual hierarchy, ensuring critical information like pricing, discounts, and the add-to-cart button are immediately visible. The design balances information density with whitespace, making it easy for users to make quick purchasing decisions while having access to all necessary product details. Interactive elements include hover states, smooth transitions, and touch-optimized components perfect for mobile commerce.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      tags: ['Mobile UI', 'E-Commerce', 'Product Design', 'UX Research', 'Figma'],
      liveUrl: 'https://www.figma.com/proto/v6WR9vQ6Pj4JbmcyfUkvqX/zepto-project?node-id=1-3&p=f&viewport=739%2C424%2C0.13&t=hG6OARvjgManKfne-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&page-id=0%3A1',
      githubUrl: '#',
      gradient: 'from-pink-500 to-purple-600',
    },
    {
      id: 2,
      title: 'Transport Website',
      description: 'A professional transport and logistics website built for Senthilraja Transport. The site features a clean, modern design tailored for a transport business, showcasing services, fleet details, and contact information. Built with a focus on clarity and accessibility, the website delivers a strong online presence for the company with responsive layouts that work seamlessly across all devices. Deployed live on Vercel.',
      image: transportImage,
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Vercel'],
      liveUrl: 'https://senthilraja-transport.vercel.app/',
      githubUrl: 'https://github.com/ShrikantSS11/Senthilraja-Transport',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      id: 3,
      title: 'College Website',
      description: 'A fully functional, responsive college website built from scratch using HTML, CSS, and vanilla JavaScript. This project demonstrates strong fundamentals in front-end web development and showcases the ability to create complete web applications without relying on frameworks. The website features a modern, clean design with smooth animations, interactive navigation, and a mobile-responsive layout that adapts seamlessly across all devices. Key features include dynamic content sections, image galleries, form handling, and interactive UI components built with custom JavaScript. The project emphasizes semantic HTML structure, CSS Grid and Flexbox layouts, and DOM manipulation techniques. Special attention was given to performance optimization, cross-browser compatibility, and accessibility standards. The website includes multiple pages with consistent styling and navigation, demonstrating proficiency in organizing and maintaining a multi-page web application. The codebase is well-structured and documented, following best practices for maintainability and scalability. This project is fully deployed on GitHub Pages, showcasing the complete development workflow from coding to deployment.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'GitHub Pages'],
      liveUrl: 'https://shrikantss11.github.io/college_web/',
      githubUrl: 'https://github.com/shrikantss11/college_web',
      gradient: 'from-blue-600 to-cyan-600',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full border-4 border-violet-900/30"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-indigo-900/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase"></span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mt-2 relative inline-block">
            My Projects
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></div>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A collection of design projects showcasing my skills in UI/UX, web design, and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-violet-600 hover:text-white transition-colors duration-200 transform hover:scale-110"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-violet-600 hover:text-white transition-colors duration-200 transform hover:scale-110"
                    aria-label="View GitHub repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block px-3 py-1 text-xs font-medium bg-violet-100 text-violet-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-violet-100 to-transparent opacity-50 rounded-bl-full"></div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
            View More Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
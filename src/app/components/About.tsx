import { motion } from 'motion/react';
import { User } from 'lucide-react';
import profileImage from 'figma:asset/37ec524874feb2e175b0f5205e44a42f88b7acbe.png';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-indigo-900/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        ><h2 className="text-3xl font-bold text-white sm:text-4xl mt-2 relative inline-block">About Me<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></div></h2></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-violet-50 to-white p-8 rounded-3xl shadow-sm border border-violet-100 relative group hover:shadow-lg transition-all"
          >
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-violet-600 transform group-hover:scale-110 transition-transform duration-300">
               <User size={24} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-2">Professional Summary</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a passionate designer who believes that great design is about solving real problems for real people. My journey in design combines creativity with purpose, 
              always keeping the user at the center of every decision. I specialize in creating visual experiences that are not only beautiful but also intuitive and accessible. 
              From crafting pixel-perfect interfaces to designing complete brand identities, I approach each project with attention to detail and a deep understanding of design principles. 
              I work extensively with tools like Figma, Adobe Creative Suite, and various prototyping platforms to bring ideas to life. My design process starts with thorough research 
              and user empathy, followed by iterative sketching and wireframing. I believe in the power of typography, color theory, and layout to communicate messages effectively. 
              Whether it's designing a mobile app, a website, or marketing materials, I strive to create designs that resonate with the target audience. I'm constantly exploring 
              new design trends and techniques while maintaining timeless principles that ensure longevity. Collaboration is key to my process—I work closely with developers, 
              stakeholders, and other designers to ensure seamless execution. I'm particularly passionate about creating inclusive designs that work for everyone, regardless of 
              their abilities or backgrounds. My portfolio reflects a diverse range of projects, from minimalist interfaces to bold, expressive visual identities. I'm always 
              eager to take on new challenges that push my creative boundaries and help me grow as a designer. Every project is an opportunity to tell a story, solve a problem, 
              and create something meaningful that makes a positive impact on users' lives.
            </p>
            
            <div className="flex gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-800">
                Designer
              </span>
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 cursor-pointer hover:bg-indigo-200 transition-colors"
                onClick={() => window.open('https://github.com/ShrikantSS11', '_blank')}
              >
                GitHub
              </span>
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 cursor-pointer hover:bg-indigo-200 transition-colors"
                onClick={() => window.open('https://www.linkedin.com/in/shrikant-mulik-68a83a237', '_blank')}
              >
                LinkedIn
              </span>
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 cursor-pointer hover:bg-indigo-200 transition-colors"
                onClick={() => window.open('https://www.figma.com/@shrikant11', '_blank')}
              >
                Figma
              </span>
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 cursor-pointer hover:bg-indigo-200 transition-colors"
                onClick={() => window.open('https://www.instagram.com/xo_shri/', '_blank')}
              >
                Instagram
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img 
                src={profileImage} 
                alt="Shrikant Mulik - Software Developer" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-6 right-6 w-72 h-72 bg-violet-200 rounded-3xl opacity-20"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-indigo-200 rounded-full opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
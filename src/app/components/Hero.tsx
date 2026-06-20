import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import image_4937af244c172af4a1d9dac83726381b72cf0fe3 from 'figma:asset/4937af244c172af4a1d9dac83726381b72cf0fe3.png'
import profileImage from 'figma:asset/7032973aaf35cb287c40964c4b0ce5c617b1302f.png';
import chibiBoy from '@/imports/image-1.png';

const TERMINAL_TEXT = 'Welcome To My Portfolio';

const TerminalBadge = () => {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && index < TERMINAL_TEXT.length) {
      timeout = setTimeout(() => {
        setDisplayed(TERMINAL_TEXT.slice(0, index + 1));
        setIndex(index + 1);
      }, 80);
    } else if (!deleting && index === TERMINAL_TEXT.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayed(TERMINAL_TEXT.slice(0, index - 1));
        setIndex(index - 1);
      }, 40);
    } else if (deleting && index === 0) {
      setDeleting(false);
    }
    return () => clearTimeout(timeout);
  }, [index, deleting]);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 font-mono text-sm font-semibold tracking-wider text-green-400 bg-slate-900 rounded-full border border-green-800/60 shadow-inner">
      <span className="text-green-600">$</span>
      <span>{displayed}<span className="border-r-2 border-green-400 ml-0.5" /></span>
    </div>
  );
};


const ChibiCoder = () => (
  <motion.div
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    className="select-none pointer-events-none"
  >
    <img
      src={chibiBoy}
      alt="Chibi coder"
      style={{ mixBlendMode: 'multiply', width: '110px', height: '110px', objectFit: 'contain' }}
    />
  </motion.div>
);

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-950 pt-16 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-900/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-40 w-72 h-72 bg-indigo-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-20 w-72 h-72 bg-violet-900/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <TerminalBadge />
          <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            SHRIKANT <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">SHIVAJI MULIK</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light max-w-lg mx-auto md:mx-0">
            Computer Science & Engineering Student passionate about building digital experiences.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start mb-10 text-gray-400">
            
            <a href="tel:8940173320" className="flex items-center gap-3 hover:text-white transition-colors group">
              
              
            </a>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://d8it4huxumps7.cloudfront.net/uploads/attachements/user-resumes/shrimulik02_68a1b6e63f46e_690304302e94d.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3.5 rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all shadow-md"
            >
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="bg-transparent text-white px-8 py-3.5 rounded-full font-medium border border-slate-700 hover:border-blue-400 hover:text-blue-400 shadow-sm transition-all block"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-40 transform translate-x-4 translate-y-4 animate-pulse"></div>
            <div className="absolute inset-0 border-4 border-slate-800 rounded-full transform -rotate-6 scale-105"></div>
            <img 
              src={image_4937af244c172af4a1d9dac83726381b72cf0fe3} 
              alt="Shrikant Shivaji Mulik" 
              className="relative w-full h-full object-cover rounded-full border-8 border-slate-900 shadow-2xl z-10"
            />
            
            {/* Floating badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-slate-800 p-3 rounded-xl shadow-lg z-20 flex items-center gap-2 border border-slate-700"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white">Open to Work</span>
              {/* Chibi sitting on the badge edge */}
              <div className="absolute -top-20 -left-6 z-30">
                <ChibiCoder />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
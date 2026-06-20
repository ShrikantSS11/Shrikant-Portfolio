import { motion } from 'motion/react';
import { Code, User, Languages, Heart } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Technical Skills',
      icon: <Code className="w-6 h-6 text-white" />,
      skills: [
        { name: 'HTML, CSS', level: 80 },
        { name: 'JavaScript (Beginner)', level: 70 },
        { name: 'Java (Beginner)', level: 70 },
        { name: 'Figma (UI/UX Design)', level: 90 }
      ],
      colorClass: 'bg-gradient-to-r from-blue-400 to-blue-600',
      bgClass: 'bg-blue-500 shadow-blue-200'
    },
    {
      title: 'Soft Skills',
      icon: <User className="w-6 h-6 text-white" />,
      skills: [
        { name: 'Leadership', level: 85 },
        { name: 'Communication', level: 90 },
        { name: 'Teamwork', level: 95 },
        { name: 'Time Management', level: 80 }
      ],
      colorClass: 'bg-gradient-to-r from-emerald-400 to-emerald-600',
      bgClass: 'bg-emerald-500 shadow-emerald-200'
    },
    {
      title: 'Languages',
      icon: <Languages className="w-6 h-6 text-white" />,
      skills: [
        { name: 'English', level: 95 },
        { name: 'Tamil', level: 70 },
        { name: 'Marathi', level: 90 },
        { name: 'Hindi', level: 85 }
      ],
      colorClass: 'bg-gradient-to-r from-purple-400 to-purple-600',
      bgClass: 'bg-purple-500 shadow-purple-200'
    },
    {
      title: 'Hobbies',
      icon: <Heart className="w-6 h-6 text-white" />,
      skills: [
        { name: 'Ball Badminton', level: 0 },
        { name: 'Editing', level: 0 },
        { name: 'Reading', level: 0 },
        { name: 'Photography', level: 0 },
        { name: 'Yoga', level: 0 },
        { name: 'Chess', level: 0 },
        { name: 'Cooking', level: 0 }
      ],
      colorClass: 'bg-gradient-to-r from-rose-400 to-rose-600',
      bgClass: 'bg-rose-500 shadow-rose-200'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        ><h2 className="text-3xl font-bold text-white sm:text-4xl mt-2 relative inline-block">Skills & Interests<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></div></h2></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${category.bgClass} transform rotate-3 hover:rotate-6 transition-transform`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
              
              {category.title === 'Hobbies' ? (
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-sm ${category.colorClass}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                        <span className="text-gray-400 font-medium text-[12px]">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                          className={`h-full rounded-full shadow-sm ${category.colorClass}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
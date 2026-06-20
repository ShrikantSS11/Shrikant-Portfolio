import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.E – Computer Science and Engineering',
      institution: 'K.S. Rangasamy College of Technology',
      location: 'Tiruchengode',
      year: '2024 – 2027',
      status: 'Pursuing',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      degree: 'Diploma In Electrical And Electronics Engineering',
      institution: 'Thiyagarajar Polytechnic College',
      location: 'Salem',
      year: '2021 – 2024',
      status: 'Completed',
      color: 'from-violet-500 to-purple-600'
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full border-4 border-violet-900/30"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-indigo-900/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        ><h2 className="text-3xl font-bold text-white sm:text-4xl mt-2 relative inline-block">Education<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></div></h2></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-500`}></div>
              <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${edu.color} opacity-5 rounded-tr-full -ml-4 -mb-4 transition-transform group-hover:scale-110 duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-md transform group-hover:-translate-y-1 transition-transform`}>
                  <GraduationCap size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-900 transition-colors">{edu.degree}</h3>
                <h4 className="text-lg text-gray-600 font-medium mb-6">{edu.institution}</h4>
                
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-violet-50 rounded-lg text-violet-600">
                      <Calendar size={16} />
                    </div>
                    <span className="text-gray-600 font-medium">{edu.year}</span>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ml-auto ${edu.status === 'Pursuing' ? 'bg-indigo-100 text-indigo-700' : 'bg-green-100 text-green-700'}`}>
                      {edu.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-violet-50 rounded-lg text-violet-600">
                      <MapPin size={16} />
                    </div>
                    <span className="text-gray-600">{edu.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
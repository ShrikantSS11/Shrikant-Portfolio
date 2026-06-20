import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const internships = [
    {
      role: 'Advanced Robotics Intern',
      company: 'Nebula System',
      date: 'Dec 2024 – Jan 2025',
      location: 'Salem',
      description: [
        'Completed one-month training in Advanced Robotics.',
        'Demonstrated quick learning ability and dedication.'
      ]
    },
    {
      role: 'Intern',
      company: 'Mikrosun Technologies',
      date: 'May 2023 – Jun 2023',
      location: 'Salem',
      description: [
        'Learned Java programming fundamentals.',
        'Gained experience in web designing basics.'
      ]
    },
    {
      role: 'Intern',
      company: 'Caliber Embedded Technologies Pvt Ltd',
      date: 'Jan 2023',
      location: 'Salem',
      description: [
        'Worked with Arduino boards and embedded systems.',
        'Gained hands-on practical exposure.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background */}
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
        ><h2 className="text-3xl font-bold text-white sm:text-4xl mt-2 relative inline-block">Experience<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></div></h2></motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-200 via-indigo-200 to-violet-50 rounded-full"></div>

          <div className="space-y-16">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden md:block w-5/12"></div>
                
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-indigo-100 shadow-lg flex items-center justify-center z-10 hidden md:flex">
                  <div className="w-3 h-3 bg-violet-600 rounded-full"></div>
                </div>

                <div className="w-full md:w-5/12 bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 relative group">
                   {/* Decorative corner */}
                   <div className={`absolute top-0 w-24 h-24 bg-gradient-to-br from-violet-50 to-transparent rounded-tl-2xl -z-0 ${index % 2 !== 0 ? 'left-0' : 'right-0 md:left-0 md:rounded-tl-2xl md:rounded-tr-none'} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                   
                   <div className="md:hidden absolute -left-3 top-6 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center border-4 border-gray-50 shadow-md">
                      <Briefcase size={12} className="text-white" />
                   </div>
                   
                   <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-violet-700 transition-colors">{internship.role}</h3>
                      <h4 className="text-lg font-semibold text-indigo-600 mb-4">{internship.company}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-violet-500" />
                          <span>{internship.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-violet-500" />
                          <span>{internship.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {internship.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-1.5 flex-shrink-0 shadow-sm shadow-violet-200"></span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
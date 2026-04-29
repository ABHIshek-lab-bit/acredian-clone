'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { HiAcademicCap, HiBriefcase, HiLightBulb, HiChartBar } from 'react-icons/hi';

export default function AdvancedCourseSegmentation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const segments = [
    {
      title: 'Program Specific',
      description: 'Certificate, Executive, Post Graduate Certificate',
      image: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp',
      icon: HiAcademicCap,
      color: 'from-blue-500 to-cyan-500',
      features: ['Certified Programs', 'Executive Training', 'PG Certificates'],
    },
    {
      title: 'Industry Specific',
      description: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
      image: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp',
      icon: HiBriefcase,
      color: 'from-purple-500 to-pink-500',
      features: ['IT Solutions', 'Healthcare Tech', 'Retail Innovation'],
    },
    {
      title: 'Topic Specific',
      description: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
      image: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp',
      icon: HiLightBulb,
      color: 'from-green-500 to-teal-500',
      features: ['ML & AI', 'Design Thinking', 'Cloud Computing'],
    },
    {
      title: 'Level Specific',
      description: 'Senior Leadership, Mid-Career Professionals, Freshers',
      image: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp',
      icon: HiChartBar,
      color: 'from-orange-500 to-red-500',
      features: ['Leadership', 'Mid-Career', 'Entry Level'],
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
              Course Categories
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Tailored Course Segmentation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore Custom-fit Courses Designed to Address Every Professional Focus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200/50"
              >
                {/* Image with overlay */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-60`}
                    animate={{
                      opacity: activeCard === index ? 0.8 : 0.6,
                    }}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <segment.icon className={`text-2xl bg-gradient-to-r ${segment.color} bg-clip-text text-transparent`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {segment.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{segment.description}</p>

                  {/* Features */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeCard === index ? 'auto' : 0,
                      opacity: activeCard === index ? 1 : 0,
                    }}
                    className="space-y-2 overflow-hidden"
                  >
                    {segment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${segment.color}`} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-4 w-full py-2 bg-gradient-to-r ${segment.color} text-white rounded-xl font-semibold shadow-lg`}
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Decorative element */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${segment.color} rounded-full blur-3xl opacity-20`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

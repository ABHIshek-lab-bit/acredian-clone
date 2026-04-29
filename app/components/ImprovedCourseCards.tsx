'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { HiAcademicCap, HiBriefcase, HiLightBulb, HiChartBar, HiArrowRight } from 'react-icons/hi';

export default function ImprovedCourseCards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const segments = [
    {
      title: 'Program Specific',
      description: 'Certificate, Executive, Post Graduate Certificate',
      image: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp',
      icon: HiAcademicCap,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      features: ['Certified Programs', 'Executive Training', 'PG Certificates'],
    },
    {
      title: 'Industry Specific',
      description: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
      image: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp',
      icon: HiBriefcase,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      features: ['IT Solutions', 'Healthcare Tech', 'Retail Innovation'],
    },
    {
      title: 'Topic Specific',
      description: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
      image: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp',
      icon: HiLightBulb,
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50',
      features: ['ML & AI', 'Design Thinking', 'Cloud Computing'],
    },
    {
      title: 'Level Specific',
      description: 'Senior Leadership, Mid-Career Professionals, Freshers',
      image: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp',
      icon: HiChartBar,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
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
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative perspective-1000"
            >
              <motion.div
                animate={{
                  y: hoveredCard === index ? -15 : 0,
                  rotateY: hoveredCard === index ? 5 : 0,
                  scale: hoveredCard === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 transform-gpu"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Image Section with Gradient Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCard === index ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${segment.color}`}
                    animate={{
                      opacity: hoveredCard === index ? 0.85 : 0.6,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Animated Corner Badge */}
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{
                      scale: hoveredCard === index ? 1.2 : 1,
                      rotate: hoveredCard === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-2xl">
                      <segment.icon className={`text-2xl bg-gradient-to-r ${segment.color} bg-clip-text text-transparent`} />
                    </div>
                  </motion.div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                    animate={{
                      x: hoveredCard === index ? ['0%', '200%'] : '0%',
                      opacity: hoveredCard === index ? [0, 0.3, 0] : 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: 'easeInOut',
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="relative p-6">
                  {/* Background Gradient on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${segment.bgColor} opacity-0`}
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    {/* Title */}
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-2"
                      animate={{
                        x: hoveredCard === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {segment.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 text-sm mb-4"
                      animate={{
                        x: hoveredCard === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                    >
                      {segment.description}
                    </motion.p>

                    {/* Features List - Expands on Hover */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: hoveredCard === index ? 'auto' : 0,
                        opacity: hoveredCard === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mb-4"
                    >
                      <div className="space-y-2 pt-2">
                        {segment.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{
                              x: hoveredCard === index ? 0 : -20,
                              opacity: hoveredCard === index ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <motion.div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${segment.color}`}
                              animate={{
                                scale: hoveredCard === index ? [1, 1.3, 1] : 1,
                              }}
                              transition={{
                                duration: 1,
                                repeat: hoveredCard === index ? Infinity : 0,
                              }}
                            />
                            <span className="text-sm text-gray-700 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Button */}
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 bg-gradient-to-r ${segment.color} text-white rounded-xl font-semibold shadow-lg flex items-center justify-center space-x-2 group/btn overflow-hidden relative`}
                    >
                      {/* Button Background Animation */}
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ x: '-100%' }}
                        animate={{
                          x: hoveredCard === index ? '0%' : '-100%',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <span className="relative z-10 flex items-center space-x-2">
                        <span>Learn More</span>
                        <motion.div
                          animate={{
                            x: hoveredCard === index ? 5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <HiArrowRight className="text-lg" />
                        </motion.div>
                      </span>
                    </motion.button>
                  </div>
                </div>

                {/* Glowing Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${segment.color} opacity-0 blur-xl`}
                  animate={{
                    opacity: hoveredCard === index ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: -1 }}
                />

                {/* Corner Decoration */}
                <motion.div
                  animate={{
                    scale: hoveredCard === index ? 1.5 : 1,
                    opacity: hoveredCard === index ? 0.6 : 0.3,
                    rotate: hoveredCard === index ? 90 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${segment.color} rounded-full blur-3xl`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

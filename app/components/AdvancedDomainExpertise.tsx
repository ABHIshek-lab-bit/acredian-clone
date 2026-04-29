'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLightningBolt, HiTrendingUp, HiCode, HiCog, HiGlobe, HiCurrencyDollar, HiChip } from 'react-icons/hi';

export default function AdvancedDomainExpertise() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const domains = [
    {
      title: 'Product & Innovation Hub',
      icon: HiChip,
      color: 'from-blue-500 to-cyan-500',
      description: 'Drive innovation with cutting-edge product strategies',
    },
    {
      title: 'Gen-AI Mastery',
      icon: HiLightningBolt,
      color: 'from-purple-500 to-pink-500',
      description: 'Master the future of AI and machine learning',
    },
    {
      title: 'Leadership Elevation',
      icon: HiTrendingUp,
      color: 'from-orange-500 to-red-500',
      description: 'Transform into visionary leaders',
    },
    {
      title: 'Tech & Data Insights',
      icon: HiCode,
      color: 'from-green-500 to-teal-500',
      description: 'Harness the power of data and technology',
    },
    {
      title: 'Operations Excellence',
      icon: HiCog,
      color: 'from-indigo-500 to-blue-500',
      description: 'Optimize processes for peak performance',
    },
    {
      title: 'Digital Enterprise',
      icon: HiGlobe,
      color: 'from-yellow-500 to-orange-500',
      description: 'Lead digital transformation initiatives',
    },
    {
      title: 'Fintech Innovation Lab',
      icon: HiCurrencyDollar,
      color: 'from-emerald-500 to-green-500',
      description: 'Revolutionize financial technology',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.5) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

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
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
              Our Expertise
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Domain Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Specialized Programs Designed to Fuel Innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 overflow-hidden cursor-pointer">
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                  >
                    <domain.icon className="text-6xl text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {domain.title}
                  </h3>

                  {/* Description - shows on hover */}
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    className="text-white/90 text-sm overflow-hidden"
                  >
                    {domain.description}
                  </motion.p>
                </div>

                {/* Decorative corner */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/50 transition"
          >
            Explore All Programs →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

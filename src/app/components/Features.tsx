'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FolderIcon,
  CommandLineIcon,
  CogIcon,
  ArrowPathIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Project Structure Management',
    description: 'Track and manage your project directory structure efficiently with real-time updates.',
    icon: FolderIcon,
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Integrated Terminal',
    description: 'Built-in terminal allows you to execute commands directly from the interface.',
    icon: CommandLineIcon,
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Flexible Configuration',
    description: 'Customize settings according to your specific project requirements.',
    icon: CogIcon,
    color: 'from-green-400 to-green-600',
  },
  {
    name: 'Auto Synchronization',
    description: 'Automatically synchronize changes in real-time across your project.',
    icon: ArrowPathIcon,
    color: 'from-yellow-400 to-yellow-600',
  },
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" ref={ref}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 mb-4"
          >
            Key Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Discover powerful tools to enhance your project management efficiency
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
              
              <div className={`relative w-12 h-12 mb-6 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 relative">
                {feature.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 relative">
                {feature.description}
              </p>

              {/* Hover arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
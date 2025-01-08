'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../styles/animations.module.css'
import { 
  FolderIcon,
  CommandLineIcon,
  CogIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Project Structure Management',
    description: 'Track and manage your project directory structure efficiently with real-time updates.',
    icon: FolderIcon,
    color: 'from-blue-400 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
  },
  {
    name: 'Integrated Terminal',
    description: 'Built-in terminal allows you to execute commands directly from the interface.',
    icon: CommandLineIcon,
    color: 'from-purple-400 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
  },
  {
    name: 'Flexible Configuration',
    description: 'Customize settings according to your specific project requirements.',
    icon: CogIcon,
    color: 'from-green-400 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
  },
  {
    name: 'Auto Synchronization',
    description: 'Automatically synchronize changes in real-time across your project.',
    icon: ArrowPathIcon,
    color: 'from-yellow-400 to-yellow-600',
    gradient: 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20',
  },
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20" ref={ref}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 mb-4 ${styles.shimmer}`}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative ${feature.gradient} p-8 rounded-2xl ${styles['hover-glow']} backdrop-blur-sm border border-white/20`}
            >
              <div className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${feature.color} p-3 text-white ${styles.float}`}>
                <feature.icon className="w-full h-full" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 relative">
                {feature.name}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 relative leading-relaxed">
                {feature.description}
              </p>

              {/* Interactive elements */}
              <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:ring-2 ring-white/30 dark:ring-white/10" />
              <div className="absolute -inset-px rounded-2xl border border-white/50 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { WindowIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import styles from '../styles/animations.module.css'

interface Step {
  title: string
  command: string
  note?: string
}

interface Platform {
  name: string
  icon: React.ComponentType<{ className?: string }>
  steps: Step[]
  gradient: string
}

const platforms: Record<'windows' | 'mac', Platform> = {
  windows: {
    name: 'Windows',
    icon: WindowIcon,
    gradient: 'from-blue-400 to-blue-600',
    steps: [
      {
        title: 'Clone Repository',
        command: 'git clone https://github.com/RenjiYuusei/CursorFocus.git',
      },
      {
        title: 'Install Dependencies',
        command: 'cd CursorFocus && pip install -r requirements.txt',
      },
      {
        title: 'Configure Project',
        command: 'python setup.py --scan',
        note: 'This will create necessary configuration files',
      },
    ],
  },
  mac: {
    name: 'macOS',
    icon: CommandLineIcon,
    gradient: 'from-purple-400 to-purple-600',
    steps: [
      {
        title: 'Clone Repository',
        command: 'git clone https://github.com/RenjiYuusei/CursorFocus.git',
      },
      {
        title: 'Install Dependencies',
        command: 'cd CursorFocus && pip3 install -r requirements.txt',
      },
      {
        title: 'Configure Project',
        command: 'python3 setup.py --scan',
        note: 'This will create necessary configuration files',
      },
    ],
  },
}

export default function Installation() {
  const [selectedPlatform, setSelectedPlatform] = useState<'windows' | 'mac'>('windows')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const platform = platforms[selectedPlatform]

  return (
    <section id="installation" className="py-24 bg-gradient-to-br from-white via-gray-50 to-primary-50 dark:from-gray-800 dark:via-gray-900 dark:to-primary-900/20" ref={ref}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 mb-4 ${styles.shimmer}`}
          >
            Quick Installation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Get started with CursorFocus in minutes. Choose your platform and follow the steps below.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Platform selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-4 mb-12"
          >
            {Object.entries(platforms).map(([key, value]) => {
              const Icon = value.icon
              return (
                <button
                  key={key}
                  onClick={() => setSelectedPlatform(key as 'windows' | 'mac')}
                  className={`flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 ${styles['hover-glow']} ${
                    selectedPlatform === key
                      ? `bg-gradient-to-r ${value.gradient} text-white shadow-lg`
                      : `${styles.glass} text-gray-600 dark:text-gray-300`
                  }`}
                >
                  <Icon className={`w-6 h-6 ${selectedPlatform === key ? 'text-white' : ''}`} />
                  {value.name}
                </button>
              )
            })}
          </motion.div>

          {/* Installation steps */}
          <div className="space-y-6">
            {platform.steps.map((step: Step, index: number) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`${styles.glass} rounded-2xl p-8 ${styles['hover-glow']} backdrop-blur-sm border border-white/20`}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${platform.gradient} text-white font-bold`}>
                    {index + 1}
                  </span>
                  {step.title}
                </h3>
                <div className="relative group/code">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 font-mono text-sm">
                    <pre className="text-gray-200 whitespace-pre-wrap">{step.command}</pre>
                  </div>
                  <button
                    onClick={() => navigator.clipboard.writeText(step.command)}
                    className={`absolute top-3 right-3 p-2 ${styles.glass} rounded-lg opacity-0 group-hover/code:opacity-100 transition-opacity hover:bg-white/20`}
                    title="Copy to clipboard"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
                {step.note && (
                  <div className={`mt-4 flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 ${styles.fadeIn}`}>
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{step.note}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 

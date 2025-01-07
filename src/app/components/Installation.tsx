'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { WindowIcon, CommandLineIcon } from '@heroicons/react/24/outline'

interface Step {
  title: string
  command: string
  note?: string
}

interface Platform {
  name: string
  icon: React.ComponentType<{ className?: string }>
  steps: Step[]
}

const platforms: Record<'windows' | 'mac', Platform> = {
  windows: {
    name: 'Windows',
    icon: WindowIcon,
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
    <section id="installation" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900" ref={ref}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 mb-4"
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
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedPlatform === key
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
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
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {index + 1}. {step.title}
                </h3>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm relative group">
                  <pre className="text-gray-800 dark:text-gray-200">{step.command}</pre>
                  <button
                    onClick={() => navigator.clipboard.writeText(step.command)}
                    className="absolute top-3 right-3 p-2 rounded-md bg-gray-200 dark:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copy to clipboard"
                  >
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
                {step.note && (
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 italic">
                    Note: {step.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../styles/animations.module.css'
import {
  CommandLineIcon,
  DocumentIcon,
  Cog6ToothIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline'

interface Guide {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  code?: string
  details?: string[]
  note?: string
  color: string
  gradient: string
}

const usageGuides: Guide[] = [
  {
    title: 'Running CursorFocus',
    description: 'Start tracking your project structure with a simple command.',
    icon: CommandLineIcon,
    code: 'python focus.py',
    note: 'CursorFocus will start monitoring your project and update every 60 seconds.',
    color: 'from-green-400 to-green-600',
    gradient: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
  },
  {
    title: 'Generated .cursorrules',
    description: 'CursorFocus generates a .cursorrules file in your project directory.',
    icon: DocumentIcon,
    details: [
      'Create rules for your Ai to follow',
    ],
    color: 'from-blue-400 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
  },
  {
    title: 'Generated Documentation',
    description: 'CursorFocus generates comprehensive documentation in Focus.md.',
    icon: DocumentIcon,
    details: [
      'Project Overview',
      'Directory Structure',
      'File Descriptions',
      'Function Listings',
      'Code Analysis',
    ],
    color: 'from-indigo-400 to-indigo-600',
    gradient: 'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20',
  },
  {
    title: 'Configuration',
    description: 'Customize CursorFocus behavior through config.json.',
    icon: Cog6ToothIcon,
    code: `{
  "project_path": "",
  "update_interval": 60,
  "max_depth": 3,
  "ignored_directories": [
    "node_modules",
    "venv",
    ".git"
  ]
}`,
    color: 'from-purple-400 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
  },
]

export default function Usage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="usage" className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 mb-4 ${styles.shimmer}`}>
              How to Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Learn how to use CursorFocus effectively to maintain a clear view of your project structure.
            </p>
          </motion.div>
        </div>

        <div
          ref={ref}
          className="max-w-4xl mx-auto space-y-8"
        >
          {usageGuides.map((guide, index) => {
            const GuideIcon = guide.icon
            return (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`group relative ${guide.gradient} rounded-2xl p-8 ${styles['hover-glow']} backdrop-blur-sm border border-white/20`}
              >
                <div className="flex items-start gap-6 relative">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${guide.color} p-3 text-white ${styles.float}`}>
                    <GuideIcon className="w-full h-full" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {guide.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {guide.description}
                    </p>
                    
                    {guide.code && (
                      <div className="relative group/code">
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 font-mono text-sm mb-4">
                          <pre className="text-gray-200 whitespace-pre-wrap">
                            {guide.code}
                          </pre>
                        </div>
                        <button
                          onClick={() => navigator.clipboard.writeText(guide.code!)}
                          className={`absolute top-3 right-3 p-2 ${styles.glass} rounded-lg opacity-0 group-hover/code:opacity-100 transition-opacity hover:bg-white/20`}
                          title="Copy to clipboard"
                        >
                          <ClipboardDocumentCheckIcon className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    )}

                    {guide.details && (
                      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        {guide.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${guide.color} p-1 text-white flex items-center justify-center`}>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {guide.note && (
                      <div className={`mt-4 flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 ${styles.fadeIn}`}>
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{guide.note}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 
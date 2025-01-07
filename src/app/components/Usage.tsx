'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
}

const usageGuides: Guide[] = [
  {
    title: 'Running CursorFocus',
    description: 'Start tracking your project structure with a simple command.',
    icon: CommandLineIcon,
    code: 'python focus.py',
    note: 'CursorFocus will start monitoring your project and update every 60 seconds.',
    color: 'from-green-400 to-green-600',
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
    color: 'from-blue-400 to-blue-600',
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
  },
]

export default function Usage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="usage" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How to Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Learn how to use CursorFocus effectively to maintain a clear view of your project structure.
            </p>
          </motion.div>
        </div>

        <div
          ref={ref}
          className="max-w-4xl mx-auto space-y-12"
        >
          {usageGuides.map((guide, index) => {
            const GuideIcon = guide.icon
            return (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${guide.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />

                <div className="flex items-start gap-6 relative">
                  {/* Icon with gradient background */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${guide.color} p-2.5 text-white`}>
                    <GuideIcon className="w-full h-full" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {guide.description}
                    </p>
                    
                    {guide.code && (
                      <div className="relative group/code">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm mb-4">
                          <pre className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                            {guide.code}
                          </pre>
                        </div>
                        <button
                          onClick={() => navigator.clipboard.writeText(guide.code!)}
                          className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded opacity-0 group-hover/code:opacity-100 transition-opacity hover:bg-gray-300 dark:hover:bg-gray-600"
                          title="Copy to clipboard"
                        >
                          <ClipboardDocumentCheckIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                      </div>
                    )}

                    {guide.details && (
                      <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300">
                        {guide.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    {guide.note && (
                      <div className="flex items-start gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
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
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/animations.module.css'

const links = [
  {
    title: 'Documentation',
    items: [
      { label: 'Installation', href: '#installation' },
      { label: 'Usage Guide', href: '#usage' },
      { label: 'Features', href: '#features' },
      { label: 'GitHub', href: 'https://github.com/RenjiYuusei/CursorFocus' },
    ],
  },
  {
    title: 'Community',
    items: [
      { label: 'Discord', href: 'https://discord.gg/7MjqwynP' },
      { label: 'Issues', href: 'https://github.com/RenjiYuusei/CursorFocus/issues' },
      { label: 'Showcase', href: 'https://github.com/RenjiYuusei/CursorFocus/blob/main/SHOWCASE.md' },
      { label: 'Changelog', href: 'https://github.com/RenjiYuusei/CursorFocus/blob/main/CHANGELOG.md' },
    ],
  },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/RenjiYuusei/CursorFocus',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/7MjqwynP',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl font-bold mb-4 ${styles.shimmer}`}>
                Cursor<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">Focus</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                A lightweight tool that maintains a focused view of your project structure and environment.
                Automatically tracks your files, functions, and environment variables.
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-gray-400 hover:text-white transition-colors ${styles['hover-scale']}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-8 w-8" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {links.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              viewport={{ once: true }}
              className={`${styles.glass} rounded-2xl p-6 backdrop-blur-sm border border-white/10`}
            >
              <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.items.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors inline-flex items-center group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 group-hover:w-full transition-all duration-300" />
                      </span>
                      <svg
                        className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 mt-16 pt-8 text-center text-gray-400"
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} CursorFocus. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 
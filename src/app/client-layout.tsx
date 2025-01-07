'use client'

import { Suspense } from 'react'

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-8 w-full max-w-xl px-4">
        {/* Hero skeleton */}
        <div className="space-y-4">
          <div className="skeleton h-24 w-24 mx-auto" />
          <div className="skeleton h-12 w-3/4 mx-auto" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-5/6 mx-auto" />
        </div>

        {/* Features skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton h-48" />
          ))}
        </div>

        {/* Usage skeleton */}
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="skeleton h-32" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
} 
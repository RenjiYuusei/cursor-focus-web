import dynamic from 'next/dynamic'

// Loading components
function HeroLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-8 w-full max-w-xl px-4">
        <div className="skeleton h-24 w-24 mx-auto" />
        <div className="skeleton h-12 w-3/4 mx-auto" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-5/6 mx-auto" />
      </div>
    </div>
  )
}

function FeaturesLoading() {
  return (
    <div className="py-24">
      <div className="container">
        <div className="skeleton h-12 w-1/3 mx-auto mb-8" />
        <div className="skeleton h-4 w-2/3 mx-auto mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton h-48" />
          ))}
        </div>
      </div>
    </div>
  )
}

function InstallationLoading() {
  return (
    <div className="py-24">
      <div className="container">
        <div className="skeleton h-12 w-1/3 mx-auto mb-8" />
        <div className="skeleton h-4 w-2/3 mx-auto mb-16" />
        <div className="space-y-6 max-w-3xl mx-auto">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="skeleton h-32" />
          ))}
        </div>
      </div>
    </div>
  )
}

// Import client components with loading states
const Hero = dynamic(() => import('./components/Hero'), {
  loading: HeroLoading,
})

const Features = dynamic(() => import('./components/Features'), {
  loading: FeaturesLoading,
})

const Installation = dynamic(() => import('./components/Installation'), {
  loading: InstallationLoading,
})

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Installation />
    </main>
  )
}

import dynamic from 'next/dynamic'
import styles from './styles/animations.module.css'

// Loading components
function HeroLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className={`space-y-8 w-full max-w-xl px-4 ${styles.fadeIn}`}>
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
    <div className={`py-24 ${styles.fadeIn}`}>
      <div className="container">
        <div className="skeleton h-12 w-1/3 mx-auto mb-8" />
        <div className="skeleton h-4 w-2/3 mx-auto mb-16" />
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${styles.stagger}`}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`skeleton h-48 ${styles.fadeIn} ${styles['hover-lift']}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

function InstallationLoading() {
  return (
    <div className={`py-24 ${styles.fadeIn}`}>
      <div className="container">
        <div className="skeleton h-12 w-1/3 mx-auto mb-8" />
        <div className="skeleton h-4 w-2/3 mx-auto mb-16" />
        <div className={`space-y-6 max-w-3xl mx-auto ${styles.stagger}`}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`skeleton h-32 ${styles.slideIn}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

function UsageLoading() {
  return (
    <div className={`py-24 ${styles.fadeIn}`}>
      <div className="container">
        <div className="skeleton h-12 w-1/3 mx-auto mb-8" />
        <div className="skeleton h-4 w-2/3 mx-auto mb-16" />
        <div className={`space-y-8 max-w-4xl mx-auto ${styles.stagger}`}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`skeleton h-40 ${styles.scaleIn} ${styles['hover-scale']}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FooterLoading() {
  return (
    <div className={`py-12 bg-muted ${styles.fadeIn}`}>
      <div className="container">
        <div className="skeleton h-32" />
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

const Usage = dynamic(() => import('./components/Usage'), {
  loading: UsageLoading,
})

const Footer = dynamic(() => import('./components/Footer'), {
  loading: FooterLoading,
})

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Installation />
      <Usage />
      <Footer />
    </main>
  )
}

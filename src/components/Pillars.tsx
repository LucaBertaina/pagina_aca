import { useState, useEffect, useRef } from 'react'
import { landingContent } from '../data/landingContent'

// Import visual assets directly for Vite bundle processing
import oracionImg from '../assets/oracion.png'
import formacionImg from '../assets/formacion.png'
import accionImg from '../assets/accion.png'
import sacrificioImg from '../assets/sacrificio.png'

const pillarImages = [oracionImg, formacionImg, accionImg, sacrificioImg]

export function Pillars() {
  const { pillars } = landingContent
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef<number | null>(null)

  const startAutoRotation = () => {
    stopAutoRotation()
    timerRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.items.length)
    }, 5000)
  }

  const stopAutoRotation = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    startAutoRotation()
    return () => stopAutoRotation()
  }, [])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    // Restart automatic rotation timer from 0 when manually clicked
    startAutoRotation()
  }

  return (
    <section className="pillars-section" id="pilares">
      {/* Background Images Overlay Carousel */}
      <div className="pillars-bg-container">
        {pillars.items.map((item, index) => (
          <div
            key={item.title}
            className={`pillars-bg-slide ${activeIndex === index ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${pillarImages[index]})` }}
            aria-hidden="true"
          />
        ))}
        {/* Dark mask overlay to make text highly legible */}
        <div className="pillars-overlay" aria-hidden="true" />
      </div>

      {/* Content wrapper */}
      <div className="wrap pillars-content">
        <p className="eyebrow eyebrow--light">{pillars.title}</p>

        {/* Rotative text content */}
        <div className="pillars-text-slider">
          {pillars.items.map((item, index) => (
            <div
              key={item.title}
              className={`pillars-text-slide ${activeIndex === index ? 'is-active' : ''}`}
            >
              <h2 className="pillars-slide-title">{item.title}</h2>
              <p className="pillars-slide-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Dots indicators */}
        <div className="pillars-dots" role="tablist" aria-label="Pilares de la Acción Católica">
          {pillars.items.map((item, index) => (
            <button
              key={item.title}
              className={`pillars-dot ${activeIndex === index ? 'is-active' : ''}`}
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Ver pilar ${item.title}`}
              onClick={() => handleDotClick(index)}
            >
              <span className="pillars-dot-line"></span>
              <span className="pillars-dot-label">{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

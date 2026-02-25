import { useMemo } from 'react'
import styles from './StarBackground.module.css'

function generateStars(count: number): string {
  const shadows: string[] = []
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 5200)
    const y = Math.floor(Math.random() * 5200)
    shadows.push(`${x}px ${y}px #fff`)
  }
  return shadows.join(', ')
}

export default function StarBackground() {
  const stars1Shadow = useMemo(() => generateStars(1000), [])
  const stars2Shadow = useMemo(() => generateStars(600), [])
  const stars3Shadow = useMemo(() => generateStars(100), [])

  return (
    <section className={styles.animatedBackground} aria-hidden="true">
      <div
        className={styles.stars1}
        style={{ boxShadow: stars1Shadow }}
      />
      <div
        className={styles.stars2}
        style={{ boxShadow: stars2Shadow }}
      />
      <div
        className={styles.stars3}
        style={{ boxShadow: stars3Shadow }}
      />
    </section>
  )
}

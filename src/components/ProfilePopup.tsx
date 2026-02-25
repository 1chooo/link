import { useEffect, useCallback } from 'react'
import { profile } from '../data/links'
import styles from './ProfilePopup.module.css'

interface ProfilePopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProfilePopup({ isOpen, onClose }: ProfilePopupProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Profile picture popup"
    >
      <div
        className={`${styles.popup} ${isOpen ? styles.popupVisible : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.popupPhoto}>
          <a
            href={profile.avatarUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={profile.avatarUrl} alt={`${profile.name} full profile`} />
          </a>
        </div>
        <div className={styles.popupQuote}>{profile.popupQuote}</div>
        <button
          className={styles.popupClose}
          onClick={onClose}
          type="button"
          aria-label="Close popup"
        >
          {'\u00D7'}
        </button>
      </div>
    </div>
  )
}

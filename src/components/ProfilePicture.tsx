import { profile } from '../data/links'
import styles from './ProfilePicture.module.css'

interface ProfilePictureProps {
  onClick: () => void
}

export default function ProfilePicture({ onClick }: ProfilePictureProps) {
  return (
    <button
      className={styles.profilePicture}
      onClick={onClick}
      type="button"
      aria-label="View full profile picture"
    >
      <img
        src={profile.avatarUrl}
        alt={`${profile.name} profile picture`}
        className={styles.avatar}
      />
    </button>
  )
}

import { profile } from '../data/links'
import styles from './UserInfo.module.css'

export default function UserInfo() {
  return (
    <div className={styles.userName}>
      <h3>{profile.name}</h3>
      <p className={styles.bio}>{profile.bio}</p>
    </div>
  )
}

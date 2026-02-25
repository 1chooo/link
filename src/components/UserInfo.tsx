import { profile } from '../data/links'
import styles from './UserInfo.module.css'

export default function UserInfo() {
  return (
    <div className={styles.userName}>
      <h3>{profile.name}</h3>
      {profile.bio}
    </div>
  )
}

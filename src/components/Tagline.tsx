import { profile } from '../data/links'
import styles from './Tagline.module.css'

export default function Tagline() {
  return <div className={styles.tagline}>{profile.tagline}</div>
}

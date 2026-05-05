import { links } from '../data/links'
import LinkButton from './LinkButton'
import styles from './LinkList.module.css'

export default function LinkList() {
  return (
    <nav className={styles.links} aria-label="Social links">
      {links.map((link) => (
        <LinkButton key={link.label} link={link} />
      ))}
    </nav>
  )
}

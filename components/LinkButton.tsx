import type { LinkItem } from '../data/links'
import styles from './LinkButton.module.css'

interface LinkButtonProps {
  link: LinkItem
}

export default function LinkButton({ link }: LinkButtonProps) {
  const Icon = link.icon

  return (
    <a
      className={styles.link}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={styles.icon} />
      {' '}
      {link.label}
    </a>
  )
}

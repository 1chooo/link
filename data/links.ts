import type { IconType } from 'react-icons'
import {
  FaGithub,
  FaLinkedin,
  FaSignature,
} from 'react-icons/fa'

export interface LinkItem {
  label: string
  url: string
  icon: IconType
}

export const links: LinkItem[] = [
  { label: 'Github', url: 'https://github.com/1chooo', icon: FaGithub },
  { label: 'Linkedin', url: 'https://www.linkedin.com/in/1chooo/', icon: FaLinkedin },
  { label: 'Portfolio', url: 'https://1chooo.com/', icon: FaSignature },
]

export const profile = {
  name: 'Hugo (Chun-Ho) Lin',
  bio: 'CS @ USC | Making 1chooo.com more fun',
  avatarUrl: 'https://github.com/1chooo.png',
  tagline: `"You are too focused on the future without realizing that today is exactly what you prayed for years ago."`,
  popupQuote: `"You are too focused on the future without realizing that today is exactly what you prayed for years ago."`,
}

import type { IconType } from 'react-icons'
import {
  FaGithub,
  FaLinkedin,
  FaAws,
  FaInstagram,
  FaMedium,
  FaServer,
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
  { label: 'AWS Educate', url: 'https://awseducate.tw/2', icon: FaAws },
  { label: 'Instagram', url: 'https://www.instagram.com/lcho____', icon: FaInstagram },
  { label: 'Medium', url: 'https://medium.com/@1chooo', icon: FaMedium },
  { label: 'Portfolio', url: 'https://1chooo.com/', icon: FaServer },
  { label: 'Blog', url: 'https://1chooo.github.io/1chooo-blog/', icon: FaSignature },
]

export const profile = {
  name: 'Hugo ChunHo Lin',
  bio: 'AWS Educate Cloud Ambassador | Ex SWE Intern at PEGATRON CORP. | ATM, CS at NCU | @NCUAppTeam',
  avatarUrl: 'https://avatars.githubusercontent.com/u/94162591?v=4',
  tagline: `"You are too focused on the future without realizing that today is exactly what you prayed for years ago."`,
  popupQuote: `"You are too focused on the future without realizing that today is exactly what you prayed for years ago."`,
}

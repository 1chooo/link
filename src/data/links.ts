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
  tagline: `'' \u{1D63F}\u{1D667}\u{1D65A}\u{1D65E}\u{1D664}\u{1D668} \u{1D658}\u{1D666}\u{1D664}\u{1D65A} \u{1D669}\u{1D667}\u{1D66A}\u{1D65A}, \u{1D66C}\u{1D661}\u{1D65A}\u{1D665} \u{1FAF5}\u{1F3FB} \u{1D659}\u{1D666}\u{1D665}'\u{1D669} \u{1D668}\u{1D663}\u{1D65A}\u{1D65A}\u{1D667}\u{2026} ''`,
  popupQuote: `'' \u{1D63F}\u{1D667}\u{1D65A}\u{1D65E}\u{1D664}\u{1D668} \u{1D658}\u{1D666}\u{1D664}\u{1D65A} \u{1D669}\u{1D667}\u{1D66A}\u{1D65A}, \u{1D66C}\u{1D661}\u{1D65A}\u{1D665} \u{1D66A} \u{1D659}\u{1D666}\u{1D665}'\u{1D669} \u{1D668}\u{1D663}\u{1D65A}\u{1D65A}\u{1D667}\u{2026} ''`,
}

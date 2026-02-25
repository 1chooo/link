import { useState } from 'react'
import StarBackground from './components/StarBackground'
import ProfilePicture from './components/ProfilePicture'
import ProfilePopup from './components/ProfilePopup'
import UserInfo from './components/UserInfo'
import LinkList from './components/LinkList'
import Tagline from './components/Tagline'

export default function App() {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <>
      <StarBackground />
      <main>
        <ProfilePicture onClick={() => setPopupOpen(true)} />
        <ProfilePopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
        <UserInfo />
        <LinkList />
        <Tagline />
      </main>
    </>
  )
}

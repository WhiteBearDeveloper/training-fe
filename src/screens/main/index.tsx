import { Auth } from '@features/auth'
import { useState } from 'react'

export const MainScreen = () => {
  const [isAuthModalOpen, setAuthModalStatus] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setAuthModalStatus((prev) => !prev)}>Войти</button>
      {isAuthModalOpen && <Auth closeModal={() => setAuthModalStatus(false)} />}
    </>
  )
}

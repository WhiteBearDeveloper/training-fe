import { setAuthService } from '@api/services/auth'
import { AuthTypes } from '@api/services/auth/types'
import { useRef, useState } from 'react'

interface Props {
  closeModal: () => void
}

export const Auth = ({ closeModal }: Props) => {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [authType, setAuthType] = useState<AuthTypes>('login')

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const emailCurrent = emailRef.current
    const passwordCurrent = passwordRef.current
    // @ts-expect-error
    setEmail(emailCurrent.value)
    // @ts-expect-error
    setPassword(passwordCurrent.value)
    email &&
      password &&
      setAuthService({
        payload: {
          email,
          password
        },
        type: authType
      }).then((data) => closeModal())
  }
  return (
    <>
      <h1>{authType === 'login' ? 'Войти' : 'Регистрация'}</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="email" ref={emailRef} />
        <input type="text" name="password" ref={passwordRef} />
        <button type="submit">Отправить</button>
      </form>
      {authType === 'login' && (
        <span onClick={() => setAuthType('registration')}>
          Зарегистрироваться
        </span>
      )}
      {authType === 'registration' && (
        <span onClick={() => setAuthType('login')}>Войти</span>
      )}
    </>
  )
}

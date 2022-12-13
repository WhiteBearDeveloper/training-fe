import { setAuthService } from "@api/services/auth";
import { AuthTypes } from "@api/services/auth/types";
import { useRef, useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [authType, setAuthType] = useState<AuthTypes>("login");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const emailCurrent = emailRef.current;
    const passwordCurrent = passwordRef.current;
    // @ts-ignore
    setEmail(emailCurrent.value);
    // @ts-ignore
    setPassword(passwordCurrent.value);
    email &&
      password &&
      setAuthService({
        payload: {
          email,
          password,
        },
        type: authType,
      });
  };
  return (
    <>
      <h1>{authType === "login" ? "Войти" : "Регистрация"}</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="email" ref={emailRef} />
        <input type="text" name="password" ref={passwordRef} />
        <button type="submit">Отправить</button>
      </form>
      {authType === "login" && (
        <span onClick={() => setAuthType("registration")}>
          Зарегистрироваться
        </span>
      )}
      {authType === "registration" && (
        <span onClick={() => setAuthType("login")}>Войти</span>
      )}
    </>
  );
};

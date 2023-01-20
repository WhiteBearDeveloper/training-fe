import { setAuthService } from "@api/services/auth";
import { AuthTypes } from "@api/services/auth/types";
import React, { useRef, useState } from "react";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import formStyles from "@styles/modules/abstracts/form.module.scss";
import { FormWrapper, InputText } from "@ui";

interface Props {
  closeModal: () => void;
}

export const Auth = ({ closeModal }: Props): JSX.Element => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [authType, setAuthType] = useState<AuthTypes>("login");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const emailCurrent = emailRef.current;
    const passwordCurrent = passwordRef.current;
    // @ts-expect-error
    setEmail(emailCurrent.value);
    // @ts-expect-error
    setPassword(passwordCurrent.value);
    email !== null &&
      email !== undefined &&
      password !== null &&
      password !== undefined &&
      setAuthService({
        payload: {
          email,
          password,
        },
        type: authType,
      }).then((data) => closeModal());
  };
  return (
    <>
      <h1 className={titleStyles.lg}>
        {authType === "login" ? "Войти" : "Регистрация"}
      </h1>
      <FormWrapper onSubmit={onSubmitHandler}>
        <div className={formStyles.row}>
          <InputText
            type="text"
            name="email"
            ref={emailRef}
            placeholder="Введите email"
          />
        </div>
        <div className={formStyles.row}>
          <InputText
            type="text"
            name="password"
            ref={passwordRef}
            placeholder="Введите пароль"
          />
        </div>
        <button type="submit">Отправить</button>
      </FormWrapper>
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

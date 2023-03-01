import { setAuthService } from "@api/services/auth";
import { AuthTypes } from "@api/services/auth/types";
import React, { useRef, useState } from "react";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import formStyles from "@styles/modules/abstracts/form.module.scss";
import linkStyles from "@styles/modules/abstracts/link.module.scss";
import styles from "./auth.module.scss";
import { Button, FormWrapper, InputText } from "@ui";
import classNames from "classnames";

interface Props {
  closeModal: () => void;
  type?: AuthTypes;
}

export const Auth = ({ closeModal, type }: Props): JSX.Element => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [authType, setAuthType] = useState<AuthTypes>(type ?? "login");

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
    email &&
      password &&
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
        <div className={classNames(formStyles.row, styles.footer)}>
          <Button type="submit" text="Отправить" />
          {authType === "login" && (
            <Link
              type="registration"
              title="Зарегистрироваться"
              onClick={() => setAuthType("registration")}
            />
          )}
          {authType === "registration" && (
            <Link
              type="login"
              title="Войти"
              onClick={() => setAuthType("login")}
            />
          )}
        </div>
      </FormWrapper>
    </>
  );
};

interface LinkProps {
  type: AuthTypes;
  title: string;
  onClick: (type: AuthTypes) => void;
}

const Link = ({ type, title, onClick }: LinkProps): JSX.Element => {
  return (
    <span
      className={classNames(linkStyles["link-base"], styles.link)}
      onClick={() => onClick(type)}
    >
      {title}
    </span>
  );
};

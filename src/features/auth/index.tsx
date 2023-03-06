import { setAuthService } from "@api/services/auth";
import { AuthTypes } from "@api/services/auth/types";
import React, { useMemo, useState } from "react";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import formStyles from "@styles/modules/abstracts/form.module.scss";
import linkStyles from "@styles/modules/abstracts/link.module.scss";
import styles from "./auth.module.scss";
import { Button, FormWrapper, InputText } from "@ui";
import classNames from "classnames";
import * as yup from "yup";
import { AuthProps } from "@whitebeardeveloper/training-logic/logic/types/auth.types";
import { useForm } from "@api/hooks/form.hook";
import { FieldErrors } from "react-hook-form";
import { getSchema } from "./schema";

interface Props {
  closeModal: () => void;
  type?: AuthTypes;
}

export const Auth = ({ closeModal, type }: Props): JSX.Element => {
  const [authType, setAuthType] = useState<AuthTypes>(type ?? "login");

  const schema = useMemo(() => getSchema(authType), [authType]);

  type FormData = yup.InferType<typeof schema>;
  const onSuccessHandler = (data: FormData): void => {
    setAuthService({
      payload: {
        email: data.email,
        password: data.password,
      },
      type: authType,
    })
      .then((data) => closeModal())
      .catch(() => console.error());
  };

  const onFailHandler = (errors: FieldErrors): void => {
    console.error("errors :>> ", errors);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthProps>({
    schema,
  });

  return (
    <>
      <h1 className={titleStyles.lg}>
        {authType === "login" ? "Войти" : "Регистрация"}
      </h1>
      <FormWrapper onSubmit={handleSubmit(onSuccessHandler, onFailHandler)}>
        <div className={formStyles.row}>
          <InputText
            type="text"
            name="email"
            placeholder="Введите email"
            register={register}
            error={errors.email}
          />
        </div>
        <div className={formStyles.row}>
          <InputText
            type="password"
            name="password"
            placeholder="Введите пароль"
            register={register}
            error={errors.password}
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
